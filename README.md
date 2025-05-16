<p align="center">
  <img src="https://avatars.githubusercontent.com/u/28929274?s=200&v=4" alt="Rocketseat" />
  <hr>
  <h1 align="center">Desafio Fundamentos do Node.js</h1>
  <p align="center">Projeto desenvolvido durante a formação <strong>Node.js</strong> da Rocketseat.</p>
</p>

<p align="center">
  <img src="https://img.shields.io/github/repo-size/felipe-dr/challenge-fundamentals-api-node?style=for-the-badge&color=4e5acf" alt="Repo size" />
  <a aria-label="Last Commit" href="https://github.com/felipe-dr/challenge-fundamentals-api-node/commits/main">
    <img src="https://img.shields.io/github/last-commit/felipe-dr/challenge-fundamentals-api-node?style=for-the-badge&color=4e5acf" alt="Last commit on GitHub" />
  </a>
  <!-- <img src="https://img.shields.io/badge/license-MIT-4e5acf?style=for-the-badge" alt="License" /> -->
  <img src="https://img.shields.io/badge/status-concluído-green?style=for-the-badge" alt="Status" />
</p>

<br>

<p align="center">
  <a target="_blank" href="https://nodejs.org/en">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&label=Node.js&message=JS&logo=Node.js" alt="Node.js" />
  </a>
  <a target="_blank" href="https://csv.js.org/parse/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&label=CSV Parse&message=JS" alt="CSV.parse" />
  </a>
</p>

## Índice

<ol>
  <li><a href="#sobre">Sobre</a></li>
  <li><a href="#funcionalidades">Funcionalidades</a></li>
  <li><a href="#como-executar">Como executar</a></li>
  <li><a href="#tecnologias">Tecnologias</a></li>
  <li><a href="#autor">Autor</a></li>
</ol>

## Sobre

API desenvolvida em Node.js do Desafio 01, capaz de gerenciar tarefas, marcá-las como completa e importá-las por meio de um arquivo CSV.

## Funcionalidades

### Obrigatórias

- [x] Criar tarefa
- [x] Listar tarefas
- [x] Listar tarefa(s) por filtro de busca em `title` ou `description`
- [x] Editar tarefa por `id`
- [x] Deletar tarefa por `id`
- [x] Marcar tarefa como completa por `id`
- [x] Importação de tarefas por um arquivo `csv`

### Adicionais

- [x] Listar tarefa por `id`
- [x] Implementar mensagens de log no serviço de upload do `csv`
- [x] Validar se `title` e `description` das rotas `POST` e `PUT` estão presentes no `body` da requisição
- [x] Nas rotas que recebem o `/:id`, além de validar se o `id` existe no banco de dados, retornar a resposta com uma mensagem informando que o registro não existe.

### Futuras

- Criar e reutilizar através de classes, `status code` e mensagens nos retornos das respostas.

## Como executar

### Localmente

Se estiver utilizando outro gerenciador de pacotes, basta trocar o `pnpm` por `npm`, `yarn`, etc.

#### API

```bash
pnpm dev
```

#### Upload de tarefas

> **DEPENDÊNCIAS !**
>
> É necessário executar previamente a API conforme indicado no passo anterior, para que seja possível efetuar um `POST` em `/tasks`.

```bash
pnpm upload:csv
```

## Tecnologias

- [Node.js](https://nodejs.org/en)
- [CSVParse](https://csv.js.org/parse/)

> **DICA !**
>
> Todas as demais dependências utilizadas podem ser visualizados acessando o [package.json](./package.json).

## Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/felipe-dr">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/62888625?s=96&v=4" width="100px;" alt="Avatar do autor" />
        <br />
        <sub>
          <b>Felipe DR</b>
        </sub>
      </a>
      <br />
      <a href="mailto:felipe.corp7@gmail.com" title="E-mail">📩</a>
    </td>
  </tr>
</table>
