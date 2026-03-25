const math = require('./math');
const fs = require('fs');
const path = require('path');

console.log("Starting dummy app...");

function greet(name) {
  console.log("Hello, " + name);
}

greet("Tester");

// 새로운 기능: 사용자 파일 읽고 활성 사용자 출력
const usersPath = path.join(__dirname, '../data/users.json');
try {
  const data = fs.readFileSync(usersPath, 'utf8');
  const users = JSON.parse(data);
  const activeUsers = users.filter(user => user.status === 'active');

  console.log("\n--- Active Users ---");
  activeUsers.forEach(user => {
    console.log(`[${user.id}] ${user.name} (${user.email}) - ${user.role}`);
  });
} catch (err) {
  console.error("Error reading users.json:", err.message);
}

// Math utilities demo
console.log("\n--- Math Demo ---");
console.log(`10 * 5 = ${math.multiply(10, 5)}`);
console.log(`20 / 4 = ${math.divide(20, 4)}`);
