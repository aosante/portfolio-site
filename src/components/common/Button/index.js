import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  border-radius: 8px;
  padding: 0.8rem 2rem;
  background-color: var(--purple-color);
  border: 1px solid var(--purple-color);
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: var(--text-white);
  transition: background-color 200ms ease-out;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #3b0571;
    border-color: #3b0571;
  }
`
