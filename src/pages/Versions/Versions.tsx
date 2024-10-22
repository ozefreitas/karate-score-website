import { useEffect, useState } from "react";
import PageIndex from "../../components/PageIndex/PageIndex";
import VersionsList from "../../components/VersionsList/VersionsList";
import styles from "./versions.module.css";
import { Link } from "react-router-dom";
import PrevNextPage from "../../components/PrevNextPage/PrevNextPage";

interface Version {
  version: string;
  changelog: string;
  tree: string;
}

interface Versions {
  versions: Version[];
}

export default function Versions({ versions }: Versions) {
  const [mediumVersions, setMediumVersions] = useState({});
  const [headerList, setHeaderList] = useState<HTMLHeadingElement[]>([]);
  const [showWhat, setShowWhat] = useState("news");

  useEffect(() => {
    const headersColection = document
      .getElementById("versions")
      ?.getElementsByTagName("h3");
    const headersArray = headersColection ? Array.from(headersColection) : [];
    setHeaderList(headersArray);
  }, [mediumVersions]);

  const handleChange = () => {
    setShowWhat((prevShowWhat) => (prevShowWhat === "news" ? "code" : "news"));
  };
  return (
    <div id="versions" style={{ display: "flex", boxSizing: "border-box" }}>
      <div className={styles.mainVersionsContainer}>
        <div className={styles.versionsInfo}>
          <h3>Atualizações</h3>
          <div className={styles.textArea}>
            <p>
              A <strong>Karate Score App</strong> é um "projeto" individual,
              iniciado e mantido (por enquanto) por simples vontade própria, o
              que torna a frequência com que é atualizada menor do que aquela
              que seria desejável.
            </p>
            <p>
              No entanto, esforços são feitos para que novas funcionalidades
              sejam reveladas o mais rapidamente possível, assim como a
              resolução de eventuais problemas. <br />
              Para o caso de encontrar algum bug ou tiver sugetões a fazer para
              poder melhorar o serviço, não exitem em{" "}
              <Link to="/contacts">contactar</Link>.
            </p>
            <p>
              Para cada atualização, uma nova versão é lançada e todas as
              novidades serão listadas nesta secção. Irei sempre tentar também
              atualizar as páginas da{" "}
              <i>
                <Link to="/docs">Documentação</Link>
              </i>{" "}
              e dos{" "}
              <i>
                <Link to="/tutorials">Tutoriais</Link>
              </i>{" "}
              (esta apenas se se revelar necessário) com tudo o que for preciso
              para não restarem dúvidas na utilização da Karate Score App.
            </p>
          </div>
          <h3>Tracking</h3>
          <div className={styles.textArea}>
            <p>
              O <i>tracking</i> das versões (releases) apenas começou a ser
              feito a partir da versão 0.8.3, pelo que apenas a partir desta é
              que está aqui disponibilizado o arquivo com o <i>source code</i>{" "}
              correspondente. Consulte o <Link to="/home">Início</Link> para
              saber mais a cerca da forma como esta aplicação foi programada e
              um pouco do caminho que a trouxe até aqui.
            </p>
          </div>
          <h3>
            <i>Source Code</i>
          </h3>
          <div className={styles.textArea}>
            <p>
              Todo o código pode ser encontrado no meu repositório pessoal -
              <a href="https://github.com/ozefreitas/KScoreApp" target="_blank">
                {" "}
                ozefreitas
              </a>
              , onde também podem encontrar outros projetos realizador por mim.
              😁
            </p>
          </div>
          <div className={styles.notesContainer}>
            <h4>
              <i>Nota</i>{" "}
              <span style={{ fontWeight: "initial", fontSize: "1rem" }}>
                (Para os mais entendidos)
              </span>
            </h4>
            <div className={styles.textArea}>
              <p>
                <li>
                  Mais tarde irei começar a aceitar PR (Pull Requests), tanto no
                  repositório da página web, como no da aplicação.
                </li>
                <li>
                  Algumas versões apenas foram feitas como forma de{" "}
                  <i>"checkpoint"</i> e não estão prontas a serem usadas (isso
                  irá ser marcado em cada uma brevemente).
                </li>
                <li>
                  Esta aplicação usa dependencias de{" "}
                  <a href="https://nodejs.org/en" target="_blank">
                    Node.JS
                  </a>{" "}
                  (mais info em <Link to="/home">Início</Link>) pelo que apenas
                  será possível correr versões anteriores com uma máquina
                  previamente preparada. Referir a{" "}
                  <Link to="/contacts">contactos</Link> para ajuda.
                </li>
              </p>
            </div>
          </div>
          <h3>Versões</h3>
          <div className={styles.textArea}>
            Estou a procura de:{" "}
            <select name="whatToShow" id="whatToShow" onChange={handleChange}>
              <option value="news" defaultChecked>
                Novidades
              </option>
              <option value="code">Código</option>
            </select>
          </div>
        </div>
        <VersionsList
          versions={versions}
          mediumVersions={mediumVersions}
          setMediumVersions={setMediumVersions}
          showWhat={showWhat}
        ></VersionsList>
        <br />
        <div className={styles.versionsInfo}>
          <h3>Planos Futuros</h3>
          <div className={styles.textArea}>
            <ul>
              <li>
                Construir uma base de dados com os atelas inscritos na
                SKI-Portugal, e integrar pedidos na App para retirar os nomes da
                mesma, ao invés de ter de alimentar um ficheiro com os atletas
                inscritos para cada prova que se realize;
              </li>
              <li>
                Constuir uma plataforma (para já simples) de inscrições, tanto
                de ateltas na base de dados acima referiada, como inscrições em
                cada prova;
              </li>
              <li>
                Alterar a arquitetura de Karate Score App para passar a ser uma
                plataforma em vez de apenas uma interface UI. Assim a App
                passará a ter um "painel de controlo", que irá controlar um
                "painel de apresentação", deixando de necessitar de atalhos por
                teclado, e passando a depender de cliques correspondentes no
                painel de controlo, ao mesmo tempo que está ligado a base de
                dados apenas com os nomes de interesse para essa prova;
              </li>
              <li>
                Atualizar o site da{" "}
                <Link to="https://skiportugal.pt/" target="__blank">
                  SKI-Portugal
                </Link>{" "}
                para os mais recentes métodos de <i>Web Development</i>.
              </li>
            </ul>
          </div>
        </div>

        <PrevNextPage
          prevPage={{ Tutoriais: "/tutorials" }}
          nextPage={{ Blog: "/blog" }}
        ></PrevNextPage>
      </div>
      {headerList ? <PageIndex listOfHeaders={headerList}></PageIndex> : ""}
    </div>
  );
}
