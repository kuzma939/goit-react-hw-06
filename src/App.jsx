import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import './App.css'

function App() {
  return (
     //PersistGate: Компонент, який забезпечує збереження та відновлення стану з localStorage.
    
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <h1>Contact Book</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </PersistGate>
  
  )
}

export default App