import { createContext, useState } from "react";

export const BasketContext = createContext();

export const BasketContextProvider = ({ children }) => {
  const [state, setState] = useState({
    totalCount: 0,
    itemsMap: {},
  });

  const addItemToBasket = (item) => {
    const { id, title } = item;
    setState((prevState) => {
      const { totalCount, itemsMap } = prevState;
      return {
        totalCount: totalCount + 1,
        itemsMap: {
          ...itemsMap,
          [id]: itemsMap[id]
            ? { ...itemsMap[id], count: itemsMap[id].count + 1 }
            : { title, count: 1 },
        },
      };
    });
  };

  const removeItemFromBasket = (item) => {
    const { id } = item;
    setState((prevState) => {
      const { totalCount, itemsMap } = prevState;
      let newItemsMap = {
        ...itemsMap,
        [id]: {
          ...itemsMap[id],
          count: itemsMap[id].count - 1,
        },
      };
      if (newItemsMap[id].count === 0) delete newItemsMap[id];
      return {
        totalCount: totalCount - 1,
        itemsMap: newItemsMap,
      };
    });
  };

  return (
    <BasketContext.Provider
      value={{ ...state, addItemToBasket, removeItemFromBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};
