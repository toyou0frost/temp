import react, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import UserData from '../../provider/UserData';

import styled from 'styled-components';
import { weaponName } from '../object/WeaponName';

const InventoryPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    a{
        text-decoration: none;
        font-family: 'BMEuljiro10yearslater';
        background-color: rgba(0, 0, 0, 1);
        font-size: 1.2em;
        padding: 3vh;
        margin: 1.5vh;
        border: none;
        border-radius: 5px;
        color: white;
    }
    a:active{
        background-color: rgba(0, 0, 0, 0.7);
    }
`

const InventoryPage = () => {
    const [data, setData] = useState(Object);
    const [isGet, setIsGet] = useState(false);

    const a1 = "파괴방지 주문서";
    const a2 = "강화 확률 주문서 (10%)";
    const a3 = "강화 확률 주문서 (5%)";

    useEffect(() => {
        console.log(data);
        setIsGet(true)
    }, [data])

    return(
        <InventoryPageStyle>
            <h1>인벤토리</h1>
            <UserData.Consumer>
                {userData => {setData(userData)}}
            </UserData.Consumer>
            {isGet === true ? 
            <h1>
                자금 : {(data.money).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <br />
                파괴방지 주문서 : {data.inven.items[a1]}개
                <br />
                강화 확률 주문서 (10%) : {data.inven.items[a2]}개
                <br />
                무기 : {weaponName[data.inven.weapon.grade - 1]}({data.inven.weapon.grade}강)
                <br />
                <br />
            </h1>
            : 
            ""}
            <Link to="/Game">돌아가기</Link>
        </InventoryPageStyle>
    )
}

export default InventoryPage;