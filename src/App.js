import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import StoreListItem from './components/ListItem';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(false)

  async function UpdateContent() {
    setLoading(true)

    await fetch("http://localhost:5234/items")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setItems(data))
      .catch(error => console.error('Fetch error:', error))
    setLoading(false)
  }

  useEffect(() => { UpdateContent() }, [])

  return (
    <div className="App">
      <Header />
      <ul className='custom-list'>
        {items.map(item => <StoreListItem key={item.id} name={item.name} description={item.description} price={item.price} />)}
      </ul>

    </div>
  )
}

export default App;
