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
                무기 1 : {data.inven.weapon.grade0}개
                <br />
                무기 2 : {data.inven.weapon.grade1}개
                <br />
                무기 3 : {data.inven.weapon.grade2}개
                <br />
                무기 4 : {data.inven.weapon.grade3}개
                <br />
                무기 5 : {data.inven.weapon.grade4}개
                <br />
                무기 6 : {data.inven.weapon.grade5}개
                <br />
                무기 7 : {data.inven.weapon.grade6}개
                <br />
                무기 8 : {data.inven.weapon.grade7}개
                <br />
                무기 9 : {data.inven.weapon.grade8}개
                <br />
                무기 10 : {data.inven.weapon.grade9}개
            </p>
            : 
            ""}

            <Link to="/Game">돌아가기</Link>
        </div>
    )
}

export default InventoryPage;