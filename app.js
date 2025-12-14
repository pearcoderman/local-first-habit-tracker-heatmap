const KEY = "habit:data";

// Load stored data
const data = Storage.get(KEY, {});

// Get today as YYYY-MM-DD
const today = new Date().toISOString().slice(0, 10);

/**
 * Calculate current streak:
 * consecutive days with value > 0 ending today
 */
function calculateStreak(data) {
  let streak = 0;
  let date = new Date();

  while (true) {
    const key = date.toISOString().slice(0, 10);
    if (data[key] && data[key] > 0) {
      streak++;
      date.setDate(date.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

/**
 * Update streak UI
 */
function updateStreak(data) {
  const el = document.getElementById("streak");
  if (el) {
    el.textContent = calculateStreak(data);
  }
}

// Button handler
document.getElementById("done").onclick = () => {
  data[today] = (data[today] || 0) + 1;
  Storage.set(KEY, data);

  renderHeatmap(data);
  updateStreak(data);
};

// Initial render
renderHeatmap(data);
updateStreak(data);
