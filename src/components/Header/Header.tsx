import ksaLogo from "../../assets/Karatescore_nobg.png";
import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header({
  currentVersion,
  currentPage,
  setCurrentPage,
}: Readonly<{
  currentVersion: string;
  currentPage: {
    home: boolean;
    about: boolean;
    docs: boolean;
    download: boolean;
    tutorials: boolean;
    versions: boolean;
    blog: boolean;
    contacts: boolean;
  };
  setCurrentPage: React.Dispatch<
    React.SetStateAction<{
      home: boolean;
      about: boolean;
      docs: boolean;
      download: boolean;
      tutorials: boolean;
      versions: boolean;
      blog: boolean;
      contacts: boolean;
    }>
  >;
}>) {
  const navigate = useNavigate();
  const handleClick = (where: string) => {
    navigate(where);
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.versionDiv}>
        <Link to="/home" style={{ height: "48px" }}>
          <img src={ksaLogo} className={styles.logo} alt="SKIP logo" />
        </Link>
        <div className={styles.appNameAndAuthor}>
          <span className={styles.appName}>
            Karate Score App -{" "}
            <Link to="/versions" className={styles.versionSpan}>
              Versão {currentVersion}{" "}
            </Link>
          </span>
          /
          <span>
            {" "}
            by <Link to="/contacts">José Freitas</Link>
          </span>
        </div>
      </div>
      <div className={styles.linksDiv}>
        <div
          className={`${styles.page} ${
            currentPage.home ? styles.selectedPage : ""
          }`}
          onClick={() => handleClick("/home")}
        >
          <Link to="/home">Início</Link>
        </div>
        <div
          className={`${styles.page} ${
            currentPage.about ? styles.selectedPage : ""
          }`}
          onClick={() => handleClick("/about")}
        >
          <Link to="/about">Sobre</Link>
        </div>
        <div
          className={`${styles.page} ${
            currentPage.docs ? styles.selectedPage : ""
          }`}
          onClick={() => handleClick("/docs")}
        >
          <Link to="/docs">Documentação</Link>
        </div>
        <div
          className={`${styles.page} ${
            currentPage.download ? styles.selectedPage : ""
          }`}
          onClick={() => handleClick("/download")}
        >
          <Link to="/download">Downloads</Link>
        </div>
        <div
          className={`${styles.page} ${
            currentPage.tutorials ? styles.selectedPage : ""
          }`}
          onClick={() => handleClick("/tutorials")}
        >
          <Link to="/tutorials">Tutoriais</Link>
        </div>
        <div
          className={`${styles.page} ${
            currentPage.versions ? styles.selectedPage : ""
          }`}
          onClick={() => handleClick("/versions")}
        >
          <Link to="/versions">Versões</Link>
        </div>
        <div
          className={`${styles.page} ${
            currentPage.blog ? styles.selectedPage : ""
          }`}
          onClick={() => handleClick("/blog")}
        >
          <Link to="/blog">Blog</Link>
        </div>
        <div
          className={`${styles.page} ${
            currentPage.contacts ? styles.selectedPage : ""
          }`}
          onClick={() => handleClick("/contacts")}
        >
          <Link to="/contacts">Contactos</Link>
        </div>
      </div>
    </div>
  );
}
