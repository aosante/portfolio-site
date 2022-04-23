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
    margin-bottom: 1.5rem;
    font-size: 14.3pt;
    font-weight: normal;
    line-height: 1.3;
    color: var(--caca);
    text-align: left;
    &:last-of-type {
      margin-bottom: 2.5rem;
    }
  }

  a {
    color: var(--purple-color);
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
