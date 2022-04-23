import styled from 'styled-components'

export const Wrapper = styled.div`
  min-width: 305px;
  div {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    ${({ sidebar }) =>
      sidebar &&
      `
		flex-direction: column;
		transform: translateY(100px);
   `}
  }
  img {
    width: 30px;
    border-radius: 50%;
    top: 10px;
    right: 10px;
    position: absolute;
    cursor: pointer;
    transition: all 0.05s ease-in;
    &:hover {
      transform: scale(1.2);
    }
    @media (max-width: 960px) {
      display: none;
    }
  }
  a {
    color: #8892b0;
    text-decoration: none;
    font-size: 17pt;
    transition: all 0.05s ease-in;
    padding: 3px 0px;
    border-radius: 10px;
    &:hover {
      ${({ sidebar }) =>
        !sidebar &&
        `
		color: #0a1928;
   `}
      transform: scale(1.015);
    }
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      width: 0%;
      height: 3px;
      transform: translateX(-50%);
      -webkit-transition: all 0.3s cubic-bezier(0.38, -0.25, 0.13, 0.75);
      -o-transition: all 0.3s cubic-bezier(0.38, -0.25, 0.13, 0.75);
      transition: all 0.3s cubic-bezier(0.38, -0.25, 0.13, 0.75);
    }
    &:after {
      bottom: -10%;
      background-color: var(--purple-color);
    }
    &:before {
      top: -10%;
      background-color: var(--purple-color);
    }
    &:hover:after,
    &:hover:before {
      width: 100%;
    }
    @media (max-width: 960px) {
      display: none;
      /* transition: all 5s ease-in-out; */
      ${({ sidebar }) =>
        sidebar &&
        `
		display: block;
		margin: 10px;
   `}
    }
  }
`
