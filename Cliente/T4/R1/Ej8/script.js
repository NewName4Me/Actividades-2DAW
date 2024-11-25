const textarea = document.forms.myform.contenido;

textarea.addEventListener('blur', replaceAllAmpersan);

function replaceAllAmpersan() {
    textarea.value = textarea.value.replace(/&/g, "and");
}
