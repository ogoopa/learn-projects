# GIT

- GIT - gerenciador do projeto, do historico e das alterações no projeto, na máquina local
- GITHUB - gerenciador para repositório remoto

* VCS - version control system
* RCS - revision control system

Sistema Distribuído

Git, Mercurial, Bazaar, Darcs

* duplica (clona) o repositório completo
* se qualquer servidor morrer, qualquer repositório de clientes ou colaboradores pode ser copiado de volta para o servidor.
* cada clone é de fato um backup completo de todos os dados
* clientes usam o estado mais recente dos arquivos
* GIT - open source
* commit - viagem no tempo
    - histórico de alterações do código
    - voltar para qualquer ponto da história
* controlar o fluxo de novas funcionalidades
    - ramificações, branchs
    - varios devs no mesmo projeto
    - análise e resolução de conflitos

* utilizar sempre o GitBash
* git --version no cmd ou no gitbash

# Configurando o Git

no cmd:

    C:\Users\guspa>git config --global user.name "Gustavo de Matos Parizi"

    C:\Users\guspa>git config --global user.email "gusparizi@gmail.com"

se for necessário substituir essa informação com nome diferente para um projeto específico você pode rodar o comando sem a opção --global dentro daquele projeto

# Editor

geralmente se usa o VIM
para usar o VSCode, inserir o código

git config --global core.editor "code -w"

# Ver configurações

git config --list

git config --global color.ui true

# Onde as variáveis ficam armazenadas

cat /etc/gitconfig

no Windows, o arquivo .gitconfig estará no diretório $HOME que é C:|Users|$USER

# iniciando

pwd <!-- ver o local onde esta o usuário -->
cd git-aula <!-- cd = chdir = change directory, para mudar de diretório -->
ls <!-- listar -->
git init <!-- inicializar diretório vazio -->
cd .. <!-- volta diretorio anterior -->


irá aparecer um diretório escondido intitulado .git

este diretório pode ser acessado pelo bash através de "ls -a"

para listar todos os arquivos neste diretório .git

ls -al .git

# git log

utilizado para verificar o ultimo commit realizado, irá mostrar o autor, a data e o local

    - pode ser utilizado, para uma visualização mais curta um: 
    git log --oneline

    - se houverem muitos commits e você quiser trazer por exemplo os 5 últimos:
    git log -n 5

    - para trazer commits a partir da data x:
    git log --since=2020-10-01

    - para trazer commits até a data x:
    git log --until=2020-10-01

    - para filtrar por autor:
    git log --author=Gustavo

    - para utilizar regular expression global (rep)
    git log --grep="init"
    git log --grep="bugfix"

# criando um arquivo

git init <!-- init / clone - inicia um repositório local (-> Working Directory) --> 
git add <!-- joga o arquivo pra uma outra área e o prepara para o repositório (-> Stage Area) --> 
commit -- <!-- joga o arquivo para o repositório local (-> Local Repository) -->

exemplo:
    vim file.txt

    (
        para inserir um texto: 
        aperte i
        insira o texto
        aperte ":"
        digite wq
        enter
    )

git add . <!-- prepara o arquivo -->
git commit -m "initial commit" <!-- mensagem -->

# Git Workflow

os arquivos são salvos na Working Area
é necessário dar o add para os arquivos irem para a Stage Area
para os arquivos irem para o repositório local, é necessário dar o commit
no repositório, todas as versões do arquivo ficam salvas, cada vez que você dá um commit

# HASH Values (SHA-1)

checksum - converte dados em numero

- garante a integridade dos dados


exemplo

Snapshot A -> 

6fd78a0cf

parent: null
author: Gustavo
message:
Initial Commit

Snapshot B ->

8d9e0a9f4

parent: 6fd78a0cf
author: Gustavo
message:
Second Commit

Snapshot C ->

56dec34a2

parent: 8d9e0a9f4
author: Gustavo
message:
Third Commit


# HEAD 

# Fazendo um commit

exemplo: 
    
    - cd .. <!-- verifica o diterório anterior -->
    - pwd <!-- mostra posição atual no diretório -->

        /c/Users/guspa 

    - mkdir git-head <!-- cria um diretório com o nome git-head -->
    - cd git-head <!-- acessa o diretório git-head -->
    - git init <!--  -->
    - touch file.txt <!-- cria um arquivo -->
    - clear
    - git add file.txt <!-- ponto importante, leva o arquivo para a STAGE AREA -->
    - git commit -m "initial commit" <!-- ponto mais importante, leva o arquivo para o Repository-->

        $ git commit -m "initial commit"
        [master (root-commit) 3b64fa6] initial commit
        1 file changed, 0 insertions(+), 0 deletions(-)
        create mode 100644 file.txt

    - touch file2.txt <!-- adicionar outro arquivo -->
    - git log <!-- puxa os arquivos e exibe em log -->
    - cat .git/HEAD <!-- exibe o que está na HEAD -->
        ref: refs/heads/master <!-- retorno, acessa onde está a HEAD -->

    - cat .git/refs/heads/master <!-- busca dentro da HEAD, o que está, o retorno é o SHA-1 do ultimo commit, ou da posição do head -->

        99b1243918a940f0e41b1b81e39e0adfc611937f <!-- nome do arquivo codificado que está na HEAD -->

    - ls lista os arquivos (WORKING AREA)
    - git status <!-- mostra arquivos não rastreados na STAGE AREA -->
    - git rm -cached file3.txt <!-- remove o arquivo, se estiver na stage area -->

