import 'css/style.css';
import renderHeading from './components/render-heading';
import renderList from './components/render-list';
import renderInputDiv   from './components/render-input';
import * as renderButtons from './components/render-button';
import focusHandling from './tools/focus-handling';

let state = { items: [{ name: '' , task: ''}], inputNameValue: '', inputTaskValue:'', focus:'' };
export const getState = () => state;
export const updateState = newState => {
    state = { ...state, ...newState };
   
    render();
};
const render = () => {
    const app = document.getElementById('app');
    const items = state.items;
    const inputDiv = renderInputDiv();
    const taskNameInput = inputDiv.children[1];
    const taskInput = inputDiv.children[3]; 
    
    app.innerHTML = '';

    [renderHeading(), inputDiv, renderButtons.renderButton()].forEach(element =>
        app.appendChild(element)
      );

    if (items[items.length-1].name !== '') {
        app.appendChild(renderList());
    }
    focusHandling(state.focus,taskNameInput,taskInput);  
};

render();
