import { useState } from 'react' //useState: Хук для керування локальним станом введених значень.
import { useDispatch } from 'react-redux' //useDispatch: Хук для відправки дій в Redux.
import { addContact } from '../../redux/contactsSlice'
import styles from './ContactForm.module.css'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const dispatch = useDispatch()
//handleSubmit: Обробник форми, який додає новий контакт в Redux стан.
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addContact({ id: Date.now().toString(), name, number }))
    setName('')
    setNumber('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="tel"
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="Phone Number"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  )
}

export default ContactForm
