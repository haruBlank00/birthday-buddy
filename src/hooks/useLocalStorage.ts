export const useLocalStorage = <T, K extends string>() => {
  const setItem = (key: K, value: T) => {
    const stringifyedValue = JSON.stringify(value);
    window.localStorage.setItem(key, stringifyedValue);
  };
  const getItem = (key: K): T | null => {
    try {
      const item = window.localStorage.getItem(key);
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
