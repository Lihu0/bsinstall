import GetInfoForm from "./getInfoForm.js";

const formInfo = GetInfoForm();
const language = formInfo.language.toString();
const allSite = document.querySelector("#cdn");
const linkToDownload = document.createElement("a");
const ismininfy = formInfo.min;
const bsCodesReg = {
    css: '&lt;!-- CSS only --><br>&lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"&gt;',
    js: '&lt;!-- JavaScript Bundle with Popper --><br>&lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous">&lt;/script>'
}
const bsCodeMin = {
    css: '&lt;!-- CSS only --><br>&lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"&gt;',
    js: '&lt;!-- JavaScript Bundle with Popper --><br>&lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.js" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"&gt;'
}
let fnameToDownload = '';
linkToDownload.innerHTML = "התקן!";
document.querySelector('.all_site').appendChild(linkToDownload);
if (ismininfy == 'on') {
    allSite.innerHTML = `<code>${language == 'css' ? bsCodesReg.css : bsCodesReg.js}</code>`;
    fnameToDownload = language == 'css' ? 'bootstrap.min.css' : 'bootstrap.min.js';
}

else {
    allSite.innerHTML = `<code>${language == 'css' ? bsCodeMin.css : bsCodeMin.js}</code>`;
    fnameToDownload = language == 'css' ? 'bootstrap.css' : 'bootstrap.js';
}

linkToDownload.href = `bs/${fnameToDownload}`;
linkToDownload.download = fnameToDownload;
linkToDownload.dir = 'rtl'