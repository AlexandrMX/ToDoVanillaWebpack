import { getState } from '../app';
import * as renderLists  from './render-list-item'
import renderRemoveButton from './render-remove-button';

const renderList = () => {
  
  const { items } = getState();

  const list = document.createElement('ul');

list.classList.add('app-task-list')
list.appendChild(renderLists.renderTitleListDiv())
  items.forEach((item,index) => {
    if(index !== 0) {
    list.appendChild(renderLists.renderListDiv(item.name, item.task, index));
    }
  });

  return list;
};

export default renderList;