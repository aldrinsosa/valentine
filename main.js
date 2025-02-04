const button1 = document.getElementById("1");

const button2 = document.getElementById("2");

button1.addEventListener("click", (e) => {
  swap1(e.target);
});
button2.addEventListener("click", (e) => {
  swap2(e.target);
});

function swap1(e) {
  if (e.innerText === "No 😰") {
    e.innerText = "Si 😍";
    button2.innerText = "No 😰";
  } else {
    alert(
      "Cita agendada para el 14 de febrero para una mañana-tarde de pelis y jueguitos, acompañado con un montón de yapeo y risas 🐱"
    );
  }
}

function swap2(e) {
  if (e.innerText === "No 😰") {
    e.innerText = "Si 😍";
    button1.innerText = "No 😰";
  } else {
    alert(
      "Cita agendada para el 14 de febrero para una mañana-tarde de pelis y jueguitos, acompañado con un montón de yapeo y risas 🐱"
    );
  }
}
