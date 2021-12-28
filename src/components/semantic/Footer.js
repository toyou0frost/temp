import react from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div>
            <ul>
                <Link to='/Enhance'><li>강화</li></Link>
                <Link to='/Inventory'><li>인벤토리</li></Link>
                <Link to='/Store'><li>상점</li></Link>
            </ul>
        </div>
    )
}

export default Footer;