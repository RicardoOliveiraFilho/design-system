import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  height: '$4',
  width: '$4',
})

export function App() {
  return <Button>Olá Mundo</Button>
}