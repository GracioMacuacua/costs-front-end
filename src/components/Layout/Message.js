import styles from "./Message.module.css";
import { useState, useEffect } from "react";

function Message({ type, message }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <>
      {isVisible && (
        <div className={`${styles.message} ${styles[type]} `}>{message}</div>
      )}
    </>
  );
}

export default Message;
