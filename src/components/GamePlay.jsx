import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

import styled from "styled-components";

const GamePlay = () => {
    const [score,setScore] = useState(0);
    const [selectedNumber,setSelectedNumber] = useState();
    const [currentDice,setCurrentDice] = useState(1);
    const [error,setError] = useState("");
    const [rules,setRules] = useState(false);

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

    const resetScore = () =>{
        setScore(0);
    }

    const showRules = () =>{
        setRules((prev) => !prev);
    }

    return (
        <MainContainer>
            <div className="top_sec">
                <TotalScore score={score}/>
                <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
            </div>
            <RoleDice currentDice={currentDice} setDice={setDice}/>
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button onClick={showRules}>{rules ? "Hide" : "Show"} Rules</Button>
            </div>
            {rules && <Rules/>}
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

.btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:20px;
}
`;