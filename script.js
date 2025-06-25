
document.getElementById("hour").addEventListener("input", function (e) {
  const value = e.target.value;
  document.getElementById("hourValue").textContent = value + ":00";
});
