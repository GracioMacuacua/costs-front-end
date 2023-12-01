import { useState } from "react";
import Input from "../Form/Input";
import styles from "../Project/ProjectForm.module.css";
import SubmitButton from "../Form/SubmitButton";

function ServiceForm({ btnText, handleSubmit, projectData }) {
  const [service, setService] = useState();

  function submit(e) {
    e.preventDefault();
    service.ProjectId = projectData.id;
    handleSubmit(service);
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome  do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor  total"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} handleOnClick={handleSubmit} />
    </form>
  );
}

export default ServiceForm;
