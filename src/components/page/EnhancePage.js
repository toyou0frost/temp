import react, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import UserData from '../../provider/UserData';
import { UserDataObject } from '../object/UserDataObject';

const EnhancePage = () => {
    const [data, setData] = useState(Object);
    const [isGet, setIsGet] = useState(false);
    const [n, setN] = useState(0);
    const [d, setD] = useState(0);
    const [i, setI] = useState(0);
    const [grade, setGrade] = useState(0);

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

    if(isGet){
        setN(data.inven.weapon.grade*data.inven.weapon.grade/200);
        setGrade(data.inven.weapon.grade);
        setIsGet(false);
    }
    
    const Enhance = () => {
        console.log(`현재 등급 ${grade}`);
        if(grade >= 10){
            setD(n-0.49);
        }
        if(grade >= 15){
            console.log("최대 강화 입니다.")
            return
        }
        console.log(`n = ${n} d = ${d}`);
        if(Math.random() < 1 - n){
            console.log(`성공 (확률 : ${(1-n)*100}%)`);
            console.log(`가격 : ${50000*(grade+1)*(grade+1)*(grade+1)}`);
            UserDataObject.inven.weapon.grade += 1;
            setI(i + 1);
        }
        else{
            if(Math.random() > 1-d){
                console.log(`장비 파괴 : (확률 : ${(1-d)*100}%)`);
            }
            else{
                console.log(`실패 (확률 : ${100 - (1-n)*100}%)`);
            }
        }
    }
    return(
        <div>
            EnhancePage
            <UserData.Consumer>
                {userData => {setData(userData)}}
            </UserData.Consumer>
            <button onClick={Enhance}>강화</button>
            <Link to="/Game">돌아가기</Link>
        </div>
    )
}

export default EnhancePage;