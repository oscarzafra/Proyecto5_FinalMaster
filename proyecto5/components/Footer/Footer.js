import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Redes Sociales</h2>
<div>
<a href="https://www.linkedin.com/in/%C3%B3scar-zafra-662209262/" target="_blank" rel="noopener noreferrer">
${Button("public/icons/LinkedIn_icon.jpeg", "LinkedIn")}
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
${Button("public/icons/x-icon.png", "X")}
<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
${Button("public/icons/instagram-icons.webp", "Instagram")}
<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
${Button("public/icons/facebook_icons.png", "Facebook")}
</div>
`;