import styled from 'vue-styled-components'

const prop = {
  authenticated: [Function, Boolean]
}

const Wrapper = styled('div', prop)`
  display: flex;
  justify-content: center;
  width:100%;
  height: 60px;
  border-bottom-color: #FFF;
  border-bottom-width: 1px;
  border-style: solid;
`

const MainText = styled.h1`
  align-self: center;
  font-family: lato;
  color:#FFF;
`

export {
  Wrapper,
  MainText
}
