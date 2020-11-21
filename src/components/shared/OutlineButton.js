import styled from 'styled-components'
import SolidButton from './SolidButton'

const OutlineButton = styled(SolidButton)`
  color: ${props => props.primaryColor};
  background-color: transparent;
  &:hover {
    color: white;
    background-color: ${props => props.primaryColor};
  }
`
export default OutlineButton
