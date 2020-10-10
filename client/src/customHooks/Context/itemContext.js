import React,{useState} from ‘react’;

export const ItemContext = React.createContext({
  items:[],
  toggleCart:()=>{}
});

export default props => {
  const [itemsList, setItemsList] = useState([]);

  const addToCart = itemId => {
  console.log(itemId)
  
  setItemsList(currentItemList=>{
  const itemIndex = currentItemList.findIndex(
  i => i.id === itemId
  );
  const newStatus = !currentItemList[itemIndex].isCartItem
  const updatedItem = [...itemsList]
  updatedItem[itemIndex] = {
    ...currentItemList[itemIndex], isCartItem:newStatus
  };
  return updatedItem;
  });
  }
  return (
  <ItemContext.Provider value={{items:itemsList, toggleCart:addToCart}}>
  {props.children}
  </ItemContext.Provider>
  );
  };