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

export const filterObjectFalsy = (obj) => Object.entries(obj).reduce((acc,[key,value]) => (value == null ? acc : (acc[key]=value, acc)), {})