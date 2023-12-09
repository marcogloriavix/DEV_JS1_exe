//let elementoJavaScript=document.createElement("li");
//elementoJavaScript.innerText="JavaScript"
//elementoJavaScript.id="ling-js"

//let listaLinguagens=document.querySelector(".lista-linguagens");
//listaLinguagens.appendChild(elementoJavaScript);
//console.log(elementoJavaScript);


const modelonovo=document.createElement("div");

modelonovo.innerHTML=
`<h2 class=post-titulo>NOVOS MODELOS</h2>
<p class="post-texto"> NOVOS MODELOS À VENDA-CONFIRA</p>
<image src="imagemCarro.jpg"></image>
`
const modelosNovos=document.querySelector(".modelos");
modelosNovos.appendChild(modelonovo);
