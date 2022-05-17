function styleFieldset(e){
    e.target.parentElement.children[0].style.textDecoration = "underline";
}

function removeStyleFieldset(e){
    e.target.parentElement.children[0].style.textDecoration = "none";
}

export { styleFieldset, removeStyleFieldset }