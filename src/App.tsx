import React from 'react'
import Card, { CardVariant } from './components/Card'

const App = () => {
  return (
    <div>
      <Card
        variant={CardVariant.primary}
        width="200px"
        height="200px"
        onClick={(num) => console.log('click', num)}
      >
        <button>Button</button>
        <div>ssspksd</div>
      </Card>
    </div>
  )
}

export default App
