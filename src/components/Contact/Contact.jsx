
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsSlice'
import styles from './Contact.module.css'

const Contact = ({ contact }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
  }

  return (
    <li className={styles.contact}>
      <p>{contact.name}: {contact.number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default Contact