import styled, { keyframes } from 'styled-components'

const wave = keyframes`
  to {
    transform: translateX(-100%);
  }
`

export const Wrapper = styled.footer`
  width: 100%;
  position: relative;
  bottom: 0px;
  .fill {
    background-color: #221439;
    position: absolute;
    width: 100%;
    padding: 2em 0;
    transform: translateY(-60px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 680px) {
      flex-direction: column;
    }
  }
  svg {
    width: 100%;
  }
  .wave {
    animation: ${wave} 3s linear;
    animation-iteration-count: infinite;
    fill: #221439;
  }
  #wave2 {
    animation-duration: 5s;
    animation-direction: reverse;
    opacity: 0.6;
  }
  #wave3 {
    animation-duration: 7s;
    opacity: 0.3;
  }
`

export const Links = styled.div`
  width: 8%;
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
  img {
    margin: 0;
    width: 40px;
    transition: 0.4s;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 960px) {
    width: 16%;
  }
  @media (max-width: 680px) {
    width: 25%;
    margin: 2rem 0;
  }
`
export const Info = styled.div`
  max-width: 60%;
  margin-right: 15px;
  display: flex;
  align-items: center;
  p {
    color: var(--text-gray);
    /* font-weight: 900; */
    margin-bottom: 0;
    font-size: 1rem;
    img {
      width: 40px;
      margin-left: 5px;
    }
    span {
      color: var(--purple-color);
    }
  }
  p.phone {
    display: flex;
    padding-left: 2rem;
    align-items: center;
    img {
      width: 25px;
    }
  }
  @media (max-width: 680px) {
    flex-direction: column;
    margin: 0;
    p,
    p.phone {
      padding: 0.7rem;
      text-align: center;
      width: 100%;
      font-size: 13pt;
    }
  }
`
