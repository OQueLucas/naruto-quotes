import styled from 'styled-components';
import { Quotes } from '../../components/quotes/Quotes';
import narutoImg from '../../images/naruto.png';

export function App() {
  return (
    <Content>
      <Quotes quote={"ok"} speaker={"Speaker"} />
      <NarutoImg src={narutoImg} alt="Naruto with a kunai" />
    </Content>
  )
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NarutoImg = styled.img`
  max-width: 50vh;
  align-self: flex-end;
`