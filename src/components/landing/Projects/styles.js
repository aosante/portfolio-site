import styled from 'styled-components'
import detailsIllustration from 'assets/illustrations/details.svg'

export const OuterContainer = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;

  @media (min-width: 1680px) {
    padding-bottom: 14rem;
  }
`

export const Wrapper = styled.div`
  padding: 2rem 0;
`

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  grid-gap: 1.5rem 3rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  background: var(--faded-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  height: 300px;
  width: 100%;
  &:hover {
    background-color: #221439;
    box-shadow: 0 0 4px #2ca72c;
    top: -6px;
    transition: all 0.2s ease-out;
  }
`

export const Header = styled.div`
  display: flex;

  div.icon {
    display: flex;
    align-items: center;
    flex: 3;
    img {
      width: 35px;
      margin: 0;
    }
  }
`

export const Links = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  .disabled:hover {
    cursor: not-allowed;
  }
  a,
  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    margin: 0;
    z-index: 1;
    img {
      width: 25px;
      height: 25px;
      margin: 0;
      z-index: 999;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`

export const Content = styled.div`
  padding: 1rem 0;
  h4 {
    color: var(--text-white);
    font-size: 1.5rem;
  }
`

export const Stack = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  li {
    color: #8892b0;
    font-size: 10pt;
  }
`
