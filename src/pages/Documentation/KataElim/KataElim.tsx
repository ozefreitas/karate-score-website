import PrevNextPage from "../../../components/PrevNextPage/PrevNextPage";
import styles from "./kataelim.module.css";
import SubPages from "../../../components/SubPages/SubPages";
import { useState, useEffect } from "react";
import PageIndex from "../../../components/PageIndex/PageIndex";

export default function KataElim() {
  const [headerList, setHeaderList] = useState<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const headersColection = document
      .getElementById("kataelim")
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
    <div id="kataelim" className={styles.dynamicFlexContainer}>
      <SubPages
        currentPage="docs"
        currentSubPage="Kata Eliminação"
        subPagesList={pagesArray}
        smallScreens={true}
      ></SubPages>
      <div className={styles.mainKataElimContainer}>
        <h3>Kata Eliminatórias</h3>
        <div className={styles.textArea}>
          <p>
            Agora entrando nas páginas mais importantes e que serão mais
            utlizadas, começamos pelo <i>Kata</i> de eliminatórias.
          </p>
          <p>
            Sendo uma prova que decorre por <i>HANTEI</i> (ou decisão por
            bandeiras), teremos sempre 2 atletas a competir ao mesmo tempo, um
            com o cinto branco - <i style={{ color: "white" }}>SHIRO</i> - ou
            vermelho - <i style={{ color: "red" }}>AKA</i>. A disposição desta
            página respeita exatamente isto:
          </p>
          <div className="imgContainer">
            <img src="" className="imgFit" alt="kata elim 0" />
          </div>
          <div className="overlay"></div>
          <h3>Cartões de competidor</h3>
          <p>
            Na imagem anterior há um "cartão" para cada atleta, ambos com o
            número do dorsal, nome e equipa <u>correspondentes a esse dorsal</u>
            . "Correspondentes a esse dorsal" porque aquilo que vai determinar
            as informações de um dado atleta, será exatamente o seu dorsal. Ou
            seja, toda a informação relevante para uma determinada prova estará
            sempre associada ao dorsal a ele atribuído para esse dia. <br />{" "}
            Sendo assim, a Karate Score App automaticamente irá preencher os
            outros campos, quando no campo "000" (formato númerico do dorsal)
            for detetado um número compatível com aqueles na base de dados.
          </p>
          <div className="imgContainer">
            <img src="" className="imgFit" alt="kata elim dorsal" />
          </div>
          <div className="overlay"></div>
          <p>
            Aqui, dando o número "001" ao campo do dorsal, este está associado
            ao nome José Freitas da equipa <i>ASK Vizela</i>. <br />
            Em baixo destas informações temos a óbvia pontuação. Cada algarismo
            vai entre <strong>0</strong> e <strong>5</strong>, e não são
            selecionáveis nem alteráveis por input direto. A pontuação de um
            atleta é diretamente dependente do adversário, isto é, podemos saber
            a pontuação de ambos se soubermos apenas a de um deles. <br />
            Contando o número de bandeiras do{" "}
            <i style={{ color: "red" }}>AKA</i>, o número de bandeira do{" "}
            <i style={{ color: "white" }}>SHIRO</i> será sempre{" "}
            <strong>5 - nº de bandeiras do <i style={{ color: "red" }}>AKA</i></strong>.
          </p>
          <h4>Exemplo</h4>
          <div className={styles.textArea}>
            <p>
              Imaginemos o caso de que o <i style={{ color: "red" }}>AKA</i>{" "}
              conseguiu conquistar 4 bandeiras. Isto dará ao{" "}
              <i style={{ color: "white" }}>SHIRO</i> -{" "}
              <strong>5 - 4 = 1</strong> bandeira.
            </p>
            <div className="imgContainer">
              <img src="" className="imgFit" alt="kata elim 4 - 1" />
            </div>
            <div className="overlay"></div>
            <h3>Atalhos de teclado</h3>
            <p>
              Tendo isto em conta, é apenas lógico que seja apenas necessário
              modificar uma pontuação. Ficou então decidido que dando a
              pontuação do <i style={{ color: "red" }}>AKA</i>, essa irá
              determinar a outra. Quer isto dizer que estes atalhos estão{" "}
              <strong>
                SEMPRE associados à pontuação do{" "}
                <i style={{ color: "red" }}>AKA</i>:
                <ul>
                  <li>
                    <code>CTRL + 0</code> ={" "}
                    <strong>
                      <i style={{ color: "red" }}>AKA</i> 0 |{" "}
                      <i style={{ color: "white" }}>SHIRO</i> 5
                    </strong>
                  </li>
                  <li>
                    <code>CTRL + 1</code> ={" "}
                    <strong>
                      <i style={{ color: "red" }}>AKA</i> 1 |{" "}
                      <i style={{ color: "white" }}>SHIRO</i> 4
                    </strong>
                  </li>
                  <li>
                    <code>CTRL + 2</code> ={" "}
                    <strong>
                      <i style={{ color: "red" }}>AKA</i> 2 |{" "}
                      <i style={{ color: "white" }}>SHIRO</i> 3
                    </strong>
                  </li>
                  <li>
                    <code>CTRL + 3</code> ={" "}
                    <strong>
                      <i style={{ color: "red" }}>AKA</i> 3 |{" "}
                      <i style={{ color: "white" }}>SHIRO</i> 2
                    </strong>
                  </li>
                  <li>
                    <code>CTRL + 4</code> ={" "}
                    <strong>
                      <i style={{ color: "red" }}>AKA</i> 4 |{" "}
                      <i style={{ color: "white" }}>SHIRO</i> 1
                    </strong>
                  </li>
                  <li>
                    <code>CTRL + 5</code> ={" "}
                    <strong>
                      <i style={{ color: "red" }}>AKA</i> 5 |{" "}
                      <i style={{ color: "white" }}>SHIRO</i> 0
                    </strong>
                  </li>
                </ul>
              </strong>
              Para apagar os resultados, incluíndo as credênciais dos atletas:
              <ul>
                <li>
                  <code>CTRL + BACKSPACE</code> (Tecla de apagar)
                </li>
              </ul>
            </p>
            <h3>Features</h3>
            <p>
              Sempre que uma pontuação é dada, a <i>App</i> reconhece o
              vencedor, e deixa o respetivo cartão e cor do cinto a piscar.
            </p>
            <div className="imgContainer">
              <img src="" className="imgFit" alt="kata elim vencedor" />
            </div>
            <div className="overlay"></div>

            <h3>Dicas</h3>
            <p>
              Contar apenas as bandeiras vermelhas e meter o input de acordo.
            </p>
          </div>
        </div>
        <PrevNextPage
          prevPage={{ Início: "/inicio" }}
          nextPage={{ "Kata Finais": "/katafinals" }}
        ></PrevNextPage>
      </div>
      <div className={styles.ghostDiv}></div>
      {headerList ? <PageIndex listOfHeaders={headerList}></PageIndex> : ""}
      <SubPages
        currentPage="docs"
        currentSubPage="Kata Eliminação"
        subPagesList={pagesArray}
        smallScreens={false}
      ></SubPages>
    </div>
  );
}
