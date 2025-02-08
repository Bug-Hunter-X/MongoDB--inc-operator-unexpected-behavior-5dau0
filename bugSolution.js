```javascript
//Correct usage of $inc operator with error handling
db.collection('counters').updateOne( { _id: 'myCounter', sequence: { $gt: 0 } }, { $inc: { sequence: -1 } } );
```