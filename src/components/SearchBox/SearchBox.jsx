import { useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/filtersSlice'
import styles from './SearchBox.module.css'

const SearchBox = () => {
  const dispatch = useDispatch()
//handleChange: Обробник введення, який змінює значення фільтра в Redux стані.
  const handleChange = e => {
    dispatch(changeFilter(e.target.value))
  }

  return (
    <input
      type="text"
      placeholder="Search contacts"
      onChange={handleChange}
      className={styles.input}
    />
  )
}

export default SearchBox