
import { useSelector } from 'react-redux'//useSelector: Хук для отримання стану з Redux.
import Contact from '../Contact/Contact'
import { selectContacts } from '../../redux/contactsSlice'//selectContacts та selectNameFilter: Селектори для отримання даних з Redux стану.
import { selectNameFilter } from '../../redux/filtersSlice'
import styles from './ContactList.module.css'

const ContactList = () => {
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectNameFilter)
//filteredContacts: Відфільтровані контакти на основі значення фільтра.
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  )
}

export default ContactList