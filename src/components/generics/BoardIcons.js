import { MdFamilyRestroom } from "react-icons/md";
import { RiSuitcaseFill } from "react-icons/ri";
import { GiCat } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import styled from "styled-components";

export default function BoardIcons( {icon} ) {
    const iconTable = {
        1: <MdFamilyRestroom/>,
        2: <RiSuitcaseFill/>,
        3: <GiCat/>,
        4: <FaGamepad/>
    }
    return(
        <Icon>
            {iconTable[icon]}
        </Icon>
    )
}

const Icon = styled.div`
    background-color: #BE264C;
    width: 34vw;
    height: 34vw;
    border-radius: 50%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 80%;
        height: 80%;
        color: white;
    }
`