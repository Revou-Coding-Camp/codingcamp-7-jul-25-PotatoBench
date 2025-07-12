

const form = 
document.getElementById("todoForm");
const taskInput =
 document.getElementById("taskInput");
const dateInput =
 document.getElementById("dateInput");
const todoBody = 
document.getElementById("todoBody");
const clearBtn =
 document.getElementById("clearBtn");
 const filterButtons = 
 document.querySelectorAll("filter button");


form.addEventListener("submit", function (e) {
 e.preventDefault();
 
 const task = taskInput.value.trim();
 const date = dateInput.value;

 if (!task||!date) return;

 const row =
 document.createElement("tr");
 row.innerHTML =`
 <td>${task}</td>
 <td>${date}</td>
 <td><button class="statusBtn">Belum selesai</button></td>
 <td><button class="deleteBtn">hapus</button></td>
 `;

 const filterButtons = document.querySelectorAll(".filter button");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const filter = this.getAttribute("data-filter");
    const rows = todoBody.querySelectorAll("tr");

    rows.forEach((row) => {
      const statusBtn = row.querySelector(".statusBtn");

      if (!statusBtn) return; // abaikan kalau gak ada

      const statusText = statusBtn.innerText;

      const shouldShow =
        filter === "all" ||
        (filter === "done" && statusText === "Selesai") ||
        (filter === "notdone" && statusText === "Belum selesai");

      row.style.display = shouldShow ? "" : "none";
    });
  });
});

 todoBody.appendChild(row);

 taskInput.value ="";
 dateInput.value ="";
});


todoBody.addEventListener("click", function(e) {
    if
    (e.target.classList.contains("deleteBtn")) {
        e.target.closest("tr").remove();

    }
 if
 (e.target.classList.contains("statusBtn")) {
    const current = e.target.innerText;
    e.target.innerText = current === "Belum selesai" ? "Selesai" : "Belum selesai";
 }
});

clearBtn.addEventListener("click", function() {
    todoBody.innerHTML = "";
});

