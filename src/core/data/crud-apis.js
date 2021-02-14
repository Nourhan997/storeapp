import { items, categories } from "./mock-data";

export const updateItem = (itemId, data) =>
  new Promise((resolve, reject) => {
    if (!items[itemId]) {
      return setTimeout(() => reject(new Error("Item not found")), 250);
    }
    items[itemId] = { ...items[itemId], ...data };

    return setTimeout(() => resolve(true), 250);
  });

export const deleteItem = (itemId) =>
  new Promise((resolve, reject) => {
    const { [itemId]: item, ...rest } = items;
    if (!item) {
      return setTimeout(() => reject(new Error("Item not found")), 250);
    }

    items = { ...rest };

    return setTimeout(() => resolve(true), 250);
  });

export const createItem = (data) =>
  new Promise((resolve, reject) => {
    if (!data.title || !data.modal) {
      reject(new Error("Not all information provided"));
    }

    const itemId = uuidv4();
    const newItem = { itemId, ...data };

    items = { ...items, [itemId]: newItem };

    setTimeout(() => resolve(true), 250);
  });
