import styled from 'styled-components'

export const AboutWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 680px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }

  @media (min-width: 1680px) {
    padding-bottom: 14rem;
  }
`

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  .text {
    @media (max-width: 960px) {
      margin-bottom: 4em;
    }
  }

  p {
    line-height: 1.3;
    text-align: left;
    &:last-of-type {
      margin-bottom: 2.5rem;
    }
  }

  a {
    color: ${({ theme }) => theme.textSecondary};
  }

  a.button {
    color: var(--text-white);
  }
`

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`
