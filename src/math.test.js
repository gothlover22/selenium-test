
const assert = require('assert');
const { add } = require('../index');

describe('Addition Function Test', () => {
    it('should return 5 when adding 2 and 3', () => {
        const result = add(2, 3);
        assert.strictEqual(result, 5);
    });

    it('should return -1 when adding -2 and 1', () => {
        const result = add(-2, 1);
        assert.strictEqual(result, -1);
    });

    it('should return 0 when adding 0 and 0', () => {
        const result = add(0, 0);
        assert.strictEqual(result, 0);
    });
});
