import CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';


function saveForm(value) {
  if (typeof window.localStorage != "undefined") {
    localStorage.setItem("formSource", value);
  }
}

function retrieveForm() {
  if (typeof window.localStorage != "undefined") {
    return localStorage.getItem("formSource");
  }
  return null;
}

function setupCodeMirror() {

  const editor = document.getElementById('editor');
  const formview = document.getElementById('formview');
  const defaultForm = formview.innerHTML.trim();
  formview.innerHTML = retrieveForm() || defaultForm;

  const myCodeMirror = CodeMirror(editor, {
    value: retrieveForm() || defaultForm,
    mode: "htmlmixed"
  });

  function updateForm() {
    let newSource = myCodeMirror.doc.getValue();
    formview.innerHTML = newSource;
    saveForm(newSource);
  }

  myCodeMirror.on("change", updateForm);

  document.getElementById('resetButton').onclick = () => {
    myCodeMirror.doc.setValue(defaultForm);    
  };
}

document.addEventListener("DOMContentLoaded", function(event) { 
  setupCodeMirror();
});
