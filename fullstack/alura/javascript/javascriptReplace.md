https://www.alura.com.br/artigos/javascript-replace-manipulando-strings-e-regex

# Formação Front-end

Em JavaScript o String replace é utilizado com frequência para fazer desde simples substituições em Strings até complexas mudanças com expressões regulares. Seu uso é simples como variavel.replace('valor', 'substituicao');

# Substituindo palavras com String replace

Se queremos pegar os números brutos do usuário e converter para a versão com a formatação, ou mascara de campo. Uma solução ultra direta para resolver o problema, pode ser pegarmos o valor que queremos modificar e aplicar a função .replace das strings em cima dele.

Caso tenhamos interesse de manipular um CPF por exemplo, podemos pegar o valor do CPF puro, e falarmos que queremos convertê-lo para a sua versão amigável para o usuário:

  const CPFSemFormatacao = 'cpf é 25684677037'

  const CPFFormatado = CPFSemFormatacao.replace('25684677037', '256.846.770-37') 

  console.log(CPFFormatado) 

A função .replace recebe como parâmetros o padrão que estamos procurando e como segundo parâmetro o que queremos colocar no lugar

Nesse caso, nós estamos prevendo o futuro e criando um código assumindo que o usuário possui detereminado valor de CPF. Para esse uso o replace pode soar bem estranho, mas caso nosso objetivo seja restringir alguma palavra, como um palavrão, o uso acima cai como uma luva:

  const frase = 'Frase com uma palavra-feia'

  frase.replace('palavra-feia', '********') 

  console.log(frase) // O retorno seria 'Frase com uma ********')

# Substituindo todas as ocorrências com o apoio das Regex

A ideia anterior de excluir palavras de um texto funciona super bem, mas se a palavra aparecer duas vezes no texto, começaremos a ter problemas:

  const frase = 'Frase com uma palavra-feia e tem outra palavra-feia no final'

  const fraseAtualizada = frase.replace('palavra-feia', '********') 

  console.log(fraseAtualizada) // O retorno seria "Frase com uma ******** e tem outra palavra-feia no final"

Repare que na segunda ocorrência da palavra que queremos remover da frase a função replace não fez nada. Isso ocorre porque quando o primeiro parâmetro da função replace é uma string, ela sempre busca a primeira ocorrência no texto base para o valor buscado. Para ter algo mais dinâmico vamos precisar recorrer ao poder das Expressões Regulares, que em resumo nos ajudam a encontrar padrões em texto de uma forma muito mais completa.

Para resolver nosso problema anterior, basta trocarmos o primeiro parâmetro passado para o replace de 'palavra-feia' para /palavra-feia/g. O g no final da regex indica que queremos buscar de forma global no texto base.

  const frase = 'Frase que começa com um palavra-feia e tem outra palavra-feia no final'

  const fraseAtualizada = frase.replace(/palavra-feia/, '********') 

  console.log(fraseAtualizada) // "Frase que começa com um ******** e tem outra ******** no final"

# Regex: expressões regulares

Muitos desenvolvedores, quando precisam trabalhar com Regex (regular expressions), costumam pensar "Eu sempre aprendo quando vou usar e esqueço logo em seguida". No dia a dia realmente na maioria dos casos nós não usamos Regex e se formos utilizar talvez valha mais a pena uma lib de validação como a Yup ou Joi. De todo caso, vamos dar uma relembrada que irá ser essencial para conseguirmos lidar com o caso do CPF aqui do post:

As Regex procuram padrões, a forma mais direta é escrever a própria palavra que você deseja encontrar:

/palavra/

o mesmo funciona para números:

/12345679810/

Porém, se você quiser algo mais abrangente com caracteres especiais e tudo mais, onde a ordem não importe, será necessário definir um range de caracteres:

[A-Z0-9!-]

E ainda no exemplo anterior, para pegar mais de um caracter é necessário declarar quantas ocorrências você procura:

[A-Z0-9!-]{3}

Também é possível simplificar, para capturar somente caracteres alfa numéricos você pode usar:

\w

Já para capturar caracteres referentes a digitos você pode usar:

\d

E caso você queira capturar grupos dentro de um match de regex para poder trabalhar melhor como veremos nos próximos exemplos, podemos utilizar os parenteses:

(\d{4})-(\d{4})

Existem outros casos como utilizar a "?" para alguma parte da regex ser opcional, os marcadores de começo "^" e fim "$", mas isso tudo renderia uma série de posts ou mesmo um curso.

Caso queira ir mais a fundo, vou deixar esse guia de bolso que eu sempre uso e se quiser aprender pra valer do 0 mesmo como trabalhar com expressões regulares, vou deixar como dica esse curso de regex.

guia de bolso: https://www.regular-expressions.info/refquick.html
curso regex: https://www.alura.com.br/curso-online-expressoes-regulares

# Resgatando group matches com a função replace

Agora que relembramos um pouco mais sobre as expressões regulares, podemos usar a ideia de procurar padrões encaixando em grupos e usar no segundo parâmetro do .replace o "$" seguido do número correspondente ao grupo na ordem em que a Regex foi escrita:

  const cpf = '12345679810'

  const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")

  console.log(cpfFormatado) // O retorno seria 256.846.770-37

  Caso você queira fazer algo mais complexo e somente passar uma string resgatando os grupos não seja o suficiente, você também pode passar uma função no lugar da string no segundo parâmetro:

  const cpf = '12345679810'

  const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, function(matchDaRegex, grupo1, grupo2, grupo3, grupo4) {
    console.log(arguments) // é uma forma de visualizar todos os parâmetros que essa função está recebendo, o numero de grupos pode variar e assim fica fácil de debugar.
    return `${grupo1}.${grupo2}.${grupo3}-${grupo4}`;
  })

  console.log(cpfFormatado) // O retorno seria 256.846.770-37

# Dúvidas comuns em manipulação de strings com Regex

Capturando conteúdo entre abertura e fechamento de uma tag. Tome cuidado, nesses casos. O HTML é uma estrutura que é impossível de ser parseada de forma perfeita via regex, sempre prefira usar a API do DOM para manipular HTML ou uma lib como o JSDOM para converter um texto para a estrutura de arvore e facilitar a extração de conteúdo.

    - https://regex101.com/r/HKNt2s/8

Dando match em slugs

    - https://regex101.com/r/KFgVfF/2

Lidando com hexadecimais

    - https://regex101.com/r/KFgVfF/1

Trabalhando com URLs

    - https://regex101.com/r/KFgVfF/3

# Bibliotecas para manipulação de Strings

Existe uma lib muito popular para lidar com datas chamada MommentJS https://momentjs.com/, é necessário ter alguns cuidados quando for utiliza-la então deixo a dica desse outro link que talvez tenha alguma alternativa que possa lhe atender tão bem quanto https://github.com/you-dont-need/You-Dont-Need-Momentjs;
Se você quiser lidar com mascaras e formatação (ajuda no cpf, telefone, cnpj...), deixo essa lib aqui https://www.npmjs.com/package/mask-js;

Libs super bacanas para lidar com validação por schema: Yup ou Joi;
Não é o foco do post, mas lidar com formatação e operações em cima de dinheiro pode ser algo bem complicado https://sarahdayan.github.io/dinero.js/;

Caso você queira garantir que um input do usuário esteja realmente seguro para ser salvo na sua base de dados, é importante usar uma lib que faça o papel de remover possíveis conteúdos que gerariam injeção de scripts como essa aqui https://github.com/apostrophecms/sanitize-html;

Dica: https://regex101.com
site para testar e manipular o regex

