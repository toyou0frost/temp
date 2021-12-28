import react, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import UserData from '../../provider/UserData';
import { UserDataObject } from '../object/UserDataObject';
import styled from 'styled-components';

import { weaponName } from '../object/WeaponName';

const EnhancePageStyle = styled.div`
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

const EnhancePage = () => {
    const [data, setData] = useState(Object);
    const [isGet, setIsGet] = useState(false);
    const [n, setN] = useState(0);
    const [d, setD] = useState(0);
    const [i, setI] = useState(0);
    const [grade, setGrade] = useState(0);
    const [reload, setReload] = useState(0);
    let url;
    if(grade >= 12){
        url = `img/grade${grade}.gif`;
    }
    else{
        url = `img/grade${grade}.png`;
    }
    let alt = `${grade}강`
    let img = <img src={url} alt={alt} />;
    useEffect(() => {
        console.log(data)
        if(n === 0){
            setIsGet(true);
        }
    }, [data])

    useEffect(() => {
        console.log(data);
        setIsGet(true)
    }, [i])

    useEffect(() => {
        // console.log("reload");
    }, [reload])

    if(isGet){
        setN(data.inven.weapon.grade*data.inven.weapon.grade/200);
        setGrade(data.inven.weapon.grade);
        setIsGet(false);
    }
    
    const Enhance = () => {
        if(grade >= 15){
            console.log("최대 강화 입니다.")
            return
        }
        if(data.money < 5000*(grade)*(grade)*(grade)*(grade)){
            return
        }
        data.money -= 5000*(grade)*(grade)*(grade)*(grade);
        if(grade >= 10){
            setD(n-0.49);
        }
        if(UserDataObject.inven.items['강화 확률 주문서 (10%)'] === 0){
            if(Math.random() < 1 - n){
                UserDataObject.inven.weapon.grade += 1;
                setI(i + 1);
                setReload(reload + 1);
            }
            else{
                if(Math.random() > 1-d && UserDataObject.inven.items['파괴방지 주문서'] === 0){
                    UserDataObject.inven.weapon.grade = 1;
                    setGrade(1);
                    setReload(reload + 1);
                    setD(0);
                    setN(0);
                }
                else{
                    if(grade >= 10){
                        UserDataObject.inven.items['파괴방지 주문서'] -= 1;
                    }
                    setReload(reload + 1);
                }
            }
        }
        else{
            if(Math.random() < 1 - n - 0.1){
                UserDataObject.inven.weapon.grade += 1;
                setI(i + 1);
                setReload(reload + 1);
            }
            else{
                if(Math.random() > 1-d && UserDataObject.inven.items['파괴방지 주문서'] === 0){
                    UserDataObject.inven.weapon.grade = 1;
                    setGrade(1);
                    setReload(reload + 1);
                    setD(0);
                    setN(0);
                }
                else{
                    if(grade >= 10 && UserDataObject.inven.items['파괴방지 주문서'] !== 0){
                        UserDataObject.inven.items['파괴방지 주문서'] -= 1;
                    }
                    setReload(reload + 1);
                }
            }
            UserDataObject.inven.items['강화 확률 주문서 (10%)'] -= 1;
        }
    }
    return(
        <EnhancePageStyle>
            <h1>제련소</h1>
            <UserData.Consumer>
                {userData => {setData(userData)}}
            </UserData.Consumer>
            {data.money !== undefined ?
                <h2>자금 : {(data.money).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </h2>
            : ""}
            {data.money !== undefined ?
                <h2>파괴 방지 주문서 : {UserDataObject.inven.items['파괴방지 주문서']}개 강화 확률 주문서 (10%) : {UserDataObject.inven.items['강화 확률 주문서 (10%)']}개</h2>
            : ""}
            <h2>{weaponName[grade - 1]} ({grade}강) {grade !== 15 ? `성공 확률 : ${(1-n)*100}% 파괴 확률 : ${100 - (1-d)*100}%` : ""}</h2>
            <h2>{`가격 : ${(50000*(grade)*(grade)*(grade)*(grade)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 강화 비용 : ${(5000*(grade)*(grade)*(grade)*(grade)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</h2>
            {img}
            <button onClick={Enhance}>무기 강화</button>
            <Link to="/Game">돌아가기</Link>
        </EnhancePageStyle>
    )
}

export default EnhancePage;