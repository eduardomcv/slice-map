export interface SliceMapOptions<Item, MappedItem> {
  /**
   * the array to iterate over
   */
  array: Item[];
  /**
   * index where to start the slice (inclusive)
   */
  start?: number;
  /**
   * index where to end the slice (non-inclusive)
   */
  end?: number;
  /**
   * the function applied to each array item
   */
  map: (item: Item, index: number, array: Item[]) => MappedItem;
}

/**
 * An implementation of slice + map done in a single iteration.
 * For both `options.start` and `options.end`, a negative index can be used to indicate an offset
 * from the end of the array. For example, -2 refers to the second to last element of the array.
 *
 * @param options.array the array to iterate over
 * @param options.map the mapping function applied to each array item
 * @param options.start index where to start the slice (inclusive)
 * @param options.end index where to end the slice (non-inclusive)
 */
export function sliceMap<Item, MappedItem>(
  options: SliceMapOptions<Item, MappedItem>,
): MappedItem[] {
  const { array, start, end, map } = options;

  const arrayLength = array.length;

  let startIndex: number; // inclusive
  let endIndex: number; // non-inclusive

  if (typeof start === "undefined") {
    startIndex = 0;
  } else if (start < 0) {
    startIndex = arrayLength + start;
  } else {
    startIndex = start;
  }

  if (typeof end === "undefined") {
    endIndex = arrayLength;
  } else if (end < 0) {
    endIndex = arrayLength + end;
  } else {
    endIndex = Math.min(end, arrayLength);
  }

  // if startIndex is larger than endIndex, create an empty array
  const newLength = Math.max(endIndex - startIndex, 0);
  const newArray: MappedItem[] = new Array(newLength);

  for (let i = 0; i < newLength; i += 1) {
    const offset = startIndex + i;
    const mappedItem = map(array[offset], offset, array);
    newArray[i] = mappedItem;
  }

  return newArray;
}
