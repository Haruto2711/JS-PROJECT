let history = []; // Mỗi lần tung sẽ lưu "Heads" hoặc "Tails"

// Tung đồng xu
function flipCoin() {
  let random = Math.floor(Math.random() * 2);
  let result;

  if (random === 0) {
    result = "Heads"; 
  } else {
    result = "Tails"; 
  }

  history.push(result);
  return result;
}

// Hiển thị số lần đã tung
function showHistory() {
  console.log("Total flip Coin: " + history.length);
  history.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}

// Thống kê số lần Heads và Tails
function getStats() {
  let headCount = 0;
  let tailCount = 0;

  for (let i = 0; i < history.length; i++) {
    if (history[i] === "Heads") {
      headCount++;
    } else if (history[i] === "Tails") {
      tailCount++;
    }
  }

  console.log("📊 Status:");
  console.log("Heads: " + headCount);
  console.log("Tails: " + tailCount);
}

// --- Test ---
console.log(flipCoin());
console.log(flipCoin());
console.log(flipCoin());
console.log(flipCoin());
console.log(flipCoin());

showHistory();
getStats();
