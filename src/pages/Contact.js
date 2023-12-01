import styles from "./Content.module.css";

function Contact() {
  return (
    <div className={styles.content}>
      <h1>Entre em Contacto Conosco</h1>
      <p>
        Estamos ansiosos para ouvir de você! Seja uma pergunta, um comentário ou
        uma sugestão, a equipe do Costs está aqui para ajudar. Utilize as opções
        abaixo para entrar em contacto conosco:
      </p>
      <h3>Formulário de Contacto:</h3>
      <p>
        Preencha nosso formulário online para garantir que suas perguntas sejam
        direcionadas diretamente para a equipe responsável. Responderemos o mais
        breve possível, garantindo uma comunicação eficiente e personalizada.
      </p>

      <section className={styles.contacto} id="contacto">
        <h2 className={styles.titulo}>Contacte-nos</h2>
        <form action="#">
          <div className={styles.caixas_entrada}>
            <input type="text" placeholder="Nome Completo" />
            <input type="email" placeholder="Endereço de Email" />
          </div>
          <div className={styles.caixas_entrada}>
            <input type="text" placeholder="Número de Celular" />
            <input type="text" placeholder="Assunto do Email" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Sua Mensagem"
          ></textarea>
          <input type="submit" value="Enviar Mensagem" className={styles.btn} />
        </form>
      </section>
    </div>
  );
}

export default Contact;
