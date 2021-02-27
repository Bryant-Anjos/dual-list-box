import PropTypes from 'prop-types'
import { useCallback, useMemo, useState, useEffect } from 'react'

import styles from '@styles/dual-list-box.module.css'

/**
 * Creates a two list boxes that the user can choose the options to add and remove moving among the lists
 *
 * @version 1.0.0
 * @author [Bryant dos Anjos](https://github.com/Bryant-Anjos)
 */
const DualListBox = ({ options }) => {
  const initialValues = options.reduce(
    (prevOption, currOption) => ({
      ...prevOption,
      [currOption.id]: {
        ...currOption,
        selected: false,
      },
    }),
    {},
  )

  const [values, setValues] = useState(initialValues)
  const [dragging, setDragging] = useState(null)

  const leftList = useMemo(
    () => Object.values(values).filter(option => !option.active),
    [values],
  )
  const rightList = useMemo(
    () => Object.values(values).filter(option => option.active),
    [values],
  )

  const moveValues = useCallback(
    active => {
      const movedValues = Object.values(values)
        .filter(value => value.selected && value.active === active)
        .map(value => ({
          ...value,
          active: !value.active,
          selected: undefined,
        }))

      setValues({
        ...values,
        ...movedValues.reduce(
          (prevValue, currValue) => ({
            ...prevValue,
            [currValue.id]: {
              ...currValue,
              selected: false,
            },
          }),
          {},
        ),
      })
    },
    [values],
  )

  const onDragStart = useCallback(id => {
    setDragging(id)
  }, [])

  const onDragEnd = useCallback(() => {
    setDragging(null)
  }, [])

  const onDragOver = useCallback(e => {
    e.preventDefault()
  }, [])

  const onDrop = useCallback(
    active => {
      setValues({
        ...values,
        [dragging]: {
          ...values[dragging],
          selected: false,
          active,
        },
      })
    },
    [values, dragging],
  )

  return (
    <div className={styles.container}>
      <div
        className={styles.box}
        onDragOver={onDragOver}
        onDrop={() => onDrop(false)}
      >
        <ul>
          {leftList.map(option => (
            <li
              key={option.id}
              draggable
              onDragStart={() => onDragStart(option.id)}
              onDragEnd={onDragEnd}
              className={option.selected ? styles.selected : undefined}
              onClick={() => {
                setValues({
                  ...values,
                  [option.id]: {
                    ...option,
                    selected: !option.selected,
                  },
                })
              }}
            >
              {option.value}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.buttons}>
        <button type="button" onClick={() => moveValues(true)}>
          Left
        </button>
        <button type="button" onClick={() => moveValues(false)}>
          Right
        </button>
      </div>

      <div
        className={styles.box}
        onDragOver={onDragOver}
        onDrop={() => onDrop(true)}
      >
        <ul>
          {rightList.map(option => (
            <li
              key={option.id}
              draggable
              onDragStart={() => onDragStart(option.id)}
              onDragEnd={onDragEnd}
              className={option.selected ? styles.selected : undefined}
              onClick={() => {
                setValues({
                  ...values,
                  [option.id]: {
                    ...option,
                    selected: !option.selected,
                  },
                })
              }}
            >
              {option.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

DualListBox.propTypes = {
  /**
   * Array of object to add the content inside the lists
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * A unique identifier of object
       */
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      /**
       * The value that will be shown to the user inside the list box
       */
      value: PropTypes.string.isRequired,
      /**
       * Defines if the object will be in the left or the right list box
       */
      active: PropTypes.bool.isRequired,
    }),
  ).isRequired,
}

export default DualListBox
