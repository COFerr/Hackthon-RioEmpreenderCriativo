import ClassifyAtom from '../../assets/images/CLASSIFY.png'
import S from '../../assets/styles/aplicationstyle'
import One from '../../assets/images/1.png'
import Two from '../../assets/images/2.png'
import Three from '../../assets/images/3.png'
import Four from '../../assets/images/4.png'
import { Link } from 'react-router-dom'


export const Aplication = () => {
    return (
        <>
        <S.PageTitle>Escolha seu artista</S.PageTitle>
            <S.Container>
                <S.Atom src={ClassifyAtom} alt="" />
                <S.Title>CLASSIFY</S.Title>
                <Link to="/LindsayStirling"><S.ImgOne src={One} alt="" /></Link>
                <Link to="/BrSinfonica"><S.ImgTwo src={Two} alt="" /></Link>
                <Link to="/TwoCellos"><S.ImgThree src={Three} alt="" /></Link>
                <Link to="/HeitorVillaLobos"><S.ImgFour src={Four} alt="" /></Link>
            </S.Container>
        </>
    )
}