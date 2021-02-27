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
  {
    id: '7',
    value: 'value 7',
    active: false,
  },
  {
    id: '8',
    value: 'value 8',
    active: false,
  },
  {
    id: '9',
    value: 'value 9',
    active: false,
  },
  {
    id: '10',
    value: 'value 10',
    active: true,
  },
  {
    id: '11',
    value: 'value 11',
    active: true,
  },
  {
    id: '12',
    value: 'value 12',
    active: true,
  },
  {
    id: '13',
    value: 'value 13',
    active: false,
  },
  {
    id: '14',
    value: 'value 14',
    active: false,
  },
  {
    id: '15',
    value: 'value 15',
    active: false,
  },
  {
    id: '16',
    value: 'value 16',
    active: true,
  },
  {
    id: '17',
    value: 'value 17',
    active: true,
  },
  {
    id: '18',
    value: 'value 18',
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
