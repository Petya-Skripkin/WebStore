const isNotAvailableData = (operationName, data) => {
  return data[operationName] === null;
};

export default {
  isNotAvailableData
};
