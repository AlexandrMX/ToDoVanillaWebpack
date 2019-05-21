import renderListItem from './render-list-item';
import {updateState, getState } from '../app';



const removeOnClick = index => () => {
  const { items } = getState();

  const newItems = items.filter((value, i) => {
    return index !== i
  });
  updateState({ items: newItems });
};

const renderRemoveButton = index => {
  const remove = document.createElement('button');
  remove.innerText = index;

  remove.onclick = removeOnClick(index);
  remove.classList.add('app-delete-item-btn');
  return remove;
};
export default renderRemoveButton;
