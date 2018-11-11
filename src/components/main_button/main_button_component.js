import styled from 'vue-styled-components'

const MainButton = styled.div`
  font-family: lato;
  width: 300px;
  height: 50px;
  color: #FFF;
  background-color: #4267B2;
  display: flex;
  justify-content: center;
  cursor:pointer;
  &:hover{
    opacity:0.9;
  }
`

const TextButton = styled.div`
  align-self: center;
  font-size: 18px;
`

export {
  MainButton,
  TextButton
}
