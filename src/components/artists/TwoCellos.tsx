import { JSXElementConstructor } from 'react'
import ClassifyAtom from '../../assets/images/CLASSIFY.png'
import S from '../../assets/styles/aplicationstyle'
import A from '../../assets/styles/artiststyle'
export const TwoCellos = () => {
    return (
        <>
        <S.PageTitle>2Cellos</S.PageTitle>
        <A.Content>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1Am_VZFps9o?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <A.ContentBox><A.ContentText>2CELLOS é uma dupla croata de violoncelistas, composta pelos violoncelistas de formação
                     clássica Luka Šulić e Stjepan Hauser. Eles lançaram seis álbuns.Eles tocaram arranjos instrumentais de canções pop
                      e rock bem conhecidas, bem como música clássica e de cinema. A dupla se apresentou internacionalmente e foi
                       destaque em várias séries de televisão americanas, incluindo Glee e The Bachelor (Sean e Catherine's Wedding).
                     </A.ContentText></A.ContentBox>
            </A.Content>
        </>
    )
}