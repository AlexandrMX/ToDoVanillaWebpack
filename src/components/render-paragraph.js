
const renderParagraph = (text) => {
    const paragraph = document.createElement('p');
    paragraph.classList.add('app-task-p');
    paragraph.innerText= text;
    return paragraph;
}

export default renderParagraph;