import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 0.4px solid rgba(255, 255, 255, 0.1);
  padding: 0.8rem 1rem;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  transition: 0.3s;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ccd6f6;

  ${({ error }) =>
    error &&
    `
		border-color: #ff4136;
	`}

  &::placeholder {
    color: #8892b0;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border: 0.4px solid rgba(255, 255, 255, 0.1);
  padding: 0.8rem 1rem;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  transition: 0.3s;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ccd6f6;

  ${({ error }) =>
    error &&
    `
		border-color: #ff4136;
	`}

  &::placeholder {
    color: #8892b0;
  }
`
