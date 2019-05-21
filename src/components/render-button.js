// import renderDiv from './components/render-div';
import { updateState, getState } from '../app';
import showAlert from '../tools/show-alert';


const renderButtonPlaceholder = () => {
  const span = document.createElement('span');
  span.innerText = 'Delete';
  span.classList.add('app-del-btn-placeholder');

  return span;

}

const renderButton = () => {
    const button = document.createElement('button');
    button.innerText = 'Add new task';
    button.classList.add('app-add-button')
  
    button.onclick = () => {
        const inputNameAlertMessage = 'Add name to your task!';
        const inputAlertMessage = 'Add your task!';
        const taskNameInput = document.querySelector('.app-input')
        const taskInput = document.querySelector('.app-textarea')
        const state = getState();

    
        if (taskNameInput.value == "") {
          showAlert(taskNameInput, inputNameAlertMessage);
        } else if (taskInput.value == "") {
          showAlert(taskInput, inputAlertMessage);
        } else {     
          updateState ({
            items: [...state.items, {name: state.inputNameValue, task:state.inputTaskValue}],
            inputNameValue: '',
            inputTaskValue: ''
          });
        };
      }  
      
    return button;
};
export  {renderButton, renderButtonPlaceholder};