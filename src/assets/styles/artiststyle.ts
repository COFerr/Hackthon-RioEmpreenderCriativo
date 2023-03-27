import styled from "styled-components";
import background from "../../../src/assets/images/3.png"

const Content = styled.div`
    background-image: url("../../../src/assets/images/2.png");
    background-repeat:no-repeat;
    background-position: left;
    margin: 100px 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ContentBox = styled.div`
    margin-left 30px;
    padding-left: 30px;
    border-left: solid black 1px;
    text-align: center;
    font-size: 35px;
    width: 50%;
`

const ContentText = styled.p`
text-align: center;
font-size: 25px;
`

export default {
    Content,
    ContentBox,
    ContentText
}