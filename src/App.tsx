// crud/src/App.tsx
import UpdateCard from './components/UpdateCard'
import CardList from './components/CardList'
import NewCard from './components/NewCard'

import './App.css'
import { useState } from 'react'

function App() {
  const [cards, setCards] = useState([])

  return (
    <div className='board'>
      <UpdateCard setCards={setCards}/>
      <CardList cards={cards} setCards={setCards}/>
      <NewCard setCards={setCards}/>
    </div>
  )
}

export default App
