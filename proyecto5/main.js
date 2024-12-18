import './style.css';
import { Navbar, changeTheme, handleLogin } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Footer } from "./components/Footer/Footer";
import { Inicio } from "./pages/Inicio/Inicio";
import { Films } from "./pages/Film/Film";
import { Series } from "./pages/Series/Series";


document.querySelector("header").innerHTML = Navbar();
document.querySelector("footer").innerHTML = Footer();


linkPage("#iniciolink", Inicio);
linkPage("#filmlink", Films);
linkPage("#serieslink", Series);


Inicio();

changeTheme();

handleLogin();


  
