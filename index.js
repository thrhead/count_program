const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
let countResult = function () {
  countLabel.textContent = count;
};

increaseBtn.onclick = function () {
  count++;
  countResult();
};

decreaseBtn.onclick = function () {
  count--;
  countResult();
};

resetBtn.onclick = function () {
  count = 0;
  countResult();
};
