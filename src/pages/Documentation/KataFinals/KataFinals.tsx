import PrevNextPage from "../../../components/PrevNextPage/PrevNextPage";
import styles from "./katafinals.module.css";
import SubPages from "../../../components/SubPages/SubPages";
import { useState, useEffect } from "react";
import PageIndex from "../../../components/PageIndex/PageIndex";
import { Link } from "react-router-dom";

export default function KataFinals() {
  const [headerList, setHeaderList] = useState<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const headersColection = document
      .getElementById("katafinals")
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
    <div id="katafinals" className={styles.dynamicFlexContainer}>
      <SubPages
        currentPage="docs"
        currentSubPage="Kata Finais"
        subPagesList={pagesArray}
        smallScreens={true}
      ></SubPages>
      <div className={styles.mainKataFinalsContainer}>
        <h3>Kata Finais</h3>
        <div className={styles.textArea}>
          <p>
            A prova de finais de <i>Kata</i> é sempre feita por pontuações, por
            isso o design desta página muda drasticamente em relação à{" "}
            <Link to="/kataelim">
              <i>Kata</i> Eliminação
            </Link>
            . <br />
          </p>
          <p>
            Sendo uma final, há apenas um atleta em exibição. Aqui, o critério de arbitragem
            passa de bandeiras para sistema de pontuações (ver <Link to="/download">Downloads</Link> &gt; Regras de Arbitragem).
          </p>
        </div>
        <h3>Cartões de competidor</h3>
        <div className={styles.textArea}>
          <p>
          Esta mudança torna-se desde logo visível no cartão de atleta, onde há apenas espaço para a informação de um atleta,
          apesar de ser utlizado da mesma forma que o <Link to="/kataelim"><i>Kata</i> Eliminação</Link>.
          </p>
        </div>
        <div className="imgContainer">
          <img src="" className="imgFit" alt="katafinal 0" />
        </div>
        <div className="overlay"></div>
        <h3>Pontuações</h3>
        <div className={styles.textArea}>
          <p>
          As pontuações são dadas em pequenos contentores, todos iguais, um por cada juiz. 
          Cada contentor não esta associado a um juiz específico, nem há uma ordem de pontuações que 
          se deve seguir para os preencher. <br />
          Sempre que um é selecionado, este muda de cor, ou seja, apenas o que estiver nessa nova cor 
          é passível de ser editado.
          </p>
        </div>
        <div className="imgContainer">
          <img src="" className="imgFit" alt="katafinal pontuacoes" />
        </div>
        <div className="overlay"></div>
        <div className={styles.textArea}>
          <p>
            Para inserir as pontuações:
            <ul>
              <li>Devem ter sempre um <strong>"."</strong> a dividir as décimas.</li>
              <li>Para alternar entre contentores, basta premir <code>TAB</code>.</li>
              <li>Quando chegar à última pontuação, premir <code>ENTER</code></li>
            </ul>
            Premindo <code>ENTER</code>, é calculada a pontuação final, anulando antes a
            pontuação mais baixa e mais baixa
          </p>
        </div>
        <div className="imgContainer">
          <img src="" className="imgFit" alt="katafinal pont final" />
        </div>
        <div className="overlay"></div>
        <h3>Ajudas</h3>
        <div className={styles.textArea}>
          <p>Inserir uma pontuação com:
            <ul>
              <li>Formato errado;</li>
              <li>Valor fora dos limites de 0 e 10;</li>
              <li>Não inserir todas as pontuações antes de premir <code>ENTER</code>;</li>
            </ul>
            Irá desencadear o aparecimento de uma janela de erro com a respetiva
            descrição do que correu mal.
          </p>
          <p>Da mesma forma que </p>
        </div>
        <h3>Atalhos de teclado</h3>
        <div className={styles.textArea}>
          <p>
            Para iniciar o cálculo da pontuação final:
            <ul>
              <li>
                <code>ENTER</code>
              </li>
            </ul>
            Para apagar os resultados, incluíndo a informação do atleta e todas as pontuações:
            <ul>
              <li>
                <code>CTRL + BACKSPACE</code> (Tecla de apagar)
              </li>
            </ul>
          </p>
        </div>
        <h3>Dicas</h3>
        <div className={styles.textArea}>
          <ul>
            <li>Escolher um arbitro por onde começar, e seguir sempre a mesma ordem</li>
            <li>A pessoa que escreve as pontuações não deve ser a que vê as pontuações,
            deve haver sempre uma pessoa a ditar e outra a escrever.</li>
            <li>Tentar sempre usar o <code>TAB</code> para selecionar o contentor 
            subsquente, ao invés do cursor</li>
          </ul>
        </div>
        <PrevNextPage
          prevPage={{ "Kata Eliminação": "/kataelim" }}
          nextPage={{ "Kata Equipa": "/teamkata" }}
        ></PrevNextPage>
      </div>
      <div className={styles.ghostDiv}></div>
      {headerList ? <PageIndex listOfHeaders={headerList}></PageIndex> : ""}
      <SubPages
        currentPage="docs"
        currentSubPage="Kata Finais"
        subPagesList={pagesArray}
        smallScreens={false}
      ></SubPages>
    </div>
  );
}
