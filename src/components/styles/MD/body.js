import styled from 'styled-components'

const P = styled.p`
font-size: ${props => props.theme.fontSize.sm};
line-height: 1.5;
`

const OL = styled.ol`
margin: 1.5rem 0;
`

const UL = styled.ul`
margin: 1.5rem 0;
`

const LI = styled.li`
line-height: 1.5;
`

const BQ = styled.blockquote`
font-size: ${props => props.theme.fontSize.sm};
border-left: 2px solid;
padding-left: 1rem;
`

const Table = styled.table`
border: none;
padding: 1rem;
border-collapse: collapse;
width: 100%;
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


export { P, BQ, Table, TH, TD, OL, UL, LI }