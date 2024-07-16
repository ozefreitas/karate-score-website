import { JSX } from "react/jsx-runtime";
import styles from "./subpages.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

interface SubPagesList {
  [key: string]: string;
}

interface SubPagesProps {
  currentPage: string;
  subPagesList: SubPagesList[];
  currentSubPage: string;
  smallScreens: boolean;
}

export default function SubPages({
  currentPage,
  subPagesList,
  currentSubPage,
  smallScreens,
}: Readonly<SubPagesProps>) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // na pagina documentation, tem de aparecer todas as paginas da app
  const handlePages = (list: SubPagesList[]) => {
    const result: JSX.Element[] = [];
    list.forEach((page) => {
      for (const key in page) {
        if (Object.prototype.hasOwnProperty.call(page, key)) {
          result.push(
            <div
              className={`${styles.subPagesDiv} ${
                currentSubPage === key ? styles.current : ""
              }`}
              onClick={() => navigate(page[key])}
            >
              <li>
                <Link to={page[key]}>{key}</Link>
              </li>
            </div>
          );
        }
      }
    });
    return result;
  };
  return (
    <div>
      {smallScreens ? (
        <div className={styles.subPagesMenuContainer}>
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)}
          >
            <IoMenuSharp className={styles.menuIcon}></IoMenuSharp>
          </button>
          <div
            className={`${styles.smallScreenContainer} ${
              !isMenuOpen ? styles.menuClosed : styles.menuOpen
            }`}
          >
            <div
              className={`${styles.mainContainer} ${
                smallScreens ? styles.smallScreens : ""
              }`}
            >
              <div className={`${smallScreens ? "" : styles.scrollable}`}>
                <ul>{handlePages(subPagesList)}</ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${styles.mainContainer} ${
            smallScreens ? styles.smallScreens : ""
          }`}
        >
          <h4>Mais Info</h4>
          <div className={`${smallScreens ? "" : styles.scrollable}`}>
            <ul>{handlePages(subPagesList)}</ul>
            <br />
          </div>
        </div>
      )}
    </div>
  );
}
