import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Documentation from "./pages/Documentation/Documentation";
import Downloads from "./pages/Downloads/Downloads";
import Tutorials from "./pages/Tutorials/Tutorials";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import Versions from "./pages/Versions/Versions";
import Blog from "./pages/Blog/Blog";
import KataElim from "./pages/Documentation/KataElim/KataElim";
import TeamKata from "./pages/Documentation/TeamKata/TeamKata";
import Kihon from "./pages/Documentation/Kihon/Kihon";
import KataFinals from "./pages/Documentation/KataFinals/KataFinals";
import Kumite from "./pages/Documentation/Kumite/Kumite";
import TeamKumite from "./pages/Documentation/TeamKumite/TeamKumite";
import Inicio from "./pages/Documentation/Inicio/Inicio";
import Creditos from "./pages/Documentation/Creditos/Creditos";
import KihonFinals from "./pages/Documentation/KihonFinals/KihonFinals";
import Login from "./pages/Documentation/Login/Login";
import { CgEnter } from "react-icons/cg";

interface Version {
  version: string;
  changelog: string;
  tree: string;
}

interface Blogs {
  post_id: string;
  post_name: string;
  post_content: string;
  post_date: string;
  post_author: string;
}

function App() {
  const [currentVersion, setCurrentVersion] = useState("0.0.0");
  const [newestVersion, setNewestVersion] = useState("0.0.0");
  const [versions, setVersions] = useState<Version[]>([]);
  const [currentPage, setCurrentPage] = useState({
    home: true,
    about: false,
    docs: false,
    download: false,
    tutorials: false,
    versions: false,
    blog: false,
    contacts: false,
  });
  const [blogPosts, setBlogPosts] = useState<Blogs[]>([]);
  const location = useLocation();

  useEffect(() => {
    if (document.readyState === "loading") {
      const handleDOMContentLoaded = (_event: any) => {
        console.log("DOM fully parsed");
      };

      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
      return () => {
        document.removeEventListener(
          "DOMContentLoaded",
          handleDOMContentLoaded
        );
      };
    } else {
      const zoomContainers = document.querySelectorAll(".imgContainer");
      const overlay = document.querySelector(".overlay");

      if (!zoomContainers || !overlay) {
        return;
      }

      let zoomedIn = false;

      zoomContainers.forEach((zoomContainer) => {
        const handleZoomClick = () => {
          if (!zoomedIn) {
            zoomContainer.classList.add("zoom-active");
            zoomContainer.scrollIntoView({
              block: "center",
              behavior: "smooth",
            });
            overlay.classList.add("active");
            zoomedIn = true;
          } else {
            zoomContainer.classList.remove("zoom-active");
            overlay.classList.remove("active");
            zoomedIn = false;
          }
        };

        const handleOverlayClick = () => {
          zoomContainer.classList.remove("zoom-active");
          overlay.classList.remove("active");
          zoomedIn = false;
        };

        const handleEscClick = (event: any) => {
          if (event.code === "Escape") {
            zoomContainer.classList.remove("zoom-active");
            overlay.classList.remove("active");
            zoomedIn = false;
          }
        };

        zoomContainer.addEventListener("click", handleZoomClick);
        document.addEventListener("keydown", handleEscClick);
        overlay.addEventListener("click", handleOverlayClick);

        // Cleanup event listeners on unmount
        return () => {
          zoomContainer.removeEventListener("click", handleZoomClick);
          document.removeEventListener("keydown", handleEscClick);
          overlay.removeEventListener("click", handleOverlayClick);
        };
      });
    }
  });

  useEffect(() => {
    fetch("../../../versions.json")
      .then((response) => response.json())
      .then((data) => setVersions(data.reverse()))
      .catch((error) => console.error("Error fetching versions:", error));
  }, [setVersions]);

  useEffect(() => {
    fetch("../../../blog_posts.json")
      .then((response) => response.json())
      .then((data) => setBlogPosts(data.reverse()))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, [setBlogPosts]);

  useEffect(() => {
    versions.forEach((version) => {
      if (version.version.includes("UPCOMING")) {
        setNewestVersion(version.version.split("-")[0]);
      }
    });
  }, [versions]);

  useEffect(() => {
    setCurrentPage({
      home: false,
      about: false,
      docs: false,
      download: false,
      tutorials: false,
      versions: false,
      blog: false,
      contacts: false,
    });
    const pageName = location.pathname.slice(1);
    if (location.pathname === "/") {
      setCurrentPage({
        home: true,
        about: false,
        docs: false,
        download: false,
        tutorials: false,
        versions: false,
        blog: false,
        contacts: false,
      });
    }
    setCurrentPage((prevPages) => ({
      ...prevPages,
      [pageName]: true,
    }));
    const getTitle = (pathname: string) => {
      switch (pathname) {
        case "/home":
          return "Início - Karate Score App";
        case "/about":
          return "Sobre - Karate Score App";
        case "/docs":
          return "Documentação - Karate Score App";
        case "/download":
          return "Downloads - Karate Score App";
        case "/tutorials":
          return "Tutoriais - Karate Score App";
        case "/versions":
          return "Versões - Karate Score App";
        case "/blog":
          return "Blog - Karate Score App";
        case "/contacts":
          return "Contactos - Karate Score App";
        case "/login":
          return "Docs - Login - Karate Score App";
        case "/inicio":
          return "Docs - Início - Karate Score App";
        case "/kataelim":
          return "Docs - Kata Eliminação - Karate Score App";
        case "/katafinals":
          return "Docs - Kata Finais - Karate Score App";
        case "/teamkata":
          return "Docs - Kata Equipa - Karate Score App";
        case "/kihon":
          return "Docs - Kihon - Karate Score App";
        case "/kumite":
          return "Docs - Kumite - Karate Score App";
        case "/teamkumite":
          return "Docs - Kumite Equipa - Karate Score App";
        default:
          return "My App";
      }
    };
    document.title = getTitle(location.pathname);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const appPath = "/Karate Score App Setup 0.7.1.exe";
    const exe = appPath.split(" ").pop();
    const numbers = exe?.split(".").slice(0, 3);
    const appVersion = numbers?.join(".");
    setCurrentVersion(appVersion!);
  }, [setCurrentVersion]);

  const handleDownload = () => {
    const link = document.createElement("a");
    const appPath = "/Karate Score App Setup 0.7.1.exe";
    link.href = appPath; // Path to your file in the public folder
    const exe = appPath.split(" ").pop();
    const numbers = exe?.split(".").slice(0, 3);
    const appVersion = numbers?.join(".");
    link.download = `KarateScoreApp_${appVersion}.exe`; // Name of the downloaded file
    try {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      alert("Algo correu mal");
    }
  };
  return (
    <div>
      <Header
        currentVersion={currentVersion}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>
      <div className="mainPagesContainer">
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/docs" element={<Documentation></Documentation>}></Route>
          <Route
            path="/download"
            element={
              <Downloads
                handleDownload={handleDownload}
                currentVersion={currentVersion}
                newestVersion={newestVersion}
              ></Downloads>
            }
          ></Route>
          <Route path="/tutorials" element={<Tutorials></Tutorials>}></Route>
          <Route
            path="/versions"
            element={<Versions versions={versions}></Versions>}
          ></Route>
          <Route path="/blog" element={<Blog blogs={blogPosts}></Blog>}></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/inicio" element={<Inicio></Inicio>}></Route>
          <Route path="/kataelim" element={<KataElim></KataElim>}></Route>
          <Route path="/teamkata" element={<TeamKata></TeamKata>}></Route>
          <Route path="/kihon" element={<Kihon></Kihon>}></Route>
          <Route
            path="/kihonfinals"
            element={<KihonFinals></KihonFinals>}
          ></Route>
          <Route path="/katafinals" element={<KataFinals></KataFinals>}></Route>
          <Route path="/kumite" element={<Kumite></Kumite>}></Route>
          <Route path="/teamkumite" element={<TeamKumite></TeamKumite>}></Route>
          <Route path="/credits" element={<Creditos></Creditos>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
