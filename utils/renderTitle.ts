export const renderTitle = (slug: string) => {
  const nameArray = slug.split("-");
  nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`;

  return nameArray.join(" ");
};
