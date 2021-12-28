import react, { useState, useEffect } from 'react'
import Footer from '../semantic/Footer';
import UserData from '../../provider/UserData';
import { UserDataObject } from '../object/UserDataObject';

const GamePage = (props) => {
    const [data, setData] = useState(Object);
    
    // useEffect(() => {
    //     console.log(data);
    //     UserDataObject.money -= 10000;
    // }, [data])
    
    return(
        <div>
            GamePage
            <UserData.Consumer>
                {userData => {setData(userData)}}
            </UserData.Consumer>
            <Footer />
        </div>
    )
}

export default GamePage;