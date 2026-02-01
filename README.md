# LADESA Messages

Repositório de schemas e mensagens compartilhadas entre serviços LADESA.

## Estrutura

```
messages/
└── timetable-generator-v1/     # Mensagens do gerador de grade horária v1
    ├── justfile                # Automação de build
    ├── json-schema/            # Definições TypeSpec (fonte única)
    │   ├── src/                # Arquivos .tsp
    │   └── lib/                # JSON Schema gerado
    └── integrations/           # Código gerado por linguagem
        ├── typescript/         # Pacote npm
        └── csharp/             # Pacote NuGet
```

## Pré-requisitos

- [just](https://github.com/casey/just) - Command runner
- [Podman](https://podman.io/) - Container runtime

## Uso

### Build completo

```bash
cd timetable-generator-v1
just build
```

### Build apenas schema

```bash
just build-schema
```

### Build apenas integrações

```bash
just build-integrations
```

### Limpar artefatos

```bash
just clean
just clean-images  # Remove imagens de container
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
│  TS   │ │  C#   │  Código gerado
│ types │ │classes│
└───────┘ └───────┘
```

## Pacotes gerados

| Linguagem | Pacote | Versão |
|-----------|--------|--------|
| TypeScript | `@ladesa/messages.timetable-generator.v1` | 0.0.1 |
| C# | `Ladesa.Messages.TimetableGenerator.V1` | 0.0.1 |

## Desenvolvimento

### Modificando schemas

1. Edite os arquivos `.tsp` em `json-schema/src/`
2. Execute `just build` para regenerar tudo
3. Os arquivos em `integrations/*/` serão atualizados

### Adicionando nova linguagem

1. Crie `integrations/<lang>/generator/Containerfile`
2. Crie `integrations/<lang>/pkg/` com estrutura do pacote
3. Adicione recipe no `justfile`

## Licença

MIT
