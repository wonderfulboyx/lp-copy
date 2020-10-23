import * as React from 'react'
import styled from 'styled-components'

const App: React.FC<{ name: string }> = (props) => {
  return (
    <AppWrapper>
      <h1>Hello React {props.name}</h1>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  & > h1 {
    color: red;
  }
`

export default App
