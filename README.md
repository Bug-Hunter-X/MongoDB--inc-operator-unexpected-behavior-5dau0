# MongoDB $inc Operator Unexpected Behavior
This repository demonstrates an uncommon error related to the MongoDB `$inc` operator when used incorrectly, particularly when decrementing values.  The code showcases how using `$inc` with a negative value can lead to unintended consequences. The solution explains how to handle such scenarios gracefully.

## Bug
The provided `bug.js` file contains code that attempts to decrement a counter using the `$inc` operator. This code is problematic because it doesn't handle edge cases where the counter value is already zero. This could lead to unexpected negative values.

## Solution
The `bugSolution.js` file shows the corrected implementation to prevent the sequence value from becoming negative. This is usually handled by using an additional check before applying the `$inc` operator.