import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 0.4px solid var(--faded-color);
  padding: 0.8rem 1rem;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  transition: 0.3s;
  background-color: ${({theme}) => theme.fadedInputBg};
  color: ${({theme}) => theme.text};

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
  border: 0.4px solid var(--faded-color);
  padding: 0.8rem 1rem;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  transition: 0.3s;
  background-color: ${({theme}) => theme.fadedInputBg};
  color: ${({theme}) => theme.text};

  ${({ error }) =>
    error &&
    `
		border-color: #ff4136;
	`}

  &::placeholder {
    color: #8892b0;
  }
`
