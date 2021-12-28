import react, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import UserData from '../../provider/UserData';
import { UserDataObject } from '../object/UserDataObject';
import styled from 'styled-components';

import { weaponName } from '../object/WeaponName';

const StorePageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button, a{
        font-family: 'BMEuljiro10yearslater';
        background-color: rgba(0, 0, 0, 1);
        font-size: 1.2em;
        padding: 3vh;
        margin: 1.5vh;
        border: none;
        border-radius: 5px;
        color: white;
    }
    button:active, a:active{
        background-color: rgba(0, 0, 0, 0.7);
    }
    a{
        text-decoration: none;
    }
`

const StorePage = () => {
    const [data, setData] = useState(Object);
    const [reload, setReload] = useState(0);
    const [isGet, setIsGet] = useState(false);

    const Purchase = (price, product) => {
        if(UserDataObject.money < price){
            console.log("잔액이 부족합니다.")
            return
        }
        UserDataObject.money -= price;
        UserDataObject.inven.items[product] += 1;
        setReload(reload + 1);
    }

    const sellWeapon = (price) => {
        UserDataObject.money += price;
        UserDataObject.inven.weapon.grade = 1;
        setReload(reload + 1);
    }

    useEffect(() => {
        console.log(data);
        setIsGet(true);
    }, [reload])

    return(
        <StorePageStyle>
            <h1>상점</h1>
            <UserData.Consumer>
                {userData => {setData(userData)}}
            </UserData.Consumer>
            {isGet ?
                <h1>자금 : {(data.money).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
            : ""}
            <button onClick={() => Purchase(10000000, "파괴방지 주문서")}>파괴방지 주문서 구매하기 (10,000,000원)</button>
            <button onClick={() => Purchase(5000000, "강화 확률 주문서 (10%)")}>강화 확률 주문서 (10%) 구매하기 (5,000,000원)</button>
            {isGet ? <button onClick={() => sellWeapon(50000*(data.inven.weapon.grade)*(data.inven.weapon.grade)*(data.inven.weapon.grade)*(data.inven.weapon.grade))}>무기 판매하기 ({weaponName[data.inven.weapon.grade - 1]} : {(50000*(data.inven.weapon.grade)*(data.inven.weapon.grade)*(data.inven.weapon.grade)*(data.inven.weapon.grade)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원)</button> : ""}
            <Link to="/Game">돌아가기</Link>
        </StorePageStyle>
    )
}

export default StorePage;