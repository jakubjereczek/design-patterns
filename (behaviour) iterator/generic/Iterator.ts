export interface TIterator<TReturn> {
  index: number;
  next(): TReturn;
  prev(): TReturn;
}
