import PropTypes from 'prop-types'

/**
 * Creates a two list boxes that the user can choose the options to add and remove moving among the lists
 *
 * @version 1.0.0
 * @author [Bryant dos Anjos](https://github.com/Bryant-Anjos)
 */
const DualListBox = ({ options }) => {
  return <div>DualListBox</div>
}

DualListBox.propTypes = {
  /**
   * Array of object to add the content inside the lists
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      value: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    }),
  ).isRequired,
}

export default DualListBox
