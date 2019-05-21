import renderRemoveButton from './render-remove-button';
import * as renderButtons from './render-button';
import createDate from '../tools/date-creator';

const renderListItemName = (name) => {
  const listItem = document.createElement('li');
  listItem.innerText = name;
  return listItem;
};
const renderListItemTask = (task) => {
  const listItemTask = document.createElement('li');
  listItemTask.innerText = task;
  return listItemTask;
};
const renderTitleListDiv = () => {
  const listTitleDiv = document.createElement('div');
  const removeButton = renderButtons.renderButtonPlaceholder();
  const itemName = renderListItemName('Task name');
  const itemTask = renderListItemTask('Task');
  const itemDate = renderListItemName('Date');
  
  [removeButton, itemName, itemTask, itemDate].forEach(element =>
    listTitleDiv.appendChild(element)
  );  
  listTitleDiv.classList.add('app-item-container');
  
  return listTitleDiv;

}

const renderListDiv = (name,task,index) => {
  let date  = createDate();
  const listDiv = document.createElement('div')
  const removeButton = renderRemoveButton(index);
  const itemName = renderListItemName(name, index);
  const itemTask = renderListItemTask(task, index);
  const itemDate = renderListItemTask(date, index);

  [removeButton, itemName, itemTask, itemDate].forEach(element =>
    listDiv.appendChild(element)
  );  
  listDiv.classList.add('app-item-container');

  return listDiv;
}

export {renderListDiv, renderTitleListDiv} ;
