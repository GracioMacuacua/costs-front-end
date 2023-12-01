import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../components/Layout/Container";
import Loading from "../components/Layout/Loading";
import ProjectForm from "../components/Project/ProjectForm";
import ServiceForm from "../components/Service/ServiceForm";
import ServiceCard from "../components/Service/ServiceCard";
import Message from "../components/Layout/Message";
import styles from "./Project.module.css";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://costs-api-wdgk.onrender.com/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProject(data);
          setServices(data["Services"]);
        })
        .catch((err) => console.log(err));
    }, 3000);
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  function editProject(project) {
    setMessage("");

    if (project.budget < project.cost) {
      setMessage("O orçamento do projecto não pode ser menor que o custo!");
      setType("error");
      return;
    }

    fetch(`https://costs-api-wdgk.onrender.com/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then(() => {
        setProject(project);
        setShowProjectForm(false);
        setMessage("Projecto actualizado com sucesso!");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function createService(service) {
    setMessage("");

    if (!service) {
      setMessage("Não é possível cadastrar um serviço vazio!");
      setType("error");
      return;
    }

    const newCost = parseFloat(project.cost) + parseFloat(service.cost);

    if (newCost > parseFloat(project.budget)) {
      setMessage("Orçamento ultrapassado. Verifique o valor do serviço!");
      setType("error");
      return;
    }

    fetch(`https://costs-api-wdgk.onrender.com/services/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then(() => {
        setServices([...services, service]);
        console.log(services);
        setShowServiceForm(false);
        setProject({
          ...project,
          cost: parseFloat(project.cost) + parseFloat(service.cost),
        });
        setMessage("Serviço adicionado com sucesso!");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function removeService(id) {
    setMessage("");

    fetch(`https://costs-api-wdgk.onrender.com/services/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setServices(services.filter((service) => service.id !== id));
        setMessage("Serviço removido com sucesso!");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} message={message} />}
            <div className={styles.details_container}>
              <h1>Projecto: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar projecto" : "Fechar"}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria:</span> {project.Category.name}
                  </p>
                  <p>
                    <span>Total de Orçamento:</span> {project.budget} MZN
                  </p>
                  <p>
                    <span>Total Utilizado:</span> {project.cost} MZN
                  </p>
                </div>
              ) : (
                <div className={styles.project_info}>
                  <ProjectForm
                    handleSubmit={editProject}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className={styles.service_form_container}>
              <h2>Adicione um serviço:</h2>
              <button className={styles.btn} onClick={toggleServiceForm}>
                {!showServiceForm ? "Adicionar serviço" : "Fechar"}
              </button>
              <div className={styles.project_info}>
                {showServiceForm && (
                  <ServiceForm
                    btnText="Adicionar serviço"
                    handleSubmit={createService}
                    projectData={project}
                  />
                )}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass="start">
              {services ? (
                services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    handleRemove={removeService}
                  />
                ))
              ) : (
                <p>Não há serviços disponíveis</p>
              )}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
