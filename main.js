String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

String.prototype.toSentenceCase = function () {
    return this.replace(/\b((?!=|\.).)+(.)/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

const textarea = document.getElementById('inp-txtarea')

document.querySelectorAll('button').forEach(node => node.addEventListener("click", (e) => {
    switch (e.path[0].id) {
        case ('upper-case'): textarea.value = textarea.value.toUpperCase(); break;
        case ('lower-case'): textarea.value = textarea.value.toLowerCase(); break;
        case ('proper-case'): textarea.value = textarea.value.toProperCase(); break;
        case ('sentence-case'): textarea.value = textarea.value.toSentenceCase(); break;
        case ('save-text-file'): download("text.txt", textarea.value); break;
    }
}))