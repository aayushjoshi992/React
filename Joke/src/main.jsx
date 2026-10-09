import { createRoot } from 'react-dom/client'
import './index.css'
import Jokes from './App.jsx'

createRoot(document.getElementById('root')).render(
    <main>
  <Jokes
    setup="I got my daughter a fridge for her birthday."
    punchline="I can't wait to see her face light up when she opens it."
  />
  <Jokes
    setup="I got my daughter a fridge for her birthday."
    punchline="I can't wait to see her face light up when she opens it."
  />
  <Jokes
    setup="I got my daughter a fridge for her birthday."
    punchline="I can't wait to see her face light up when she opens it."
  />
  <Jokes
    setup="I got my daughter a fridge for her birthday."
    punchline="I can't wait to see her face light up when she opens it."
  />
  <Jokes
    setup="I got my daughter a fridge for her birthday."
    punchline="I can't wait to see her face light up when she opens it."
  />
  </main>
)