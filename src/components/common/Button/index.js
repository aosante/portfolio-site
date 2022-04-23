import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 1rem 2.5rem;
  border: 1.2px solid var(--purple-color);
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: var(--purple-color);
  transition: background-color 400ms ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(255, 10, 120, 0.15);
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: none;
	`}
`
