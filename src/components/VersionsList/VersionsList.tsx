import React from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./versionslist.module.css";

interface Version {
  version: string;
  changelog: string;
  tree: string;
}
interface MediumVersions {
  [key: string]: any;
}

interface VersionsListProps {
  versions: Version[];
  mediumVersions: MediumVersions;
  setMediumVersions: React.Dispatch<React.SetStateAction<MediumVersions>>;
  showWhat: string;
}

export default function VersionsList({
  versions,
  mediumVersions,
  setMediumVersions,
  showWhat,
}: VersionsListProps) {
  const [visibleSections, setVisibleSections] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const temp = [...versions];
    const mediumVersions: MediumVersions = {};
    for (let version of temp) {
      if (version.version.length > 3) {
        const twoDigitVersion = version.version.slice(0, 3);
        if (!Object.keys(mediumVersions).includes(twoDigitVersion)) {
          mediumVersions[twoDigitVersion] = [
            {
              [version.version]:
                showWhat === "news" ? version.changelog : version.tree,
            },
          ];
        } else {
          mediumVersions[twoDigitVersion].push({
            [version.version]:
              showWhat === "news" ? version.changelog : version.tree,
          });
        }
      }
    }
    setMediumVersions(mediumVersions);
  }, [versions, showWhat]);

  const iterateMediumVersions = (mediumVersions: MediumVersions) => {
    const result = [];
    for (const key in mediumVersions) {
      if (mediumVersions.hasOwnProperty(key)) {
        result.push(
          <div key={key}>
            <div
              className={styles.toggleDiv}
              onClick={() => toggleVisibility(key)}
            >
              <h3>v{key}</h3>
              <SlArrowDown
                className={`${styles.arrowDown} ${
                  visibleSections[key] ? styles.arrowState : ""
                }`}
              ></SlArrowDown>
              <SlArrowUp
                className={`${styles.arrowUp} ${
                  visibleSections[key] ? "" : styles.arrowState
                }`}
              ></SlArrowUp>
            </div>
            <div
              className={`${styles.dropDownEffect} ${
                visibleSections[key] ? styles.show : ""
              }`}
            >
              {mediumVersions[key].map(
                (versionObj: { [version: string]: string }, index: string) => (
                  <React.Fragment key={index}>
                    {Object.entries(versionObj).map(([versionNumber]) => (
                      <ul key={versionNumber}>
                        <li>
                          <Link
                            to={versionObj[versionNumber]}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            v{versionNumber}
                          </Link>
                        </li>
                      </ul>
                    ))}
                  </React.Fragment>
                )
              )}
            </div>
          </div>
        );
      }
    }
    return result;
  };

  const toggleVisibility = (key: string) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div>
      <div id="versionsList" className={styles.versionsList}>
        {iterateMediumVersions(mediumVersions)}
      </div>
    </div>
  );
}
