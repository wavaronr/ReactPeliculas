// libraries
import { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Login from "./components/Login";
import Listado from "./components/Listado";
import Detalle from "./components/Detalle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resultados from "./components/Resultados";
import Favoritos from "./components/Favoritos";
import Cards from "./components/Cards";

// styles
import "./css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";
import toast, { Toaster } from "react-hot-toast";
import Calendario from "./components/Calendario";

function App() {
  const [favorites, setFavorites] = useState([]);
  const storageFavorites = useMemo(
    () =>
      localStorage.getItem("favs")
        ? JSON.parse(localStorage.getItem("favs"))
        : [],
    []
  );

  useEffect(() => {
    setFavorites(storageFavorites);
  }, [storageFavorites]);

  const addOrRemoveFromFavs = (e) => {
    const tempMoviesFavs = storageFavorites;

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgUrl = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("div .card-title").innerText;
    const overview = parent.querySelector("p").innerText;
    const movieFavs = {
      img: imgUrl,
      title: title,
      overview: overview,
      id: btn.dataset.movieId,
    };
    console.log(btn.dataset.movieId);

    let movieIsInArrays = tempMoviesFavs.find((oneMovie) => {
      return oneMovie.id === movieFavs.id;
    });

    if (!movieIsInArrays) {
      tempMoviesFavs.push(movieFavs);
      localStorage.setItem("favs", JSON.stringify(tempMoviesFavs));
      console.log("Movie Add successfull");
      toast.success("Like ❤️ son: " + tempMoviesFavs.length);
      setFavorites(tempMoviesFavs);
    } else {
      let movieLeft = tempMoviesFavs.filter((oneMovie) => {
        return oneMovie.id !== movieFavs.id;
      });
      localStorage.setItem("favs", JSON.stringify(movieLeft));
      console.log("Movie Delete :( successfull");
      toast.error("Dislike 💔");
      setFavorites(movieLeft);
    }
    // console.log(movieFavs);
  };

  //

  return (
    // etiquet Login components for login to all
    //  <>

    <>
      <div className=" container-xxl bg-dark">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Login />} key="login" />
            <Route
              exact
              path="/Listado"
              element={<Listado App={{ addOrRemoveFromFavs }} />}
              key="listado"
            ></Route>
            <Route
              exact
              path="/Detalle"
              element={<Detalle />}
              key="detalle"
            ></Route>
            {/* App is the name of the props de funtions for to send favs */}
            <Route
              exact
              path="/Resultados"
              element={<Resultados App={{ addOrRemoveFromFavs }} />}
              key="resultados"
            ></Route>
            <Route exact path="/Cards" element={<Cards />} key="cards"></Route>
            <Route
              exact
              path="/Favoritos"
              element={
                <Favoritos
                  App={{ addOrRemoveFromFavs }}
                  favorites={favorites}
                />
              }
              key="favorfavoritos"
            ></Route>

            <Route
              exact
              path="/Calendario"
              element={<Calendario />}
              key="Calendario"
            ></Route>
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
