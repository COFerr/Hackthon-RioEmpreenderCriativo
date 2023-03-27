import { JSXElementConstructor } from 'react'
import ClassifyAtom from '../../assets/images/CLASSIFY.png'
import S from '../../assets/styles/aplicationstyle'
import A from '../../assets/styles/artiststyle'

export const BrSinfonica = () => {
    return (
        <>
        <S.PageTitle>Petrobrás Sinfônica</S.PageTitle>
            <A.Content>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/An7Y321fG7g?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <A.ContentBox><A.ContentText>Pensando nessa ideia de "popularizar sem perder a essência" da música clássica,
                     criou "os mundos" que permeiam a Orquestra Petrobras Sinfônica, cada um com um perfil de concerto característico,
                      voltado para públicos diversos. Aos 48 anos, a Orquestra Petrobras Sinfônica se consolida como uma das mais
                       conceituadas do país e ocupa um lugar de prestígio entre os maiores conjuntos musicais da América Latina.
                        Criada pelo maestro Armando Prazeres, a orquestra se firmou como um ente cultural que expressa a pluralidade
                         da música brasileira e transita fluentemente por distintos estilos e linguagens. Tem como diretor artístico
                          e maestro titular Isaac Karabtchevsky, o mais respeitado regente brasileiro e um nome consagrado no panorama internacional.
                     </A.ContentText></A.ContentBox>
            </A.Content>
        </>
    )
}