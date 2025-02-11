export interface ValueAndOnValueChangeProps<T> {
  value?: T;
  onValueChange: (value: T) => void;
}
