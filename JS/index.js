var nome = "João da Silva";
var cargo = "DEVELOPER";
var telefone = "(51)99999-9900";
var email = "joao.silva@gmail.com";
var titulo1 = "Olá,";
var subtitulo1 = "Bem vindo ao meu currículo";
var paragrafo1 = "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.";
var paragrafo2 = "I’m a great place for you to tell a story and let your users know a little more about you.";
var titulo2 = "Projetos";
var subtitulo2 = "Alguns projeto em que trabalhei";
var linkprojeto = "Site da GrowDev";
var descricaoprojeto = "Este site foi desenvolvido em ReactJS";

var nomehtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html");
var telefonehtml = document.getElementById("telefone-no-html");
var emailhtml = document.getElementById("email-no-html");
var titulo1html = document.getElementById("titulo-1");
var subtitulo1html = document.getElementById("subtitulo-1");
var paragrafo1html = document.getElementById("paragrafo-1");
var paragrafo2html = document.getElementById("paragrafo-2");
var titulo2html = document.getElementById("titulo-2");
var subtitulo2html = document.getElementById("subtitulo-2");
var linkprojetohtml = document.getElementById("link-projeto");
var descricaoprojetohtml = document.getElementById("descricao-projeto");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");



function trocanomenohtml(nome) {
    nomehtml.innerHTML = nome;
}

function trocacargonohtml(cargo) {
    cargohtml.innerHTML = cargo;
}

function trocatelefone(telefone){
    telefonehtml.innerHTML = telefone;
}

function trocaemail(email){
    emailhtml.innerHTML = email;
}

function trocatitulo1 (titulo1) {
    titulo1html.innerHTML = titulo1;
}

function trocasubtitulo1 (subtitulo1) {
    subtitulo1html.innerHTML = subtitulo1;
}

function trocaparagrafo1 (paragrafo1) {
    paragrafo1html.innerHTML = paragrafo1;
}

function trocaparagrafo2 (paragrafo2) {
    paragrafo2html.innerHTML = paragrafo2;
}

function trocatitulo2 (titulo2) {
    titulo2html.innerHTML = titulo2;
}

function trocasubtitulo2(subtitulo2) {
    subtitulo2html.innerHTML = subtitulo2;
}

function trocalinkprojeto(linkprojeto) { //*troca descrição do link do projeto
    linkprojetohtml.innerHTML = linkprojeto;
}
function trocadescricaoprojeto(descricaoprojeto) {
    descricaoprojetohtml.innerHTML = descricaoprojeto;
}

function clicnoprojetos() {
    console.log("Clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clicnosobre() {
    console.log("Clicou no botão sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

trocanomenohtml(nome);
trocacargonohtml(cargo);
trocatelefone(telefone);
trocaemail(email);
trocatitulo1 (titulo1);
trocasubtitulo1 (subtitulo1);
trocaparagrafo1 (paragrafo1);
trocaparagrafo2 (paragrafo2);
trocatitulo2 (titulo2);
trocasubtitulo2(subtitulo2);
trocalinkprojeto(linkprojeto);
trocadescricaoprojeto(descricaoprojeto);



