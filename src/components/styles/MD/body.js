import styled from 'styled-components'

const P = styled.p`
font-size: ${props => props.theme.fontSize.sm};
line-height: 1.5;
`

const BQ = styled.blockquote`
font-size: ${props => props.theme.fontSize.sm};
border-left: 2px solid;
padding-left: 1rem;
`

const Table = styled.table`
border: 1px solid ${props => props.theme.neutral.n600};
padding: 1rem;
border-collapse: collapse;
td, th {
  border: 1px solid ${props => props.theme.neutral.n600};
  padding: 0.75rem;
}
`

export { P, BQ, Table }