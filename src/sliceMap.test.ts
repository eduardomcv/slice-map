import { sliceMap } from './sliceMap';

describe('sliceMap', () => {
  it('should slice and map array correctly', () => {
    const array = [1, 2, 3, 4, 5];

    const newArray = sliceMap({
      array,
      start: 1,
      end: 4,
      map: (item) => String(item),
    });

    expect(newArray).toStrictEqual(['2', '3', '4']);
  });

  it('should slice to end of array if end is not provided', () => {
    const array = [1, 2, 3, 4, 5];

    const newArray = sliceMap({
      array,
      start: 1,
      map: (item) => String(item),
    });

    expect(newArray).toStrictEqual(['2', '3', '4', '5']);
  });

  it('should slice to end of array if end is not provided', () => {
    const array = [1, 2, 3, 4, 5];

    const newArray = sliceMap({
      array,
      start: 1,
      map: (item) => String(item),
    });

    expect(newArray).toStrictEqual(['2', '3', '4', '5']);
  });

  it('should slice from start of the array if start is not provided', () => {
    const array = [1, 2, 3, 4, 5];

    const newArray = sliceMap({
      array,
      end: 2,
      map: (item) => String(item),
    });

    expect(newArray).toStrictEqual(['1', '2']);
  });

  it('should handle negative numbers', () => {
    const array = [1, 2, 3, 4, 5];

    const newArray = sliceMap({
      array,
      start: -4,
      end: -2,
      map: (item) => String(item),
    });

    expect(newArray).toStrictEqual(['2', '3']);
  });

  it('should return empty list when start is larger than end', () => {
    const array = [1, 2, 3, 4, 5];

    const newArray = sliceMap({
      array,
      start: 3,
      end: 1,
      map: (item) => String(item),
    });

    expect(newArray).toStrictEqual([]);
  });
});
