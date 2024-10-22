import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageIndex from "../../components/PageIndex/PageIndex";
import styles from "./documentation.module.css";
import SubPages from "../../components/SubPages/SubPages";
import PrevNextPage from "../../components/PrevNextPage/PrevNextPage";

export default function Documentation() {
  const [headerList, setHeaderList] = useState<HTMLHeadingElement[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const headersColection = document
      .getElementById("documentation")
      ?.getElementsByTagName("h3");
    const headersArray = headersColection ? Array.from(headersColection) : [];
    setHeaderList(headersArray);
  }, []);

  interface PagesObject {
    [key: string]: string;
  }
  const pagesArray: PagesObject[] = [
    { Login: "/login" },
    { Início: "/inicio" },
    { "Kata Eliminação": "/kataelim" },
    { "Kata Finais": "/katafinals" },
    { "Kata Equipa": "/teamkata" },
    { "Kihon Eliminação": "/kihon" },
    { "Kihon Finais": "/teamkata" },
    { Kumite: "/kumite" },
    { "Kumite Equipa": "/teamkumite" },
    { Créditos: "/credits" },
  ];

  return (
    <div id="documentation" className={styles.dynamicFlexContainer}>
      <SubPages
        currentPage="docs"
        currentSubPage=""
        subPagesList={pagesArray}
        smallScreens={true}
      ></SubPages>
      <div className={styles.mainDocumentationContainer}>
        <h3>Documentação</h3>
        <div className={styles.textArea}>
          <p>
            Esta página e as subsquentes retratam todas as funcionalidades
            disponíveis na Karate Score App, e a forma de como as usar. Apenas
            serão atualizadas para cada <i>release</i> de grande dimensão, pelo
            que, de cada vez que isso acontece, representará todas as versões
            lançadas entre a atual e a anterior atualização.
          </p>
        </div>
        <h3>Definição</h3>
        <div className={styles.textArea}>
          <p>
            <strong>A Karate Score App</strong> é uma aplicação desenvolvida
            para uso exclusivo da{" "}
            <Link to="https://skiportugal.pt/" target="_blank">
              SKI-Portugal
            </Link>
            .
          </p>
          <p>
            <i>"Karate"</i> porque está destinada ao deporto e competições de
            Karate; <i>"Score"</i> porque serve como interface para mostrar os
            "scores" (resultados) das provas realizadas no âmbito da SKIP, em
            tempo real; e <i>"App"</i> porque está disponível como uma simples
            aplicação de computador.
          </p>
        </div>
        <h3>Estrutura</h3>
        <div className={styles.textArea}>
          <p>
            A <strong>Karate Score App</strong> está dividida em múltiplas
            "páginas" ou ecrãs. <br />
            Cada página representa um tipo de prova das competições da SKIP,
            como por exemplo <i>Kata Individual</i> ou <i>Kumite Individual</i>.{" "}
            <br />
            Cada uma dessas páginas apresenta uma estrutura própria e pensada a
            corresponder da forma mais relacionada possível com o tipo de prova
            em questão
          </p>
        </div>
        <h3>Indice</h3>
        <div className={styles.subPagesList}>
          <div
            className={styles.displaySquare}
            onClick={() => {
              navigate("/kataelim");
            }}
          >
            <h3>Kata Eliminatórias</h3>
            <div className={styles.textArea}>
              <p>Interface para eliminação 1 vs 1 com sistema de bandeiras</p>
            </div>
          </div>
          <div
            className={styles.displaySquare}
            onClick={() => {
              navigate("/teamkata");
            }}
          >
            <h3>Kata Equipa</h3>
            <div className={styles.textArea}>
              <p>
                Interface para equipas em modo de final com sistema de pontuação
              </p>
            </div>
          </div>
          <div
            className={styles.displaySquare}
            onClick={() => {
              navigate("/kihon");
            }}
          >
            <h3>Kihon Eliminatórias</h3>
            <div className={styles.textArea}>
              <p>Interface para eliminação 2 vs 2 com sistema de bandeiras</p>
            </div>
          </div>
          <div
            className={styles.displaySquare}
            onClick={() => {
              navigate("/katafinals");
            }}
          >
            <h3>Kata Finais</h3>
            <div className={styles.textArea}>
              <p>
                Interface para individual em modo de final com sistema de
                pontuação
              </p>
            </div>
          </div>
          <div
            className={styles.displaySquare}
            onClick={() => {
              navigate("/teamkata");
            }}
          >
            <h3>Kihon Finais</h3>
            <div className={styles.textArea}>
              <p>
                Interface para equipas em modo de final com sistema de pontuação
              </p>
            </div>
          </div>
          <div
            className={styles.displaySquare}
            onClick={() => {
              navigate("/kumite");
            }}
          >
            <h3>Kumite Individual</h3>
            <div className={styles.textArea}>
              <p>
                Interface para eliminação individual 1 vs 1 com sistema de
                pontos e faltas, temporizador incluído
              </p>
            </div>
          </div>
          <div
            className={styles.displaySquare}
            onClick={() => {
              navigate("/teamkumite");
            }}
          >
            <h3>Kumite Equipa</h3>
            <div className={styles.textArea}>
              <p>
                Interface para eliminação em equipa com sistema de pontos e
                faltas, temporizador incluído
              </p>
            </div>
          </div>
        </div>
        <h3>Cabeçalho</h3>
        <div className={styles.textArea}>
          <p></p>
        </div>
        <h3>Cabeçalho</h3>
        <div className={styles.textArea}>
          <p>
            Todas as páginas têm na secção superior um espaço para inserção do
            número do tatami onde está localizada a máquina, e outro para
            selecionar a categoria da prova a ser realizada.
          </p>
          <div className="imgContainer">
            <img src="" className="imgFit" alt="Cabeçalho default" />
          </div>
          <div className="overlay"></div>
          <p>
            O número do tatami está limitado a número entre <strong>1</strong> e{" "}
            <strong>3</strong>, e pode ser alterado tanto com input direto do
            número, como com a <code>ScrollWheel</code> ou com a{" "}
            <code>seta para cima</code> ou <code>seta para baixo</code>. <br />
            O número do tatami irá ser conservado entre mudanças de página, por
            isso apenas é necessário introduzir este uma única vez. No entanto,
            a categoria reinicia de cada vez que se troca de página. <br />
            No caso das categorias, a lista de seleção que aparece em cada
            página varia consoante a própria página. Isto é, em cada página só
            irão aparecer as categorias possíveis para o tipo de prova em
            questão nessa mesma página.
          </p>
          <h4>Exemplo</h4>
          <div className="imgContainer">
            <img
              src=""
              className="imgFit"
              alt="Sample categorias Kata Eliminatorias"
            />
          </div>
          <div className="overlay"></div>
        </div>
        <div className={styles.textArea}>
          <p>
            Neste exemplo estamos na página de{" "}
            <Link to="/kataelim">
              <i>Kata</i> Eliminatórias
            </Link>
            , que servirá para provas de <i>Kata</i> Individual com sistema de
            bandeiras, ou seja, 2 atletas em simultâneo lutam para não ser
            eliminados, apenas irá ser possível ao utilizador selecionar um
            escalão dessa prova, ou seja, nunca irão aparecer pesos nem escalões
            mistos
          </p>
          <div className="imgContainer">
            <img
              src=""
              className="imgFit"
              alt="Sample categorias Kumite Individual"
            />
          </div>
          <div className="overlay"></div>
          <p>
            Por outro lado, no caso de uma prova de{" "}
            <Link to={"/kumite"}>
              <i>Kumite</i> Individual
            </Link>
            , esta página irá agora aprensentar escalões com pesos, que lá está,
            fazem parte deste tipo de provas.
          </p>
        </div>
        <PrevNextPage
          prevPage={{ Sobre: "/about" }}
          nextPage={{ Login: "/login" }}
        ></PrevNextPage>
      </div>
      <div className={styles.ghostDiv}></div>
      {headerList ? <PageIndex listOfHeaders={headerList}></PageIndex> : ""}
      <SubPages
        currentPage="docs"
        currentSubPage=""
        subPagesList={pagesArray}
        smallScreens={false}
      ></SubPages>
    </div>
  );
}
