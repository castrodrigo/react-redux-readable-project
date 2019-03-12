export const sortArrayObjects = (array, object, orderBy) =>
  [...array].sort((a, b) => {
    if (!object[a] || !object[b]) {
      return 0;
    }
    if (typeof object[a][orderBy] === "string") {
      return object[a][orderBy].localeCompare(object[b][orderBy], "en", {
        sensitivity: "base"
      });
    }
    return object[b][orderBy] - object[a][orderBy];
  });
