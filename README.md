An implementation of slice + map done in a single iteration.
### Usage
```ts
const newArray = sliceMap({
  array,                    // the array to iterate over
  start: 1,                 // index where to start the slice (inclusive)
  end: 3,                   // index where to end the slice (non-inclusive)
  map(item, index, array) { // the mapping function applied to each array item
    // (...)
  }
})
```
