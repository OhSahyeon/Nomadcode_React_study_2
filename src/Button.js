import PropTypes from "prop-types";
import styles from "./button.module.css";

function Btn({ text, onClick }) {
  return (
    <div>
      <button onClick={onClick} className={styles.Btn}>
        {text}
      </button>
    </div>
  );
}

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Btn;
