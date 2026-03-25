const math = require('../src/math');
const assert = require('assert');

try {
  console.log("Testing add(1, 2)...");
  assert.strictEqual(math.add(1, 2), 3);
  console.log("Add test passed!");

  console.log("Testing subtract(5, 2)...");
  assert.strictEqual(math.subtract(5, 2), 3);
  console.log("Subtract test passed!");

  process.exit(0);
} catch (error) {
  console.error("Tests failed!");
  console.error(error);
  process.exit(1);
}
