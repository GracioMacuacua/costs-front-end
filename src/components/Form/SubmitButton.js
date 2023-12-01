import styles from "./SubmitButton.module.css";

function SubmitButton({ text, handleOnClick }) {
  return (
    <div className={styles.container}>
      <button type="submit" className={styles.btn}>
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
