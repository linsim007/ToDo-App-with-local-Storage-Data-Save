const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("addButton");

button.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveDate();
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveDate();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveDate();
  }
});

const saveDate = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showData = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showData();
