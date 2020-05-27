import styled from 'styled-components'

const H1 = styled.h1`
font-size: ${props => props.theme.fontSize.xxxlg};
line-height: 1.465;
`

const H2 = styled.h2`
font-size: ${props => props.theme.fontSize.xxlg};
line-height: 1.85;
`

const H3 = styled.h3`
font-size: ${props => props.theme.fontSize.xlg};
line-height: 1.55;
`

const H4 = styled.h4`
font-size: ${props => props.theme.fontSize.lg};
line-height: 1.93;
`

const H5 = styled.h5`
font-size: ${props => props.theme.fontSize.md};
line-height: 1.2;
`

const H6 = styled.h6`
font-size: ${props => props.theme.fontSize.sm};
line-height: 1.5;
`

export { H1, H2, H3, H4, H5, H6 }