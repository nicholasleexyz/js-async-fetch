export function setupReadButton(buttonElement, callback) {
  buttonElement.addEventListener("click", () => {
    console.log("Read button clicked!");
    callback();
  });
}
