import styled from 'styled-components'

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  padding: 1rem;
  &:hover {
    background-color: #221439;
    box-shadow: 0 0 4px #2ca72c;
    top: -6px;
    transform: translateY(-3px);
    transition: all 0.2s ease-out;
  }
`
