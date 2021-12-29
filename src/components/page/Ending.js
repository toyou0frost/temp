import react from "react";
import styled from 'styled-components';

const EndingStyle = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(0,0,0,0.9);
    color: white;
    display: flex;
    justify-content: center;
`

const Ending = (props) => {
    const { onClose } = props;  

    return(
        <EndingStyle>
            <img src="img/Ending.gif" alt="Ending" onClick={() => {
                onClose(false);
            }} />
        </EndingStyle>
    )
}

export default Ending;