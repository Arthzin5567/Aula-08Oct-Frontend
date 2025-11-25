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

# Parte 3 - Finalização do projeto e publicação

Primeiramente foi feito uma revisão do projeto, foi verificado se os links funcionam, se os formulários funcionam, CSS, JS, etc. Além disso, o repositório foi limpo de outros arquivos inúteis para o projeto, pastas vazias foram removidas. O README também foi atualizado, como podem ver. O projeto também foi publicado no Github Pages e algumas alterações serão registradas após a publicação. O arquivo styles.css foi minimizado e as páginas usam atualmente o styles.min.css. O JS não foi minimizado porque são poucas funções, além de serem pequenas.

- Testes de responsividade (uso do dev tools no Opera GX):
-> iPhone SE - 375x667: O comportamento do site se mostrou razoável, mas os textos do header e do footer não respondem muito bem à responsividade. As tabelas também não tiveram o desempenho esperado quanto a responsividade.
-> iPhone 12 Pro - 390x844: Houve um comportamento semelhante ao teste anterior, mas o texto geral do site ficou ligeiramente pequeno.
-> iPad - 768x1024: Respondeu bem à maior parte do site, mas o texto ficou ligeiramente pequeno e tabelas grandes não responderam como esperado.
-> iPad Pro - 1024x1366:Teve um comportamento semelhante ao teste anterior, mas as tabelas se ajustaram perfeitamente, mas o exto ficou ainda menor.
-> Desktop HD - 1280x720: O site teve o comportamento esperado e perfeito. Isso também serve para Desktops Full HD.

-> Nos dispositivos móveis, percebe-se uma melhora na responsividade quando a tela está na orientação horizontal, ao invés da comum vertical.

-> Foi perceptível uma grande falha no mobile first, mas pelo público alvo do site serem usuários avançados, desenvolvedores e administradores de sistemas, ou seja, eles provavelmente vão acessar o site via computador, seja notebooks, laptops ou Desktops. Então isso deixa as versões mobile impopulares entre o público alvo, mas isso pode fazer com que usuários novos e menos avançados tenham uma experiência mais desagradável ao usarem dispositivos móveis para acessar o site.

-> Os testes foram majoritariamente feitos no Google Chrome e no Opera GX.

# Próximos Passos e Melhorias Futuras

- Ajustar a responsividade do site para ficar mais agradável e arrumado aos smartphones adequando textos e tabelas.
- Implementar Grid e Flexbox para substituir as tabelas e melhorar a responsividade e o desempenho do site.

# Reflexão Individual

- Aprendizados técnicos:
-> Eu já tinha alguns conhecimentos prévios em HTML, mas aprender CSS e JavaScript. Percebi que eu pessoalmente tenho muita dificuldade em design, Frontend não é meu forte, sofri muito pra deixar a interface do jeito que está junto da minha dupla.
-> O básico do Git foi muito tranquilo de aprender, é muito simples e fácil, basta aprender os principais comandos e você consegue ter uma base sólida. 
-> O CSS foi ridículo de difícil de aprender. Eu peguei a lógica fácil, mas implementar para fazer uma interface minimamente boa foi um sofrimento triste. 
-> Domino muito mais o HTML e o CSS em comparação ao início do projeto, principalmente o HTML.

- Aprendizados de processos:
-> Trabalho em grupo é sempre difícil, especialmente para mim que não sou muito sociável. Mas pela minha dupla ser um amigo, as coisas fluíram bem na comunicação. A parte complicada foi na divisão de tarefas
-> Cada um teve um destaque diferente em cada parte do projeto. Na Parte 1, que infelizmente não há muita documentação (dá para usar o subtítulo "Projeto Recriando a Página de Download do Kernel Linux" como uma pseudo-documentação da Parte 1), eu fiquei mais no código e minha dupla ficou mais no Figma. Na Parte 2 tive mais participação no HTML e JS enquanto ele cuidou mais da responsividade. 

- Desafios enfrentados
-> O maior desafio foi mais na parte de design, tanto eu quanto a minha dupla não somos talentosos na parte de design. Sofremos muito para ajustar a interface que foi arrumada na base da tentativa e erro, além de pedir ajuda para amigos de outras turmas.

# Reflexão em Dupla

- Evolução do projeto:
-> Desde a Parte 1 o projeto evoluiu mais na parte técnica e correção de erros. Como o site original é muito simples e quisemos manter fiel ao original, não houveram mudanças tão gritantes. Tentamos aplicar tudo o que foi pedido em cada parte do projeto, mas pela simplicidade do site foi um pouco difícil.
-> O resultado final atente muito bem à proposta inicial. Conseguimos manter fiel ao original e fizemos as melhorias estéticas que estávamos buscando fazer.

- Feedbacks Recebidos:


- Relevância para o Negócio:
-> Apesar do site não agregar muito valor prático aos usuários já estabelecidos do site original, e esse negócio não ser um pequeno negócio, nós buscamos fazer esse projeto com base no site oficial de download do Kernel Linux para trazer mais relevância ao Linux entre os alunos da nossa turma da faculdade. Afinal é um curso de Ciências da Computação, e cremos que é essencial para estudantes como nós termos um maior contato com esse sistema operacional tão importante para o mundo.
-> Caso algum dia nós viermos a apresentar esse site para o Linus Torvalds, diríamos que esse site é mais uma homenagem ao sistema que ele criou.
-> Este projeto ficará no nosso portifólio porque ele está bem completo, bem bonitinho e com poucos problemas. É uma boa porta de entrada aos nossos trabalhos.
