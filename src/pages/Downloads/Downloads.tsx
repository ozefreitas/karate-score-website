import skipLogo from "../../assets/skip-logo.png";
import ksaLogo from "../../assets/Karatescore_nobg.png";
import styles from "./downloads.module.css";
import { Link } from "react-router-dom";
import PrevNextPage from "../../components/PrevNextPage/PrevNextPage";

interface DownloadsProps {
  handleDownload: () => void;
  currentVersion: string;
  newestVersion: string;
}

export default function Downloads({
  handleDownload,
  currentVersion,
  newestVersion,
}: DownloadsProps) {
  return (
    <div className={styles.mainDownloadsContainer}>
      <div className={styles.mainInfoContainer}>
        <div className={styles.logosContainer}>
          <a
            href="https://skiportugal.pt/"
            target="_blank"
            title="Aceder ao site da SKI-Portugal"
          >
            <img src={skipLogo} className={styles.logo} alt="SKIP logo" />
          </a>
          <img
            src={ksaLogo}
            className={`${styles.logo} ${styles.react}`}
            alt="KSApp logo"
          />
        </div>
        <div className={styles.infoContainer}>
          <h2>
            A <strong>Karate Score App</strong> está agora (finalmente)
            disponível!
          </h2>
          <p>Para plataformas Windowns 10 ou superior de 64bits.</p>
          <div className={styles.downloadButton}>
            <button onClick={handleDownload}>
              Download Karate Score App v{currentVersion}
            </button>
          </div>
          <p>
            Para ver/instalar versões anteriores, consultar página das{" "}
            <Link to="/versions">versões</Link> ou{" "}
            <Link to="/contacts">contactar</Link>.
          </p>
          <p>
            Para estar a par das novidades das próximas versões, consultar{" "}
            <Link to="/versions">versões</Link> ou dar uma olhadela no{" "}
            <Link to="/blog">Blog</Link> para as mais recentes notícias a cerca
            da <strong>KSApp</strong> mas também da{" "}
            <Link to="https://skiportugal.pt/" target="_blank">
              SKI-Portugal
            </Link>
            .
          </p>
          <p>A próxima versão {newestVersion} já está em desenvolvimento.</p>
        </div>
      </div>
      <PrevNextPage
        prevPage={{ Documentação: "/docs" }}
        nextPage={{ Tutoriais: "/tutorials" }}
      ></PrevNextPage>
    </div>
  );
}
