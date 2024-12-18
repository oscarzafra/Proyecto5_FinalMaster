import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};


export const showLoginModal = () => {
  const modalBg = document.querySelector(".modal-bg");
  modalBg.style.display = "flex"; 
};


export const closeLoginModal = () => {
  const modalBg = document.querySelector(".modal-bg");
  modalBg.style.display = "none"; 
};


export const handleLogin = () => {
  const loginBtn = document.querySelector("#loginBtn");
  loginBtn.addEventListener("click", showLoginModal);

  const closeModalBtn = document.querySelector(".modal-close");
  closeModalBtn.addEventListener("click", closeLoginModal);

  const modalForm = document.querySelector("#loginForm");
  modalForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if (username === "admin" && password === "1234") {
      alert("¡Inicio de sesión exitoso!");
      closeLoginModal();
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
};


export const Navbar = () => `
  <nav>
    <h2>FindFun</h2>
    <ul>
      <li>
        <a href="#" id="iniciolink">Inicio</a> 
      </li>
      <li>
        <a href="#" id="filmlink">Peliculas</a> 
      </li>
      <li>
        <a href="#" id="serieslink">Series</a> 
      </li>
      <li>
        <button id="loginBtn">Iniciar sesión</button> 
      </li>
      <li>
        <button id="themeBtn">☀</button> 
      </li> 
    </ul>
  </nav>
  <div class="modal-bg">
    <div class="modal">
      <button class="modal-close">&times;</button>
      <h2>Iniciar sesión</h2>
      <form id="loginForm">
        <input type="text" id="username" placeholder="Nombre de usuario" required />
        <input type="password" id="password" placeholder="Contraseña" required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>
`;


