import { getState, updateState } from '../app';
import renderParagraph from './render-paragraph';


const onInput = e => {
  const state = getState();
  let focus; 
  if(e.currentTarget.value !== state.inputNameValue){
    focus = 'taskNameInput';
  } 
  updateState({ inputNameValue: e.currentTarget.value, focus: focus});
};

const onTaskInput = e => {
  const state = getState();
  let focus; 
  if(e.currentTarget.value !== state.inputTaskValue){
    focus = 'taskInput';
  } 
  updateState({inputTaskValue: e.currentTarget.value, focus: focus});
}


const renderInput = () => {
  const input = document.createElement('input');
  const state = getState();


  input.oninput = onInput
  input.value = state.inputNameValue;
  input.classList.add('app-input')
  input.setAttribute('placeholder','Add task name...')
   
  return input;
 
};

const renderTextarea = () => {
  const textarea = document.createElement('textarea')
  const state = getState();

  textarea.oninput = onTaskInput
  textarea.value = state.inputTaskValue;
  textarea.classList.add('app-textarea')
  textarea.setAttribute('placeholder','Add task...')
  return textarea
}

const renderInputDiv = () => {
  const div = document.createElement('div');
  const input = renderInput();
  const inputArea = renderTextarea();
  const taskNameParagraph = renderParagraph('Task name:');
  const taskParagraph = renderParagraph('Task:');

  div.classList.add('app-input-container');
  [taskNameParagraph, input, taskParagraph,inputArea].forEach(element =>
    div.appendChild(element)
  );

  return div;

};


export default renderInputDiv;