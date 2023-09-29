import styled from "styled-components";
import StartGame from "./components/StartGame";
import { useState } from "react";

const Button = styled.button`
background-color:black;
color:white;
padding:10px;
`;

function App() {
  const [isGameStarted,setIsGameStarted] = useState(false);  

  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev);
  }
  
  return (
    <>
      <StartGame/>
    </>
  )
}

export default App
