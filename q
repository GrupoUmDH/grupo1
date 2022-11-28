[33mcommit c55079801c207bb8ca9144d9213a05282a596b61[m[33m ([m[1;36mHEAD -> [m[1;32mlucas[m[33m, [m[1;31morigin/lucas[m[33m)[m
Author: lucasafonsobastos <lucasafonsob@hotmail.com>
Date:   Thu Nov 24 14:10:29 2022 -0300

    atualizando menu

[1mdiff --git a/painelUsuario/index.html b/painelUsuario/index.html[m
[1mindex 2fbbcf2..0a68cc8 100644[m
[1m--- a/painelUsuario/index.html[m
[1m+++ b/painelUsuario/index.html[m
[36m@@ -29,20 +29,14 @@[m
             </div>[m
             <div id="op-menu">[m
                 <div id="menu-content">[m
[32m+[m[32m                    <hr>[m
[32m+[m[32m                    <h1>Minha Conta</h1>[m
                     <hr>[m
                     <ul>[m
[31m-                        <li> <a href="/home/index.html">[m
[31m-                                <img src="/img/ico/silhueta-de-icone-de-casa.png" />[m
[31m-                                Home</a> </li>[m
[31m-                        <li> <a href="/categorias/index.html">[m
[31m-                                <img src="/img/ico/cardapio.png" />[m
[31m-                                Categorias</a> </li>[m
[31m-                        <li> <a href="/suporte/index.html">[m
[31m-                                <img src="/img/ico/suporte-online.png" />[m
[31m-                                Suporte</a> </li>[m
[31m-                        <li> <a href="/sobre-nos/index.html">[m
[31m-                                <img src="/img/ico/sobre-nos.png" />[m
[31m-                                Sobre Nós</a> </li>[m
[32m+[m[32m                        <li><a href="#historico">Histórico de pedidos</a></li>[m
[32m+[m[32m                        <li><a href="#alterar">Alterar cadastro</a></li>[m
[32m+[m[32m                        <li><a href="#cadastrar">Cadastrar cartão</a></li>[m
[32m+[m[32m                        <li><a href="#cancelar">Cancelar assinatura</a></li>[m
                     </ul>[m
                     <hr>[m
                     <span id="linha"></span>[m
[36m@@ -85,9 +79,7 @@[m
                 </div>[m
             </div>[m
         </nav>[m
[31m-    </header>[m
 [m
[31m-    <main>[m
         <aside class="container-side">[m
             <nav id="menu">[m
                 <h1>Minha Conta</h1>[m
[36m@@ -100,7 +92,9 @@[m
                 </ul>[m
             </nav>[m
         </aside>[m
[32m+[m[32m    </header>[m
 [m
[32m+[m[32m    <main>[m
         <section class="container">[m
             <div class="titulos">[m
                 <h1 id="historico">Histórico de Pedidos</h1>[m
[36m@@ -200,37 +194,36 @@[m
             <hr>[m
             <section class="alterar">[m
                 <div class="formulario">[m
[31m-                    [m
[31m-                        <div class="dados-usuario">[m
[31m-                            <form method="post" id="form-email">[m
 [m
[31m-                                <div class="invisible err-email">Campo obrigatório!</div>[m
[31m-                                <input placeholder="DIGITE NOVO E-MAIL" type="email" name="email" id="email">[m
[31m-                                <div class="invisible err-email1">Confirme o novo e-mail Digitado.</div>[m
[31m-                                <input placeholder="DIGITE NOVO E-MAIL NOVAMENTE" type="email" name="email1"[m
[31m-                                    id="email1">[m
[31m-                                <button id="alterar-email">Alterar</button>[m
[31m-                            </form>[m
[31m-                            <form method="post" id="form-nome">[m
[32m+[m[32m                    <div class="dados-usuario">[m
[32m+[m[32m                        <form method="post" id="form-email">[m
 [m
[31m-                                <div class="invisible err-name">Campo obrigatório!</div>[m
[31m-                                <input placeholder="DIGITE NOVO NOME DE USUÁRIO" type="text" name="name" id="name">[m
[31m-                                <button id="alterar-nome">Alterar</button>[m
[31m-                            </form>[m
[31m-                            <form method="post" id="form-password">[m
[32m+[m[32m                            <div class="invisible err-email">Campo obrigatório!</div>[m
[32m+[m[32m                            <input placeholder="DIGITE NOVO E-MAIL" type="email" name="email" id="email">[m
[32m+[m[32m                            <div class="invisible err-email1">Confirme o novo e-mail Digitado.</div>[m
[32m+[m[32m                            <input placeholder="DIGITE NOVO E-MAIL NOVAMENTE" type="email" name="email1" id="email1">[m
[32m+[m[32m                            <button id="alterar-email">Alterar</button>[m
[32m+[m[32m                        </form>[m
[32m+[m[32m                        <form method="post" id="form-nome">[m
 [m
[31m-                                <div class="invisible err-password">Campo obrigatório!</div>[m
[31m-                                <input placeholder="DIGITE NOVA SENHA" type="password" name="password" id="password">[m
[32m+[m[32m                            <div class="invisible err-name">Campo obrigatório!</div>[m
[32m+[m[32m                            <input placeholder="DIGITE NOVO NOME DE USUÁRIO" type="text" name="name" id="name">[m
[32m+[m[32m                            <button id="alterar-nome">Alterar</button>[m
[32m+[m[32m                        </form>[m
[32m+[m[32m                        <form method="post" id="form-password">[m
 [m
[31m-                                <div class="invisible err-password1">Campo obrigatório!</div>[m
[31m-                                <input placeholder="DIGITE NOVA SENHA NOVAMENTE" type="password" name="password1"[m
[31m-                                    id="password-1">[m
[31m-                                <button id="alterar-senha">Alterar</button>[m
[31m-                            </form>[m
[32m+[m[32m                            <div class="invisible err-password">Campo obrigatório!</div>[m
[32m+[m[32m                            <input placeholder="DIGITE NOVA SENHA" type="password" name="password" id="password">[m
[32m+[m
[32m+[m[32m                            <div class="invisible err-password1">Campo obrigatório!</div>[m
[32m+[m[32m                            <input placeholder="DIGITE NOVA SENHA NOVAMENTE" type="password" name="password1"[m
[32m+[m[32m                                id="password-1">[m
[32m+[m[32m                            <button id="alterar-senha">Alterar</button>[m
[32m+[m[32m                        </form>[m
[32m+[m
[32m+[m[32m                        <button id="confirme-alterar">Confirmar alterações</button>[m
[32m+[m[32m                    </div>[m
 [m
[31m-                            <button id="confirme-alterar">Confirmar alterações</button>[m
[31m-                        </div>[m
[31m-                   [m
                 </div>[m
             </section>[m
         </section>[m
[1mdiff --git a/painelUsuario/style.css b/painelUsuario/style.css[m
[1mindex 266a64f..40c1205 100644[m
[1m--- a/painelUsuario/style.css[m
[1m+++ b/painelUsuario/style.css[m
[36m@@ -58,10 +58,9 @@[m [mheader {[m
 }[m
 [m
 .navlogo {[m
[31m-    width: 8.3rem;[m
[31m-    padding: .5rem 2rem;[m
[31m-    position: fixed;[m
[31m-    align-self: center;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    width: 5rem;[m
[32m+[m[32m    padding-left: 10px;[m
 }[m
 [m
 .paginas ul {[m
[36m@@ -71,7 +70,6 @@[m [mheader {[m
     gap: 3rem;[m
     padding: 0;[m
     list-style: none;[m
[31m-    margin-left: 200px;[m
 }[m
 [m
 .paginas a {[m
[36m@@ -93,18 +91,11 @@[m [mheader {[m
     flex-wrap: nowrap;[m
     padding-right: 10px;[m
     justify-content: space-around;[m
[31m-[m
 }[m
 [m
 .content a {[m
     margin-top: 5px;[m
[31m-    margin-right: 2rem;[m
[31m-    gap: 0.5rem;[m
[31m-    justify-content: space-around;[m
[31m-}   [m
 [m
[31m-.content a {[m
[31m-    margin-top: 5px;[m
 }[m
 [m
 .content img {[m
[36m@@ -196,6 +187,7 @@[m [mmain {[m
     width: 100%;[m
     height: 100%;[m
     gap: .5rem;[m
[32m+[m[32m    margin-left: 5rem;[m
 }[m
 .error{[m
     color: white;[m
[36m@@ -208,17 +200,16 @@[m [mmain {[m
 }[m
 [m
 #menu{ [m
[32m+[m[32m    width: 15rem;[m
     position: fixed;[m
     top: 0;[m
     left: 0;[m
     margin:2rem 0 ;[m
[31m-    border: .5rem;[m
     padding: 0;[m
     margin-top: 7.2rem;[m
     max-width: 25%;[m
     height: 100%;[m
[31m-    background-color: var(--background-2);[m
[31m-    border-radius: 2%;  [m
[32m+[m[32m    background-color: var(--background-2);[m[41m [m
 }[m
 #menu h1{[m
     font-size: 1.5rem;[m
[36m@@ -598,4 +589,14 @@[m [mfooter {[m
 [m
 [m
 [m
[31m-/* RESPONSIVE */[m
\ No newline at end of file[m
[32m+[m[32m/* RESPONSIVE */[m
[32m+[m
[32m+[m[32m@media (max-width: 1180px){[m
[32m+[m[32m    .container-side {[m
[32m+[m[32m        display: none;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    main {[m
[32m+[m[32m        margin-left: auto;[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
\ No newline at end of file[m
