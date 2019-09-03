<!-- Título do Respositório -->
# Web Dev
<!-- -->

<!-- Badges -->
<p align="center">
    <img src="https://img.shields.io/github/languages/count/GuilhermeEsdras/Web-Dev.svg?color=D80E9B">
    <img src="https://img.shields.io/github/languages/top/GuilhermeEsdras/Web-Dev.svg?color=FFD611&label=JavaScript&logo=JavaScript">
    <img src="https://img.shields.io/github/license/GuilhermeEsdras/Web-Dev.svg">
</p>
<!-- -->

<!-- Subtítulo -->
<h2 align="center">My Web Development Repository! =)</h2>
<!-- -->

<!-- Logo -->
<p align="center">
    <img src="Images\Web Design Technologies.png" alt="Web Technologies" height="300">
</p>
<!-- -->

<!-- Msg de boas vindas -->
<p align="center">
    Bem-vindo ao meu repositório de <strong>Desenvolvimento Web</strong>!
</p>

<!-- Links -->
<p align="center">
    • <a href="Projetos">Projetos</a> • 
</p>
<!-- -->

<!-- Code Example-->
<p align="center">
    <img src="https://www.thoughtco.com/thmb/mvmMSSC5cnBtqNmQ_hfFSTD7yew=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/css-code-in-text-editor--web-page-internet-technology-862672426-5c8455ddc9e77c0001a67650.jpg" width="400">
</p>
<!-- -->

---

<!-- Table of Contents -->
## Glossário
- [Web Dev](#web-dev)
  - [Glossário](#gloss%c3%a1rio)
  - [Objetivo](#objetivo)
  - [Material Utilizado](#material-utilizado)
    - [Sistema Operacional](#sistema-operacional)
    - [IDE's e Editores de Texto](#ides-e-editores-de-texto)
    - [Edição de Imagem](#edi%c3%a7%c3%a3o-de-imagem)
    - [Design de Documentos e Mídias Sociais](#design-de-documentos-e-m%c3%addias-sociais)
    - [Mobile e Web Design](#mobile-e-web-design)
  - [Extensões Úteis para Desenvolver no VSCode](#extens%c3%b5es-%c3%9ateis-para-desenvolver-no-vscode)
  - [Sass](#sass)
    - [Instalando Sass com NPM (Node.js)](#instalando-sass-com-npm-nodejs)
    - [Instalando Sass com Ruby](#instalando-sass-com-ruby)
    - [Compilando Sass para CSS](#compilando-sass-para-css)
  - [Links Úteis](#links-%c3%9ateis)
  - [Autor](#autor)
  - [Licença](#licen%c3%a7a)
<!-- -->

<!-- Objetivo -->
## Objetivo
Respositório criado para armazenar meus projetos de Desenvolvimento para Web.
<!-- -->

<!-- Material Utilizado -->
## Material Utilizado
Estes são os materiais usados por mim para desenvolver meus projetos Web.
### Sistema Operacional
- [Windows 10](https://www.microsoft.com/pt-br/windows/)
### IDE's e Editores de Texto
- [Visual Studio Code](https://code.visualstudio.com/)
- [Sublime Text](https://www.sublimetext.com/)
- [JetBrains - PHP Storm](https://www.jetbrains.com/phpstorm/)
### Edição de Imagem
- [Adobe Photoshop CC](https://www.adobe.com/br/products/photoshop.html)
- [Adobe Illustrator CC](https://www.adobe.com/br/products/illustrator.html)
- [Corel Draw 2019](https://www.coreldraw.com/br/)
- [PhotoFiltre Studio X](https://photofiltre-studio.br.uptodown.com/windows)
- [GIMP](https://www.gimp.org/)
### Design de Documentos e Mídias Sociais
- [Adobe InDesign ](https://www.adobe.com/br/products/indesign.html)
- [Adobe Spark](https://www.adobe.com/br/products/spark.html)
### Mobile e Web Design
- [Adobe XD](https://www.adobe.com/br/products/xd.html)
- [Adobe DreamWeaver](https://www.adobe.com/br/products/dreamweaver.html)
<!-- -->

<!-- Extensões -->
## Extensões Úteis para Desenvolver no VSCode

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): Cria um servidor local no navegador padrão e atualiza-o automaticamente a medida que alterações no HTML e CSS (e outros arquivos relacionados ao site) são modificados e salvos no VSCode.
- [Prettier Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Formata os códigos automaticamente, criando identações em locais certos e corrigindo falhas de espaçamento e formatação.
- [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass): Compila (converte em CSS) automaticamente os arquivos Sass a medida que o arquivo .sass é modificado e salvo.
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments): Dá cor aos comentários de acordo com o nível de importancia marcado.
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight): Modifica a cor da fonte do código de uma cor.
- [Guides](https://marketplace.visualstudio.com/items?itemName=spywhere.guides): Adiciona linhas guias nas identações, tornando o código visualmente mais prático.
- [HTML Boilerplate](https://marketplace.visualstudio.com/items?itemName=sidthesloth.html5-boilerplate): Templates de projetos em HTML prontos.
<!-- -->

<!-- -->
## Sass
### Instalando Sass com NPM (Node.js)
1. Verificar se o Node.js está instalado no PC: <br/>
   `> node -v`
2. Caso positivo (caso exiba a versão do Node), instalar o sass usando o comando: <br/>
   `> npm install -g sass`
3. Verificar se foi instalado corretamente: <br/>
   `> sass --version`

Caso o Node.js não esteja instalado, [*baixar e instalar pelo site oficial*](https://nodejs.org/en/download/).

### Instalando Sass com Ruby
> Obs: Não é aconselhável instalar Sass via Ruby pois o mesmo não possui mais suporte para esta versão.
1. Verificar se o Ruby está instalado no PC: <br/>
   `> ruby -v`
2. Caso positivo (caso exiba a versão do Ruby), instalar o sass usando o comando: <br/>
   `> gem install sass`
3. Verificar se foi instalado corretamente: <br/>
   `> sass --version`


### Compilando Sass para CSS
1. De modo manual via terminal (menos prático, mais tedioso): Ir até o arquivo .sass ou .scss e compilar: <br/>
   `> sass teste.scss:teste.css` <br/>
   E então, usar o comando para compilar automáticamente das próximas vezes que o arquivo for salvo: <br/>
   `> sass --watch teste.scss teste.css`

2. De modo automático usando VSCode (mais rápido e prático): <br/>
   Usar a extensão [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)


<!-- Links Úteis -->
## Links Úteis
- [Node.js](https://nodejs.org/en/download/)
- [Sass](https://sass-lang.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)

<!-- Autor/Contato -->
## Autor
* **Guilherme Esdras (guilherme.esdras@outlook.com)** - [GitHub](https://github.com/GuilhermeEsdras) <br/>
  <img src="https://img.shields.io/github/followers/GuilhermeEsdras.svg?label=Segue%20%3A3&style=social">
<!-- -->

<!-- Licença -->
## Licença
*Distributed under the MIT License. See LICENSE for more information.*