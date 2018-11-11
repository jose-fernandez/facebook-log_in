import styled from 'vue-styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #1fc8db;
  background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
`

const WrapperButton = styled.span`
  align-self: center;
`

const WrapperError = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
`

export {
  Wrapper,
  WrapperButton,
  WrapperError
}
