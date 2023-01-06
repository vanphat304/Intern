export const getNestedValue = (arrKey, primeObject = {}) => {

  return Array.isArray(arrKey) ? arrKey.reduce((acc, curr) => {
    if (Object.keys(acc).length === 0) {
      acc = { ...primeObject[curr] }
      return acc;
    } else {
      return acc[curr]
    }
  }, {}) : primeObject[arrKey]
}