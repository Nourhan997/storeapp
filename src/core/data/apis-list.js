import { items, categories } from "./mock-data";


//CategoryListScreen
export function getItems(categoryId) {
  const itemsArray = [];
  items.map((data) => {
    if (data.categoryId == categoryId) {
      itemsArray.push(data);
    }
    console.log(itemsArray)
  });
  return itemsArray;
}

//Items
export const getCategoryById = (categoryId) =>
  new Promise((resolve, reject) => {
    const category = categories[categoryId];
    if (!category) {
      return setTimeout(() => reject(new Error("category not found")), 250);
    }
    setTimeout(() => resolve(categories[categoryId]), 250);
  });

//NumberOfItems Per Category
export function getNumberOfItems(categoryId) {
  let count = 0;
  items.map((data) => {
    if (data.categoryId == categoryId) {
      count++;
    }
  });
  return count;
}

//Search Screen
export function getItemsByCategoryName(categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const itemsArray = [];
  categories.map((data) => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const item = getItems(data.id);
      items.map((item) => {
        itemsArray.push(item);
      });
    }
  });
  return itemsArray;
}

export function getItemsByItemName(title) {
  const nameUpper = title.toUpperCase();
  const itemsArray = [];
  items.map((data) => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      itemsArray.push(data);
    }
  });
  return itemsArray;
}

export function getCategoryName(categoryId) {
  let name;
  categories.map((data) => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}
