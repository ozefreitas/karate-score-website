import PrevNextPage from "../../../components/PrevNextPage/PrevNextPage";
import styles from "./kumite.module.css";
import SubPages from "../../../components/SubPages/SubPages";
import { useState, useEffect } from "react";
import PageIndex from "../../../components/PageIndex/PageIndex";

export default function Kumite() {
  const [headerList, setHeaderList] = useState<HTMLHeadingElement[]>([]);

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
    { "Kihon Finais": "/kihonfinals" },
    { Kumite: "/kumite" },
    { "Kumite Equipa": "/teamkumite" },
    { Créditos: "/credits" },
  ];

  return (
    <div id="inicio" className={styles.dynamicFlexContainer}>
      <SubPages
        currentPage="docs"
        currentSubPage="Kumite"
        subPagesList={pagesArray}
        smallScreens={true}
      ></SubPages>
      <div className={styles.mainKumiteContainer}>
        <PrevNextPage
          prevPage={{ "Kihon Finais": "/kihonfinals" }}
          nextPage={{ "Kumite Equipa": "/teamkumite" }}
        ></PrevNextPage>
      </div>
      <div className={styles.ghostDiv}></div>
      {headerList ? <PageIndex listOfHeaders={headerList}></PageIndex> : ""}
      <SubPages
        currentPage="docs"
        currentSubPage="Kumite"
        subPagesList={pagesArray}
        smallScreens={false}
      ></SubPages>
    </div>
  );
}
