import styles from "./NewProject.module.css";
import ProjectForm from "../components/Project/ProjectForm";
import { useNavigate } from "react-router-dom";

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;

    fetch("https://costs-api-wdgk.onrender.com/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) =>
        navigate("/projects", { state: "Projecto adicionado com sucesso!" })
      )
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projecto</h1>
      <p>Crie seu projecto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projecto" />
    </div>
  );
}

export default NewProject;
