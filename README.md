# LADESA Messages

Repositório de schemas e mensagens compartilhadas entre serviços LADESA.

## Estrutura

```
messages/
├── .changeset/                 # Configuração do Changesets
├── .github/workflows/          # CI/CD
├── timetable-generator/
│   └── v1/                     # Versão major da API
│       ├── CHANGELOG.md
│       ├── justfile
│       ├── json-schema/        # Definições TypeSpec
│       └── integrations/       # Código gerado
│           ├── typescript/     # Pacote npm
│           └── csharp/         # Pacote NuGet
├── justfile                    # Comandos globais
└── package.json                # Workspaces + Changesets
```

## Pré-requisitos

- [just](https://github.com/casey/just) - Command runner
- [Podman](https://podman.io/) - Container runtime

## Uso Rápido

```bash
# Build de um pacote específico
just tg1 build

# Ou diretamente
cd timetable-generator/v1 && just build
```

## Versionamento com Changesets

Este repositório usa [Changesets](https://github.com/changesets/changesets) para gerenciar versões.

### Fluxo de Trabalho

1. **Faça suas alterações** nos arquivos `.tsp`

2. **Crie um changeset** descrevendo a mudança:
   ```bash
   just changeset-add
   ```
   Isso abre um prompt interativo para:
   - Selecionar pacotes afetados
   - Escolher tipo de bump (patch/minor/major)
   - Escrever descrição da mudança

3. **Commit e push**:
   ```bash
   git add .
   git commit -m "feat: sua mudança"
   git push
   ```

4. **O CI/CD automaticamente**:
   - Cria um PR "Version Packages" acumulando changesets
   - Ao fazer merge do PR, publica npm + NuGet e cria tags

### Comandos Disponíveis

```bash
just                    # Lista todos os comandos
just changeset-add      # Adiciona um changeset (interativo)
just changeset-version  # Aplica versões pendentes
just changeset-status   # Mostra changesets pendentes
just build-all          # Build de todos os pacotes
just tg1 build          # Build do timetable-generator v1
```

## Arquitetura

```
┌─────────────────┐
│   TypeSpec      │  Fonte única de verdade
│   (.tsp files)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   JSON Schema   │  Schema intermediário
│   (schema.json) │
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌───────┐ ┌───────┐
│  npm  │ │ NuGet │  Pacotes publicados
└───────┘ └───────┘
```

## Pacotes

| Domínio | Versão | npm | NuGet |
|---------|--------|-----|-------|
| timetable-generator | v1 | `@ladesa/messages.timetable-generator.v1` | `Ladesa.Messages.TimetableGenerator.V1` |

## Adicionando Novo Schema

1. Crie a estrutura:
   ```bash
   mkdir -p novo-dominio/v1/{json-schema/src,integrations/{typescript/pkg/src,csharp/sln/Generated}}
   ```

2. Copie os arquivos base de `timetable-generator/v1`

3. Adicione o novo pacote em `package.json` (workspaces):
   ```json
   {
     "workspaces": [
       "timetable-generator/v1/integrations/typescript/pkg",
       "novo-dominio/v1/integrations/typescript/pkg"
     ]
   }
   ```

4. Atualize `.github/workflows/release.yml` para incluir o novo pacote

## Licença

MIT
