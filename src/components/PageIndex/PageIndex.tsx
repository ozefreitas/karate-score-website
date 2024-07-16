import styles from "./pageindex.module.css";

interface HeadersContainer {
  listOfHeaders: HTMLHeadingElement[];
}

export default function PageIndex({
  listOfHeaders,
}: Readonly<HeadersContainer>) {
  const handleClick = (version: HTMLHeadingElement) => {
    version.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div className={styles.mainContainer}>
      <h4>Saltar para</h4>
      <div className={styles.scrollable}>
        <ul>
          {listOfHeaders?.map((version, i) => (
            <li key={i} onClick={() => handleClick(version)}>
              {version.innerText}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
