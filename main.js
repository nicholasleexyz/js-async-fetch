import "./style.css";

// import { setupCounter } from './counter.js'
import { setupReadButton } from "./readButton";

// setupCounter(document.querySelector("#counter"));
const url = "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users";

const usersRoot = document.querySelector("#userData");
async function read() {
  const data = await fetch(url).then((response) => response.json());
  console.log(data);
  // usersElem.innerHTML = JSON.stringify(data);

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    // span
    const userName = document.createElement("span");
    userName.innerHTML = `${element.user}`;
    usersRoot.appendChild(userName);

    // image
    const userImage = document.createElement("img");
    userImage.setAttribute("src", element.avatar);
    usersRoot.appendChild(userImage);
  }
}

setupReadButton(document.querySelector("#read"), read);
