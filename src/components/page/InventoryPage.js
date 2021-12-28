import react, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import UserData from '../../provider/UserData';

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
        <div>
            InventoryPage
            <UserData.Consumer>
                {userData => {setData(userData)}}
            </UserData.Consumer>
            {isGet === true ? 
            <p>
                자금 : {data.money}
                <br />
                파괴방지 주문서 : {data.inven.items[a1]}개
                <br />
                강화 확률 주문서 (10%) : {data.inven.items[a2]}개
                <br />
                강화 확률 주문서 (5%) : {data.inven.items[a3]}개
                <br />
                무기 : {data.inven.weapon.grade}단계
            </p>
            : 
            ""}

            <Link to="/Game">돌아가기</Link>
        </div>
    )
}

export default InventoryPage;