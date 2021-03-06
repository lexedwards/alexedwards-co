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

const InlineList = styled.ul`
display: flex;
padding: 0;
> li {
  list-style: none;
  font-weight: 600;
  color: ${props => props.theme.neutral.n600};
  &:not(:last-child) {
    margin-right: 1rem
  }
}
`

const LI = styled.li`
line-height: 1.5;
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
  word-wrap: anywhere;
  hyphens: auto;
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

const HR = styled.hr`
width: 50%;
color: ${props => props.theme.neutral.n100};
border-width: 2px;
border-radius: 2px;
border-style: solid;
`

export { P, BQ, Table, TH, TD, OL, UL, LI, InlineList, HR }