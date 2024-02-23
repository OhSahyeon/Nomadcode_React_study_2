import PropTypes from "prop-types";
import styles from "./button.module.css";

function Btn({ text }) {
  return (
    <div>
      <button className={styles.Btn}>{text}</button>
    </div>
  );
}

Btn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Btn;
