export const setLocalStorage = (key, value) => {
  localStorage[key] = value;
};

export const getLocalStorage = key => {
  if (!localStorage[key]) return '';

  return localStorage[key];
};

export const getAllLocalStorage = () => localStorage;

export const removeLocalStorage = key => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
