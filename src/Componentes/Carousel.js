import styled from "styled-components";
import { useRef } from "react";

import { GrPrevious, GrNext } from "react-icons/gr"

export const Carousel = () => {

  const ref = useRef(null);

  const handleClick = (side) => {
    if(side === "right"){
      ref.current.scrollLeft += ref.current.offsetWidth;
      return;
    }
    ref.current.scrollLeft -= ref.current.offsetWidth;
  }
 
  return (
    <>
      <Container ref={ref}>
        <div><p>1</p></div>
        <div><p>2</p></div>
        <div><p>3</p></div>
      </Container>
      <Button>
        <GrPrevious cursor="pointer" onClick={() => handleClick("left")}/>
        <GrNext cursor="pointer" onClick={() => handleClick("right")}/>
      </Button>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar{
    display: none;
  }

  div{
    border-radius: 10px;
    display: flex;
    width: 100%;
    flex: none;
    justify-content: center;
    align-items: center;
    
    :nth-child(1) {
      background-color: red; 
    }
    
    :nth-child(2) {
      background-color: lightblue;
    }
    
    :nth-child(3) {
      background-color: coral;
    }

    p{
      font-size: 40px;
      font-weight: bold;
    }
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  svg{
    padding: 20px;
    width: 30px;
    height: 30px;
  }
`;