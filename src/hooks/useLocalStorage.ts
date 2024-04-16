export const useLocalStorage = <T, K>() => {
  const setItem = (key: K, value: T) => {
    const stringifyedValue = JSON.stringify(value);
    window.localStorage.setItem(key, stringifyedValue);
  };
  const getItem = (key: K): T | null => {
    try {
      const item = window.localStorage.getItem(key as string);
      if (item) {
        return JSON.parse(item);
      }
      return null;
    } catch (error) {
      return null;
    }
  };
  return { setItem, getItem };
};
