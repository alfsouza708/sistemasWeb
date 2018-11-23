# Trabalho 1 de Sistemas Web
## Introdução

Este trabalho consiste em criar uma página para buscar sugestões de filmes baseadas nos parâmetros dados pelo usuário. Seguindo os critérios estabelecidos, ele deve retornar um filme aleatório com trailer.

Utilizamos uma base de dados fornecida pelo professor para pegarmos informações de filmes e uma API pública do serviço YouTube para buscar trailers.

## Estrutura
A pasta do projeto contém os seguintes arquivos:
`trab1.html` - página em que são feitas as buscas
`trab1.js` - arquivo de JavaScript contendo funções relacionadas a manipulação da base de dados
`youtube.js` - arquivo de JavaScript contendo funções relacionadas à busca do trailer.


## Como testar

Para rodar, abra um terminal na pasta do projeto e digite o seguinte:
`python3 -m http.server`

Isso irá abrir um servidor local HTML pra servir os arquivos. Ao acessá-lo, clique em "trab1.html" para carregar a página. Você então poderá buscar os filmes como desejar.

Abrir os arquivos diretamente causará erros pela diferença de protocolos ("File" vs "HTTP").