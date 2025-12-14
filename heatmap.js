function renderHeatmap(data) {
  const el = document.getElementById("heatmap");
  el.innerHTML = "";

  const days = 120;

  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    const key = date.toISOString().slice(0, 10);
    const value = data[key] || 0;

    const cell = document.createElement("div");
    cell.className = "cell level-" + Math.min(value, 4);
    cell.title = key + " – " + value;

    el.appendChild(cell);
  }
}