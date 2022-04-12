import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 1rem 2.5rem;
  border: 1.2px solid #ff0a78;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #ff0a78;
  font-family: 'SF Mono', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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
`;
