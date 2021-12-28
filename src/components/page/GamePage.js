import react, { useState, useEffect } from 'react'
import Footer from '../semantic/Footer';
import UserData from '../../provider/UserData';
import { UserDataObject } from '../object/UserDataObject';
import styled from 'styled-components';

const GamePageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const GamePage = (props) => {
    const [data, setData] = useState(Object);
    
    // useEffect(() => {
    //     console.log(data);
    //     UserDataObject.money -= 10000;
    // }, [data])
    
    return(
        <GamePageStyle>
            <h1>지팡이 강화하기</h1>
            <UserData.Consumer>
                {userData => {setData(userData)}}
            </UserData.Consumer>
            <Footer />
        </GamePageStyle>
    )
}

export default GamePage;