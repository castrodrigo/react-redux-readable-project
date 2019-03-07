export const formatTimestamp = timestamp => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US");
};

export const generateTimestamp = () => Date.now();
