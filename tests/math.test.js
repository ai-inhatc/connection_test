const math = require('../src/math');
const assert = require('assert');

try {
  console.log("Testing add(1, 2)...");
  assert.strictEqual(math.add(1, 2), 3);
  console.log("Add test passed!");

  console.log("Testing subtract(5, 2)...");
  assert.strictEqual(math.subtract(5, 2), 3);
  console.log("Subtract test passed!");

  console.log("Testing multiply(3, 4)...");
  assert.strictEqual(math.multiply(3, 4), 12);
  console.log("Multiply test passed!");

  console.log("Testing divide(10, 2)...");
  assert.strictEqual(math.divide(10, 2), 5);
  console.log("Divide test passed!");

  console.log("Testing divide(10, 0) for error...");
  assert.throws(() => math.divide(10, 0), /Division by zero/);
  console.log("Division by zero error test passed!");

  process.exit(0);
} catch (error) {
  console.error("Tests failed!");
  console.error(error);
  process.exit(1);
}
