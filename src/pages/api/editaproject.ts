import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'
import { prisma } from '../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PUT') {
    return res.status(405).end()
  }

  await NextCors(req, res, {
    // Options
    methods: ['PUT', 'PATCH'],
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  const authorizationCode = req.headers.authorization

  if (authorizationCode !== process.env.AUTHORIZATION_REQ) {
    return res.status(401).json({ message: 'Código autorização incorreto!' })
  }

  const {
    projectId,
    projectName,
    imageUrl,
    description,
    repository,
    preview: previewLink,
  } = req.body

  if (!projectId) {
    return res
      .status(400)
      .json({ message: 'Necessário informar o id do projeto!' })
  }

  const editedProject = await prisma.projects.update({
    where: {
      id: projectId,
    },
    data: {
      project_name: projectName !== '' ? projectName : undefined,
      image_url: imageUrl !== '' ? imageUrl : undefined,
      description: description !== '' ? description : undefined,
      repository: repository !== '' ? repository : undefined,
      preview_link: previewLink !== '' ? previewLink : undefined,
    },
  })

  return res.status(201).json({ editedProject })
}
