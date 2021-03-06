const controlInternalState
  = <T>(initialValue: T): [() => T, (value: T) => void] => {
    const state = { value: initialValue };
    return [
      (): T => state.value,
      (value: T): void => {
        state.value = value;
      },
    ];
  };

export default controlInternalState;
