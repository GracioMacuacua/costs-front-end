import styles from "./ProjectForm.module.css";
import Input from "../Form/Input";
import Select from "../Form/Select";
import SubmitButton from "../Form/SubmitButton";
import { useState, useEffect } from "react";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:3001/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        data.json().then((data) => setCategories(data));
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      CategoryId: e.target.value,
      Category: {
        id: e.target.value
      }
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        name="name"
        text="Nome do projecto"
        placeholder="Insira o nome do projecto"
        handleOnChange={handleChange}
        value={project.name}
      />
      <Input
        type="number"
        name="budget"
        text="Orçamento do projecto"
        placeholder="Insira orçamento total"
        handleOnChange={handleChange}
        value={project.budget}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.Category ? project.Category.id : ""}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
