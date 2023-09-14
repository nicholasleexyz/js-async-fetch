import "./style.css";

// import { setupCounter } from './counter.js'
// import { setupReadButton } from "./readButton";

// setupCounter(document.querySelector("#counter"));
const url = "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users";
const entries = [];
const usersRoot = document.querySelector("#userData");

async function read() {
  const data = await fetch(url).then((response) => response.json());
  console.log(data);
  // usersElem.innerHTML = JSON.stringify(data);

  entries.forEach(ent => ent.remove());

  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    // entry
    const entry = document.createElement("div");
    entry.classList.add('entry');
    usersRoot.appendChild(entry);

    // image
    const userImage = document.createElement("img");
    userImage.setAttribute("src", element.avatar);
    entry.appendChild(userImage);

    // span
    const userName = document.createElement("span");
    userName.innerHTML = `${element.user}`;
    entry.appendChild(userName);

    // edit
    const editButton = document.createElement("button");
    editButton.innerHTML = `Edit`;
    entry.appendChild(editButton);

    // edit
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `Delete`;
    entry.appendChild(deleteButton);

    entries.push(entry);
  }
}

read();
// setupReadButton(document.querySelector("#read"), read);
