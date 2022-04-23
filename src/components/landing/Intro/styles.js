import styled from 'styled-components'
import overlayIllustration from 'assets/illustrations/overlay.svg'

export const Wrapper = styled.div`
  padding-bottom: 7rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;

  @media (max-width: 680px) {
    padding-bottom: 0;
  }
  @media (max-width: 960px) {
    background: none;
    padding-bottom: 4rem;
  }
  @media (min-width: 1680px) {
    padding-bottom: 14rem;
    padding-top: 2em;
  }
`

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 680px) {
    padding: 0;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    transform: translateY(-20px);
    text-align: center;
  }
`

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 4rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 3.625rem;
    letter-spacing: 1.75px;
    font-weight: 700;
    color: var(--text-white);

    div {
      color: var(--purple-color);
      display: inline-block;
    }
    @media (max-width: 680px) {
      span {
        display: none;
      }
    }

    @media (max-width: 960px) {
      font-size: 50pt;
      margin-top: 2rem;
      text-shadow: -0.5px -0.5px 0 #0a1928, 0.5px -0.5px 0 #0a1928,
        -0.5px 0.5px 0 #0a1928, 0.5px 0.5px 0 #0a1928;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 30pt;
    font-weight: normal;
    color: var(--text-white-secondary);
    letter-spacing: 1.5px;

    @media (max-width: 680px) {
      font-size: 28pt;
      span.hide {
        display: none;
      }
    }
  }

  span {
    color: var(--text-white);

    @media (max-width: 960px) {
      text-shadow: -0.1px -0.1px 0 #0a1928, 0.1px -0.1px 0 #0a1928,
        -0.1px 0.1px 0 #0a1928, 0.1px 0.1px 0 #0a1928;
    }
  }
`

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`
