const contentEl = document.querySelector(".content");

for (let index = 0; index < 30; index++) {
  const el = document.createElement("div");
  el.classList.add("box");

  contentEl.appendChild(el);

  // GetRandomColor();
  GetRandomColor(el);
}

function GetRandomColor(el) {
  const arrayColor = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let colorRandom = Math.floor(Math.random() * arrayColor.length);
    console.log(colorRandom);
    color += arrayColor[colorRandom];
  }

  console.log(color);
  el.style.backgroundColor = color;
  el.textContent = color;
}
