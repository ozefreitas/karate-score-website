import styles from "./prevnextpage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

interface Pages {
  prevPage: { [key: string]: string };
  nextPage: { [key: string]: string };
}

export default function PrevNextPage({ prevPage, nextPage }: Pages) {
  const navigate = useNavigate();
  return (
    <div className={styles.mainContainer}>
      {Object.entries(prevPage).map(([pageName, pagePath]) => (
        <div
          className={styles.smallContainer}
          onClick={() => navigate(pagePath)}
        >
          <SlArrowLeft className={styles.arrowIcons}></SlArrowLeft>
          <div>
            <span>Página Anterior</span>
            <br />
            <Link to={pagePath}>{pageName}</Link>
          </div>
        </div>
      ))}
      {Object.entries(nextPage).map(([pageName, pagePath]) => (
        <div
          className={styles.smallContainer}
          onClick={() => navigate(pagePath)}
        >
          <div>
            <span>Página Seguinte</span>
            <br />
            <Link to={pagePath}>{pageName}</Link>
          </div>
          <SlArrowRight className={styles.arrowIcons}></SlArrowRight>
        </div>
      ))}
    </div>
  );
}
