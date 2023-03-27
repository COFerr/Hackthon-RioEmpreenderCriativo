import { JSXElementConstructor } from 'react'
import ClassifyAtom from '../../assets/images/CLASSIFY.png'
import S from '../../assets/styles/aplicationstyle'
import A from '../../assets/styles/artiststyle'

export const HeitorVillaLobos = () => {
    return (
        <>
        <S.PageTitle>Heitor Villa Lobos</S.PageTitle>
            <A.Content>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9X2TdHQuQso?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <A.ContentBox><A.ContentText>A inspiração da aplicação por associar elementos da música clássica a elementos regionais,
                     considerado talvez o maior compositor brasileiro,
                     o carioca Heitor Villa-Lobos nasceu em 5 de março de 1887. Seu pai, um músico amador, e sua mãe, dona-de-casa, o incentivaram a estudar música.
                     Tanto que ainda muito criança, Villa-Lobos aprende com o pai a tocar violão e violoncelo.
                    Sua primeira composição no violão foi aos 6 anos. Autodidata, ainda na infância aprendeu a tocar clarinete e saxofone.
                    Aos 16 anos passa a viver na casa de uma tia, que lhe ensina a tocar piano. Foi bastante influenciado por Johann Sebastian Bach,
                    mas também desenvolveu uma escuta atenta à música folclórica e popular do Brasil.
                     </A.ContentText></A.ContentBox>
            </A.Content>
        </>
    )
}