import styled from "styled-components";

const RoleDice = ({currentDice,setDice}) => {

    return (
        <DiceContainer>
            <div className="dice" onClick={() => setDice(1,7)}>
                <img src={`/images/dice_${currentDice}.png`} alt="1" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RoleDice;


const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

p{
    font-size: 24px;
}

.dice{
    cursor: pointer;
}
`;
