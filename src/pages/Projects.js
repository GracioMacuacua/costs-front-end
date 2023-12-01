import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Message from "../components/Layout/Message";
import LinkButton from "../components/LinkButton";
import Container from "../components/Layout/Container";
import ProjectCard from "../components/Project/ProjectCard";
import Loading from "../components/Layout/Loading";
import styles from "./Projects.module.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoader, setRemoveLoader] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state;
  }

  useEffect(() => {
    fetch("https://costs-api-wdgk.onrender.com/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200)
          res.json().then((data) => {
            setProjects(data);
          });
        setRemoveLoader(true);
      })
      .catch((err) => console.log(err));
  }, []);

  function removeProject(id) {
    fetch(`https://costs-api-wdgk.onrender.com/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Projecto removido com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projectos</h1>
        <LinkButton to="/newproject" text="Criar Projecto" />
      </div>
      {message && <Message type="success" message={message} />}
      {projectMessage && <Message type="success" message={projectMessage} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.Category.name}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoader && <Loading />}
        {removeLoader && projects.length === 0 && (
          <p>Não há projectos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}

export default Projects;
