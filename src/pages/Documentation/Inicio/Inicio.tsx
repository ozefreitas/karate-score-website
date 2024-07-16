import PrevNextPage from "../../../components/PrevNextPage/PrevNextPage";
import styles from "./inicio.module.css";
import SubPages from "../../../components/SubPages/SubPages";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageIndex from "../../../components/PageIndex/PageIndex";

export default function Inicio() {
  const [headerList, setHeaderList] = useState<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const headersColection = document
      .getElementById("inicio")
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
    { "Kihon Finais": "/kihonfinals" },
    { Kumite: "/kumite" },
    { "Kumite Equipa": "/teamkumite" },
    { Créditos: "/credits" },
  ];

  return (
    <div id="inicio" className={styles.dynamicFlexContainer}>
      <SubPages
        currentPage="docs"
        currentSubPage="Início"
        subPagesList={pagesArray}
        smallScreens={true}
      ></SubPages>
      <div className={styles.mainInicioContainer}>
        <h3>Início</h3>
        <div className={styles.textArea}>
          <p>
            A página de <strong>Início</strong> é apenas uma folha com os
            <i> logos</i> da aplicação e da SKI-Portugal.
          </p>
          <div className="imgContainer">
            <img src="" className="imgFit" alt="Página Início" />
          </div>
          <div className="overlay"></div>
        </div>
        <h3>Features</h3>
        <div className={styles.textArea}>
          <p>
            Olhando com mais atenção, podemos ver uma pequena área com um botão.
            Este botão permite alternar entre <u>Modo Claro</u> e
            <u> Modo Escuro</u> (ou <u>Modo Dia</u> e <u>Modo Noite</u>).
            <br /> O modo principal no qual a aplicação irá
            <strong> sempre</strong> iniciar é o <strong>Modo Escuro</strong>.{" "}
            <br />
            No Modo Claro, as tonalidades de fundo serão sempre mais claras e
            mais próximas do branco, enquanto que as letras serão mais escuras:
          </p>
          <div className="imgContainer">
            <img src="" className="imgFit" alt="Modo Claro" />
          </div>
          <div className="overlay"></div>
          <p>
            Pelo contrário, no Modo Escuro, o fundo é quase preto e as letras
            brancas:
          </p>
          <div className="imgContainer">
            <img src="" className="imgFit" alt="Modo Escuro" />
          </div>
          <div className="overlay"></div>
          <p>
            Para efeitos de apresentação, todas as imagens da
            <Link to="/docs"> Documentação</Link> estarão no Modo Escuro.
          </p>
        </div>
        <PrevNextPage
          prevPage={{ Login: "/login" }}
          nextPage={{ "Kata Eliminação": "/kataelim" }}
        ></PrevNextPage>
      </div>
      <div className={styles.ghostDiv}></div>
      {headerList ? <PageIndex listOfHeaders={headerList}></PageIndex> : ""}
      <SubPages
        currentPage="docs"
        currentSubPage="Início"
        subPagesList={pagesArray}
        smallScreens={false}
      ></SubPages>
    </div>
  );
}