# Modificando o arquivo

- vim file.txt <!-- acessa o arquivo -->
- i <!-- iniciar edição do arquivo -->
- esc <!-- tecla esc, volta para o bash -->
- :wq <!-- : write e quit, encerra e salva o arquivo -->

- git add file.txt
-  git status

    On branch master
    Changes to be committed:
    (use "git restore --staged <file>..." to unstage)
            modified:   file.txt

- git commit -m "change file2"

vim README.md <!-- cria um arquivo chamado README.md -->

- git add . <!-- atenção, adiciona tudo  o que está na Working Area para a Stage Area -->
- git add README.md <!-- melhor prática, adiciona somente o arquivo desejado -->
- git add *.md <!-- adiciona tudo o que for extensão .md, serve para qualquer extensão -->

# Verificando modificações

- git diff <!-- mostra todas as alterações dos arquivos commitados -->
- se não foram criados no repositório, você não consegue ver as modificações
- git diff --staged <!-- acessa a modificação da Stage Area (pode ser usado o cached no lugar do staged) -->
- git restore -- staged <!-- restaura o arquivo da Stage Area para a Working Area -->
- git rm <!-- remove o arquivo, não aparece na lixeira, vai direto para a stage area, porém continua no repositorio -->
- git rm -rf git-aula <!-- remove a pasta criada -->

# Renomeando arquivos

- git mv file3.txt file4.txt

# Movendo o arquivo

mkdir sub <!-- cria uma pasta chamada sub no diretório -->
- git mv README.md sub/README.md

# Desfazendo mudanças

Se a mudança ainda está na Working Area
- git restore file4.txt

# Trazendo de volta do staged

- git restore --staged .
- git reset HEAD .

# Corrigir o último commit

- git commit --amend -m "corrige README.md"
- git rm <!-- remove -->

# Recuperando arquivos

copiar o inicio do numero hexadecimal, no commit (git log)

- git checkout 5627b6b2fb5af7 -- file2.txt

# Removendo um arquivo não rastreado

- git clean -n
- git clean -f

# Revertendo um commit

o git status deve estar limpo de tarefas

- git revert 

# Adicionando e verificando alterações

- git diff --color-words
mostra em outra cor somente o trecho que foi alterado 

# Commits com atalho

- git commit -am <!-- funciona igual o git add, porém para arquivos já rastreados -->

# Ver modificações em diversos pontos 


- git show <!-- diferentemente do git diff, que mostra a Stage Area e a Working Area, o git show exibe o que está no Repository -->
- git show --color-words 

# Ignorando arquivos e diretórios indesejados

- cat .gitignore

# Retirar tudo o que tem no cache

- git rm -r --cached

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

# linkar o repositório remoto com o local

- criar um repositório local, colocar as descrições em  description, selecionar se é public (todos visualizam) ou private (vc escolhe quem visualiza);
- adicionar manualmente (o passo a passo pode ser visto também no github);

    - cd <repository>
    - git init
    - git add .
    - git commit -m ":tada: first commit" 
        - git comi
    
    e após:
    
    - git remote add origin git@guthub.com:ogudma/demo.git
    - git remote -v <!-- verifica os repositórios existentes na nuvem -->
    - git branch -M main <!-- criando a branch (ramificação do git) main -->
    - git push -u origin main
        - yes
        - enter

# modificar o arquivo local e enviar para o remoto

   - git push

# modificar o arquivo remoto e puxar para o repositório local

   - git pull

# entendendo o histórico remoto

   + = adição de código
   - = remoção de código
    
   pelo histórico você acessa cada commit por sua chave e consegue verificar todos os commits realizados, navegando por cada ponto do código
    
# corrigindo conflito de merge

   os conflitos de merge ocorrem quando alterações em um arquivo são feitas paralelamente nos reposit

   - git config --global pull.rebase false <!-- resolver problemas de pull -->
   
   - vim <arquivo> <!-- para verificar se o arquivo tem merge -->
   - arrastar a parta para o VSCODE
   - o C que aparece no canto do arquivo é de conflict 
    
   pelo VSCODE:
   
   - corrigir o problema, o código irá gerar uma opção para aceitar o código local ou remoto
   - salva

   no terminal / bash:
   
   - verificar pelo vim <arquivo>
   - git commit -am "fixing merge"

   - git pull
   - git push

# Procurando novos repositórios no Github

   - no campo de pesquisa, selecionar no campo o user:ogudma e retirar, para que ele possa pesquisar em todo o github
   - é possível pesquisar por:
        - repositórios
        - codigos
        - commits
        - issues
        - discussões
        - packages
        - marketplace
        - topics
        - wikis
        - users
        
   - é possível também filtrar por linguagem (HTML, JS, CSS, etc)
   - é possível corrigir erros de códigos e realizar um pull request
   - é intuitivo
   - a busca também serve para buscar nos próprios repositórios
    
# os conteúdos podem ser salvos com estrela e fork

   - pode ser feito um fork, no github <!-- interessante se você está colaborando com o conteúdo -->
   - você pode atribuir uma estrela <!-- interessante se você precisa salvar um conteúdo que deseja ver depois -->

# clones

   - para cliar um clone, ir na tecla verde 'CODE'
   - ir em SSH
   - copiar o conteúdo do campo 

   no terminal / bash
    
   - git clone <colar o conteúdo> <!-- interessante se você precisasr utilizar o projeto que encontrou no github -->
   - git log --oneline <!-- conferir -->
   
   
    

