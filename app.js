const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container");
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something ✏...");
  } else {
    const li = document.createElement("li");
    li.innerText = inputBox.value;
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    listContainer.appendChild(li);
    inputBox.value = "";
    saveData();
  }
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
