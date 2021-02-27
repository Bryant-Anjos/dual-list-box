import DualListBox from '@components/DualListBox'
import styles from '@styles/main.module.css'

const options = [
  {
    id: '1',
    value: 'value 1',
    active: false,
  },
  {
    id: '2',
    value: 'value 2',
    active: false,
  },
  {
    id: '3',
    value: 'value 3',
    active: false,
  },
  {
    id: '4',
    value: 'value 4',
    active: true,
  },
  {
    id: '5',
    value: 'value 5',
    active: true,
  },
  {
    id: '6',
    value: 'value 6',
    active: true,
  },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <DualListBox options={options} />
    </main>
  )
}
