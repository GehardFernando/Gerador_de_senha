# Gerador_de_senha

Este código é uma ferramenta para gerar senhas aleatórias. Ele usa JavaScript, CSS e HTML para criar uma interface do usuário que permite ao usuário especificar as configurações da senha, como o comprimento, se deve incluir letras maiúsculas, minúsculas, números e símbolos, e permite copiar a senha gerada para a área de transferência.

A função principal "generatePassword" usa as configurações fornecidas pelo usuário para gerar uma senha. Ele faz isso gerando caracteres aleatórios de acordo com as configurações do usuário e concatenando-os na variável "generatedPassword". Ele então retorna a senha gerada, cortando-a para o comprimento especificado pelo usuário.

As funções "getRamdomLower", "getRamdomUpper", "getRamdomNumber" e "getRamdomSymbol" são usadas para gerar caracteres aleatórios de acordo com o tipo de caractere especificado. Elas usam "String.fromCharCode" e "Math.random" para gerar caracteres aleatórios dentro do intervalo específico para cada tipo de caractere.

Eventos de clique são adicionados aos botões de "gerar senha" e "copiar" para executar as ações apropriadas quando esses botões são clicados.
