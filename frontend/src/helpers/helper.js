export const handleListItems = (array, setter, type) => {
  let obj = { title: null, amount: null };
  if (type === "earnings") array.push({ ...obj, checked: false });
  else array.push(obj);
  setter(array);
};

export const handleDeleteListItem = (index, array, setter) => {
  array.splice(index, 1);
  setter(array);
};

export const onChangeValue = (index, array, setter, value, key) => {
  if (key === "amount") value = value ? value : 0;
  array[index][key] = value;
  setter(array);
};
