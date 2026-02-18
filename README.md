# messages

Repositório de schemas e mensagens compartilhadas dos serviços LADESA. Cada subpacote em `apis/` define mensagens usando [TypeSpec](https://typespec.io/) e gera JSON Schema, disponibilizado via GitHub Releases.

## Estrutura

```
messages/
├── .changeset/          # Controle de versão (changesets)
├── .github/workflows/   # CI: build + release
├── package.json         # Root workspace
└── apis/
    └── timetable-generator-v1/
        ├── package.json     # Dependências TypeSpec
        ├── tspconfig.yaml   # Configuração do emitter
        └── src/             # Arquivos .tsp
```

## Desenvolvimento

### Pré-requisitos

- [Bun](https://bun.sh/)

### Compilar localmente

```bash
bun install
bun run build
```

O schema gerado fica em `apis/<subpacote>/tsp-output/schema.json`.

### Adicionar changeset

Após fazer alterações, registre um changeset para versionamento:

```bash
bunx changeset
```

## Releases

O CI publica automaticamente o `schema.json` como ativo em GitHub Releases ao mergear a PR "Version Packages" criada pelo changesets.

### URL do schema

```
https://github.com/ladesa-ro/messages/releases/download/<subpacote>%2Fv<VERSION>/schema.json
```

Exemplo:

```
https://github.com/ladesa-ro/messages/releases/download/timetable-generator-v1%2Fv0.0.2/schema.json
```

## Adicionar novo subpacote

1. Crie `apis/<nome>/package.json` com dependências TypeSpec e script `build`
2. Crie `apis/<nome>/tspconfig.yaml` configurando o emitter
3. Crie `apis/<nome>/src/main.tsp` com seus modelos
4. Execute `bun install && bun run build` para validar
