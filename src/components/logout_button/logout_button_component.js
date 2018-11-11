import styled from 'vue-styled-components'

const MainButton = styled.div`
  font-family: lato;
  width: 100px;
  height: 40px;
  margin-right: 20px;
  color: #FFF;
  background-color: #D66363;
  align-self: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover{
    opacity: 0.9;
  }
  border-radius: 5px;
`

const TextButton = styled.div`
  align-self: center;
  font-size: 18px;
`

export {
  MainButton,
  TextButton
}
