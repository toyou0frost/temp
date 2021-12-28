import react, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import UserData from '../../provider/UserData';
import { UserDataObject } from '../object/UserDataObject';

const StorePage = () => {
    const [data, setData] = useState(Object);
    const [reload, setReload] = useState(0);

    const Purchase = (price, product) => {
        if(UserDataObject.money < price){
            console.log("잔액이 부족합니다.")
            return
        }
        UserDataObject.money -= price;
        UserDataObject.inven.items[product] += 1;
        setReload(reload + 1);
    }

    useEffect(() => {
        console.log(data);
    }, [reload])

    return(
        <div>
            StorePage
            <UserData.Consumer>
                {userData => {setData(userData)}}
            </UserData.Consumer>
            <p>현재 소지금 {data.money}</p>
            <button onClick={() => Purchase(10000, "파괴방지 주문서")}>파괴방지 주문서 구매하기</button>
            <button onClick={() => Purchase(10000, "강화 확률 주문서 (10%)")}>강화 확률 주문서 (10%) 구매하기</button>
            <button onClick={() => Purchase(10000, "강화 확률 주문서 (5%)")}>강화 확률 주문서 (5%) 구매하기</button>
            <Link to="/Game">돌아가기</Link>
        </div>
    )
}

export default StorePage;