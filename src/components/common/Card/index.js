import styled from 'styled-components'

export const Card = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  &:hover {
    box-shadow: 0 0 4px #eaeaea;
    transform: translateY(-3px);
    transition: all 0.4s ease-out;
    top: -6px;
    background-color: #221439;
  }
`
