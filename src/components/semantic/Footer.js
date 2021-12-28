import react from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterStyle = styled.div`
    ul{
        display: flex;
    }
    li{
        background-color: rgba(0, 0, 0, 1);
        padding: 3vh;
        list-style: none;
        margin: 1.5vh;
        border: none;
        border-radius: 5px;
        color: white;
    }
    li:active{
        background-color: rgba(0, 0, 0, 0.7);
    }
    a{
        text-decoration: none;
    }
`

const Footer = () => {
    return(
        <FooterStyle>
            <ul>
                <Link to='/Enhance'><li>강화</li></Link>
                <Link to='/Inventory'><li>인벤토리</li></Link>
                <Link to='/Store'><li>상점</li></Link>
            </ul>
        </FooterStyle>
    )
}

export default Footer;