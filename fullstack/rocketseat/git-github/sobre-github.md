# Sobre o GITHUB

- para criar o seu próprio repositório, com o arquivo README.md, deve-se criar um repositório com o mesmo nome do usuário;
- é possível colaborar com o código de outros usuários, quando você faz isso e insere um commit, o usuário receberá uma pull request;
- quando você inicia um pull request, você recebe um fork - que faz um clone do projeto do usuário terceiro e cria no seu perfil um repositório deste clone;
- é possível deletar este fork no settings > danger zone > delete this repository;
- cuidado com o nome do repositorio par não ocorrer de deletar o arquivo errado;

# Configurando a chave SSH 

- conexão com a sua máquina pessoal e o github
- ir no pergil; settings;
- ir em SSH and GPG keys;
    - ir no terminal / bash
    - ssh-keygen -t rsa -b 4096 -C "gusparizi@gmail.com"
    - apertar enter até finalizar
    - buscar a chave
        - cd ~/.ssh/
        - cat ~/.ssh/id_rsa.pub
    - copiar o código chave
    - ir no github, SSH key, add new
    - inserir um título, que irá representar a máquina da chave
    - colar a chave e finalizar
    - adicionar a chave ao gerenciador local SSH Agent
        - no terminal / bash
        - $ eval `sss-agent -s`
        - > agent pid 861
        - $ ssh-add ~/.ssh/id_rsa
    - linkar o repositório remoto com o local
    
