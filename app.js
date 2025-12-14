const KEY = "habit:data";
const data = Storage.get(KEY);

const today = new Date().toISOString().slice(0, 10);

document.getElementById("done").onclick = () => {
  data[today] = (data[today] || 0) + 1;
  Storage.set(KEY, data);
  renderHeatmap(data);
};

renderHeatmap(data);