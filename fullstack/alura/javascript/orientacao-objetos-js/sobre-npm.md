
Para o Javascript interpretar classes de outros arquivos, é necessário importar utilizando os comandos import / export.

Além disso, para o console interpretar um ES module (Echma Script Modile), é necessário 


- O package.json é um arquivo de configuração do JavaScript.

- Para criar este módulo, podemos inserir o seguinte comando no terminal (indica-se utilizar o próprio terminal do VSCODE)

- npm init

    PS C:\Users\guspa\learn-projects\fullstack\alura\javascript\orientacao-objetos-js> npm init
    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.

    See `npm help init` for definitive documentation on these fields
    and exactly what they do.

    Use `npm install <pkg>` afterwards to install a package and
    save it as a dependency in the package.json file.

    Press ^C at any time to quit.
    package name: (orientacao-objetos) bytebank
    version: (1.0.0)
    description: Projeto do Bytebank para seus clientes
    entry point: (index.js)
    test command:
    git repository: learn-projects
    keywords:
    author: Gustavo de Matos Parizi
    license: (ISC)
    About to write to C:\Users\guspa\learn-projects\fullstack\alura\javascript\orientacao-objetos-js\package.json:

- após este processo no terminal, será criado um arquivo package.json na pasta.

- é necessário então, inserir o "type": "module" no arquivo, conforme abaixo:

    {
    "name": "bytebank",
    "version": "1.0.0",
    "description": "Projeto do Bytebank para seus clientes",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Gustavo de Matos Parizi",
    "license": "ISC",
    "type": "module"
    }