import { Container } from '@mui/material'
import PreviewCard from './components/PreviewCard'

export default function App() {
  const cardInfo = {
    name: 'Equilibrium',
    tag: '3249',
    description: 'Our Equilibrium collection promotes balance and calm.',
    price: 0.041,
    time: 3,
    autor: 'Gabriel Carreira'
  }
  return (
    <Container>
      <PreviewCard {...cardInfo} />
    </Container>
  )
}
