import { BsFillTrashFill } from "react-icons/bs";
import styles from "../Project/ProjectCard.module.css";

function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Custo:</span> {cost} MZN
      </p>
      <p className={styles.category_text}>
        {description}
      </p>
      <div className={styles.project_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
