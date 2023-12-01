import styles from "./Content.module.css";

function Company() {
  return (
    <div className={styles.content}>
      <h1>Bem-vindo ao Costs</h1>

      <p>
        Seja você um profissional autônomo, gerente de equipe ou empresário, a
        nossa aplicação foi projetada para simplificar e aprimorar a gestão de
        projetos, tornando cada etapa do processo mais eficiente e colaborativa.
      </p>

      <h3>Recursos Principais:</h3>

      <h4>1. Interface intuitiva</h4>
      <p>
        Navegue facilmente por nossas telas amigáveis e intuitivas, projetadas
        para proporcionar uma experiência de usuário fluida. Desde a criação até
        a conclusão do projeto, cada função foi pensada para simplificar suas
        tarefas diárias.
      </p>

      <h4>2. Rastreamento de Orçamento:</h4>
      <p>
        Mantenha o controle total sobre o orçamento do projeto de forma
        transparente. Faça ajustes conforme necessário para garantir que tudo
        esteja dentro dos limites estabelecidos.
      </p>
    </div>
  );
}

export default Company;
