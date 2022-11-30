import styled from 'styled-components'

export const Wrapper = styled.div`
  min-width: 400px;
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
  svg {
    top: 10px;
    right: 10px;
    position: absolute;
    cursor: pointer;
    transition: all 0.08s ease-in;
    @media (max-width: 960px) {
      display: none;
    }
  }
  a {
    color: var(--text-white);
    text-decoration: none;
    font-size: 1rem;
    padding: 3px 0px;
    display: block;
    border-bottom: 1px solid transparent;
    transition: border 0.3s ease-in-out;
    &:hover {
      ${({ sidebar }) =>
        !sidebar && `color: var(--text-white-secondary);`}
    }
    &:hover {
      border-bottom: 1px solid white;
    }
    @media (max-width: 960px) {
      color: var(--purple-color);
      display: none;
      ${({ sidebar }) =>
        sidebar &&
        `
        display: block;
        margin: 10px;
      `}
    }
  }
`
