import GetInfoForm from "./getInfoForm.js";

const formInfo = GetInfoForm();
const language = formInfo.language.toString();
const allSite = document.querySelector("#cdn");
const linkToDownload = document.createElement("a");
const copyBtn = document.createElement("button");
const copySvg = document.createElementNS("http://www.w3.org/2000/svg","svg");
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
copyBtn.innerHTML = "העתק קוד";
copySvg.innerHTML = '<circle cx="256" cy="256" r="250" fill="#2196f3"/><path fill="#fff" d="M302.9 349.8v19.5c0 6.5-5.2 11.7-11.7 11.7H158.3c-6.5 0-11.7-5.2-11.7-11.7V189.6c0-6.5 5.2-11.7 11.7-11.7h35.2v144.5c0 15.1 12.3 27.3 27.3 27.3l82.1.1z"/><path fill="#fff" d="M302.9 181.8V131h-82c-6.5 0-11.7 5.2-11.7 11.7v179.7c0 6.5 5.2 11.7 11.7 11.7h132.8c6.5 0 11.7-5.2 11.7-11.7V193.5h-50.8c-6.5 0-11.7-5.3-11.7-11.7z"/><path fill="#fff" d="m361.9 166.6-32.2-32.2c-2.2-2.2-5.2-3.4-8.3-3.4h-3v46.9h46.9v-3c.1-3.1-1.2-6.1-3.4-8.3z"/>';
document.querySelector('.all_site').appendChild(copyBtn);
document.querySelector('.all_site').appendChild(linkToDownload);
copyBtn.appendChild(copySvg);
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
linkToDownload.dir = 'rtl';
copySvg.setAttribute("viewBox", "0 0 512 512");

copyBtn.addEventListener('click', () => {
    const code = document.querySelector('code');
    navigator.clipboard.writeText(code.innerText);
    alert('הקוד הועתק בהצלחה!');
})
