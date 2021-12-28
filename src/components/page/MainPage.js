import react from 'react'
import { Link } from 'react-router-dom';

const MainPage = (props) => {
    return(
        <div>
            Mainpage
            <Link to='/Game'>게임시작</Link>
        </div>
    )
}

export default MainPage;