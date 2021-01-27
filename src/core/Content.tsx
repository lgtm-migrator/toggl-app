import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 20px;
`

interface Props {}

const Content: React.FC<Props> = (props) => {
  return <Container>{props.children}</Container>
}

export default Content
