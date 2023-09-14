import "./style.css";

// import { setupCounter } from './counter.js'
// import { setupReadButton } from "./readButton";

// setupCounter(document.querySelector("#counter"));
const url = "https://64d5c8e3613ee4426d9799bd.mockapi.io/promineo/users";
const entries = [];
const usersRoot = document.querySelector("#userData");

async function edit(index, newData) {
  const endpoint = `${url}/${index}`;
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  };

  await fetch(endpoint, requestOptions);
  read();
}

async function del(index) {
  const endpoint = `${url}/${index}`;
  await fetch(endpoint, { method: "DELETE" });
  read();
}

async function read() {
  const data = await fetch(url).then((response) => response.json());

  // clear old elements
  for (let i = 0; i < entries.length; i++) {
    entries[i].remove();
  }

  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    // entry
    const entry = document.createElement("div");
    entry.classList.add("entry");
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
    editButton.addEventListener("click", () =>
      edit(element.id, {
        user: "asdf",
        email: "jkl",
        name: "qwerty",
        avatar: "https://picsum.photos/125",
      })
    );
    entry.appendChild(editButton);

    // delete
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `Delete`;
    deleteButton.addEventListener("click", () => del(element.id));
    entry.appendChild(deleteButton);

    entries.push(entry);
  }
}

read();
