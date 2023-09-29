import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";

import styled from "styled-components";

const GamePlay = () => {
    const [score,setScore] = useState(0);
    const [selectedNumber,setSelectedNumber] = useState();
    const [currentDice,setCurrentDice] = useState(1);
    const [error,setError] = useState("");


    const setDice = (min,max) =>{
        if(!selectedNumber){
            setError("You have not selected any number");
            return;
        }

        const random = Math.floor(Math.random()* (max - min) + min);
        setCurrentDice((prev) => random);

        if(selectedNumber === random){
            setScore((prev) => prev+random);
        }else{
            setScore((prev) => prev-2)
        }

        setSelectedNumber(undefined);
    }

    return (
        <MainContainer>
            <div className="top_sec">
                <TotalScore score={score}/>
                <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
            </div>
            <RoleDice currentDice={currentDice} setDice={setDice}/>
        </MainContainer>
    )
}
export default GamePlay;

const MainContainer = styled.main`
padding-top: 70px;
.top_sec{
    display: flex;
    justify-content: space-around;
    align-items: end;
}
`;