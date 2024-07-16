import PrevNextPage from "../../../components/PrevNextPage/PrevNextPage";
import styles from "./login.module.css";
import SubPages from "../../../components/SubPages/SubPages";
import { useState, useEffect } from "react";
import PageIndex from "../../../components/PageIndex/PageIndex";
import Login1 from "../../../assets/Login.png";
import Login2 from "../../../assets/Login_1.png";
import Login3 from "../../../assets/Login_2.png";

export default function Login() {
  const [headerList, setHeaderList] = useState<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const headersColection = document
      .getElementById("login")
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
    <div id="login" className={styles.dynamicFlexContainer}>
      <SubPages
        currentPage="docs"
        currentSubPage="Login"
        subPagesList={pagesArray}
        smallScreens={true}
      ></SubPages>
      <div className={styles.mainLoginContainer}>
        <h3>Login</h3>
        <div className={styles.textArea}>
          <p>
            A página de <strong>Login</strong> tal como o nome indica, mostra
            uma simples interface de início de sessão, que exige apenas um PIN
            de 4 números.
          </p>
          <div className="imgContainer">
            <img src={Login1} className="imgFit" alt="Página Login" />
          </div>
          <div className="overlay"></div>
        </div>
        <h3>Restrições</h3>
        <div className={styles.textArea}>
          <p>
            Apenas é permitido errar o PIN <strong>3 vezes</strong> , sendo que
            a cada erro, uma mensagem é emitida a informar de quantas tentativas
            restam.
          </p>
          <div className="imgContainer">
            <img src={Login2} className="imgFit" alt="Página Login Erro" />
          </div>
          <div className="overlay"></div>
          <p>À terceira falha, deixa de ser possível entrar na aplicação.</p>
        </div>
        <div className="imgContainer">
          <img src={Login3} className="imgFit" alt="Página Login Bloq" />
        </div>
        <div className="overlay"></div>
        <h3>Funcionalidades</h3>
        <div className={styles.textArea}>
          <p>
            Não existem funcionalidades associadas a esta página, a não ser o
            tratar o butão "Login" como um botão normal que pode ser acedido com{" "}
            <code>Enter</code>.
          </p>
        </div>
        <PrevNextPage
          prevPage={{ Documentação: "/docs" }}
          nextPage={{ Início: "/inicio" }}
        ></PrevNextPage>
      </div>
      <div className={styles.ghostDiv}></div>
      {headerList ? <PageIndex listOfHeaders={headerList}></PageIndex> : ""}
      <SubPages
        currentPage="docs"
        currentSubPage="Login"
        subPagesList={pagesArray}
        smallScreens={false}
      ></SubPages>
    </div>
  );
}
