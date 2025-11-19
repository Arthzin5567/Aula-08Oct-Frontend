# Aula-08-10-Frontend
Recriando a página de download do Kernel do Linux. Link do site original: https://www.kernel.org/

## Projeto Recriando a Página de Download do Kernel Linux
- Participantes: Arthur Bertoldo e Eduardo Henrique
- Código/modificacôes no projeto: Arthur Bertoldo
- Figma/modificacôes no projeto: Eduardo Henrique
- Tema: Nós decidimos dar uma leve modernizada ao https://www.kernel.org/, mas também queríamos manter a sua essência, por isso o projeto ficou numa linha entre algo mais moderno e totalmente reformulado e o bom e velho site original.
- Objetivo: Quisermos que essa página fosse mais suave e fácil de se compreender para novatos do mundo Linux, facilitando a vida desses novos usuários.
- Público Alvo: Os novos usuários foram a nossa prioridade. Bom, para alguém querer baixar somente o Kernel do Linux provavelmente esse usuário já possui uma ampla gama de experiência, mas a interface original do site pode deixar esses novos usuários meio desmotivados por parecer antigo demais ou suspeito demais, podendo os deixar com medo de baixar algo que não é o que eles procuram.
- Escolhemos este site porque este quem vos fala, Arthur, está experimentando o mundo do Linux (estou usando o Linux Mint no meu notebook) e estou gostando muito da experiência, então eu e minha dupla achamos interessante trazer mais visibilidade pra esse sistema operacional tão interessante.
- Link pro Figma:https://www.figma.com/design/s5M1gkf8J48MhCwibEBKEa/kernel.org-recreacao-?m=auto&t=FK3aGBp3PlLeciJP-6
- Sobre o design, fontes, etc: Foram escolhidas as mesmas, ou quase as mesmas, do site original. Foi um dos objetivos manter a identidade, a essência do site original, então nada mais justo que usar as mesmas cores e fontes.
- Estrutura das pastas:

aula-08Oct-Frontend/
index.html
README.md
css/styles.css
img/Tux.png

# Parte 2 - Modularização, Acessibilidade e Responsividade
Durante a segunda etapa do projeto, o foco foi transformar o site simples da Parte 1 em uma versão mais organizada, moderna e próxima das práticas reais de desenvolvimento frontend. A primeira grande melhoria foi a modularização do código: em vez de repetir cabeçalho e rodapé em todas as páginas, eles foram separados em arquivos individuais (header.html e footer.html) ocomponentes.js, responsável por buscar e inserir esses componentes na página, além de implementar funcionalidades como o menu hambúrguer responsivo com controle de acessibilidade usando aria-expanded e o botão “Voltar ao topo”, que melhora a experiência de navegação.
Também foram feitas melhorias importantes de acessibilidade, garantindo que o site pudesse ser usado com mais conforto por qualquer pessoa. Foi adicionado um skip-link para permitir acesso rápido ao conteúdo principal, reforçado o foco visível nos elementos interativos e adotadas tags semânticas como <header>, <main>e `<rodapé<footer>, facilitando o entendimento da página por leitores de tela e pela navegação via teclado.
Outro ponto essencial foi a responsividade. O site passou a seguir a abordagem mobile-first, garantindo que funcione bem primeiro nas telas menores e, a partir disso, se adapte para tablets e desktops. Para isso, foi criado o arquivo responsive.css, onde foram organizados os breakpoints e ajustes de layout, garantindo que menus, grids, textos e imagens funcionem corretamente em qualquer resolução.
Além disso, a estrutura geral do projeto foi reorganizada para ficar mais clara e profissional. Foi criado o diretório docs/ para armazenar prints, evidências, wireframes e qualquer outro material que comprove o desenvolvimento e facilite futuras revisões. Com todas essas melhorias, o projeto ganhou uma base mais sólida, organizada e preparada para crescer, tornando-se mais acessível, responsivo e fácil de manter.

- Criados:
os componentes componentes/header.html e componentes/footer.html.
js/componentes.js para carregar componentes dinamicamente e adicionar:
Toggle de menu (acessível via aria-expanded)
Botão "Voltar ao topo"
Criados:estilos css/componentes.css e css/responsive.css com melhorias de acessibilidade (skip-link, :focus visível) e regras mobile-first.
Atualizados: arquivos HTML encontrados (index.html) para incluir containers de header/footer e carregar js/componentes.js.
Diretório: docs/ criado para artefatos e sugerir inclusão de wireframes/prints.

Estrutura das pastas(atualizada):

aula-08Oct-Frontend:

index.html
README.md
css/styles.css-componentes.css- responsive.css
img/Tux.png
componentes/footer.html- header.html
docs/rubrica.md
js/componentes.js
.gitattributes

OBS:
devido ao site original nao possuir uma localicao e numero de whatssapp definidos nao possivel adiciona-los.