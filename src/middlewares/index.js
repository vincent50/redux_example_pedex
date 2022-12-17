export const logger = (store) => (next) => (action) => {
  console.log(action);
  console.log("Esto se imprime desde el middleware")
  next(action)
}

// Agrega un pokemon al inicio de la lista
export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: 'eddie' }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured}
  };
  next(updatedActionInfo);
}