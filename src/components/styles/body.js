import styled from 'styled-components'

const P = styled.p`
font-size: ${props => props.theme.fontSize.sm};
line-height: 1.5;
margin-top: 0;
`

const OL = styled.ol`
margin: 0 0 1.5rem 0;
`

const UL = styled.ul`
margin: 0 0 1.5rem 0;
`

const LI = styled.li`
line-height: 1.5;
`

const InlineLI = styled.li`
line-height: 1.5;
display: inline;
`

const BQ = styled.blockquote`
font-size: ${props => props.theme.fontSize.sm};
border-left: 0.4rem solid;
padding-left: 0.75rem;
border-color: ${props => props.theme.neutral.n100};
color: ${props => props.theme.neutral.n700};
`

const Table = styled.table`
border: none;
margin: 2rem;
border-collapse: collapse;
width: calc(100% - 4rem);
tbody > tr {
  border-top: 1px solid ${props => props.theme.neutral.n100};
  border-bottom: 1px solid ${props => props.theme.neutral.n100};
}
td, th {
  padding: 0.75rem;
}
`
const TH = styled.th`
padding: 0.75rem;
font-size: ${props => props.theme.fontSize.md}
`

const TD = styled.td`
padding: 0.75rem;
font-size: ${props => props.theme.fontSize.sm}
`


export { P, BQ, Table, TH, TD, OL, UL, LI, InlineLI }