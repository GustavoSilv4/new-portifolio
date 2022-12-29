import styled from 'styled-components'

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2.125rem;

  h1 {
    font-size: 1.625rem;
    color: ${(props) => props.theme.colors['red-600']};
  }
`

export const Navbar = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 2.45rem;

    a {
      font-size: 1.125rem;
      color: ${(props) => props.theme.colors['neutral-200']};
      text-decoration: none;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 4px;
        background-color: ${(props) => props.theme.colors['red-600']};
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
      }
      :hover {
        color: ${(props) => props.theme.colors['neutral-100']};
        ::before {
          transform-origin: left;
          transform: scaleX(1);
        }
      }
    }
  }
`

export const TopContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 7.25rem;

  > div {
    width: 18rem;

    h2 {
      color: ${(props) => props.theme.colors['neutral-100']};
      font-size: 2.25rem;
    }

    h2:nth-child(2) {
      color: ${(props) => props.theme.colors['red-600']};
    }

    > span {
      display: block;
      margin: 1.125rem 0 2.125rem 0;

      font-size: 1.125rem;
      font-weight: 500;
      color: ${(props) => props.theme.colors['zinc-400']};
    }

    div {
      display: flex;
      gap: 0.875rem;

      button {
        cursor: pointer;
        width: 9.75rem;
        padding: 0.75rem 2rem;

        border-radius: 6px;
        border: 1px solid #262626;

        color: ${(props) => props.theme.colors.white};
        background: ${(props) => props.theme.colors['neutral-900']};

        transition: all 0.2s;

        &:hover {
          background-color: ${(props) => props.theme.colors['red-600']};
        }
      }
    }
  }
`
export const AboutmeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors['neutral-200']};
  }

  > span {
    max-width: 50rem;
    font-size: 1.125rem;
    line-height: 32px;
    text-align: center;

    margin-top: 1.875rem;

    color: ${(props) => props.theme.colors['zinc-400']};
  }

  > div {
    display: flex;
    gap: 8.75rem;
    margin-top: 6.25rem;
  }
`

export const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;

  margin-top: 7.5rem;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors['neutral-200']};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3.125rem;
  }
`

export const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;

  margin-top: 7.5rem;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors['neutral-200']};
  }

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
`

export const ButtonBackonTop = styled.button`
  display: none;
  position: fixed;
  bottom: 65px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors['red-600']};
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
`

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  margin-top: 12.75rem;

  h2 {
    font-size: 1rem;
    font-weight: normal;

    strong {
      color: ${(props) => props.theme.colors['red-600']};
    }
  }

  background-color: ${(props) => props.theme.colors['neutral-800']};
`