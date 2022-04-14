import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 20px;
`

const Content: React.FC<any> = (props) => {
  return <Container>{props.children}</Container>
}

export default Content
