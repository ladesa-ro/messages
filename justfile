set dotenv-load := true

# Lista comandos disponíveis
default:
    @just --list

# ========================================
# Setup
# ========================================

# Instala dependências e configura hooks
setup:
    bun install
    lefthook install

# ========================================
# Linting & Formatting
# ========================================

# Verifica lint e formatação
lint:
    bunx biome check .

# Corrige lint e formatação automaticamente
lint-fix:
    bunx biome check --write .

# Formata código
format:
    bunx biome format --write .

# Formata código .NET
format-dotnet:
    dotnet format

# ========================================
# Changesets (Versionamento)
# ========================================

# Adiciona um changeset (interativo)
changeset-add:
    bunx changeset

# Aplica versões dos changesets pendentes
changeset-version:
    bunx changeset version

# Aplica versões e sincroniza pacotes não-npm
version:
    just changeset-version
    just _sync-dotnet-versions

# Sincroniza versões de pacotes .NET com seus package.json
[private]
_sync-dotnet-versions:
    #!/usr/bin/env bash
    set -euo pipefail
    for pkg_json in $(find . -path "*/dotnet/package.json" -type f); do
        dotnet_dir=$(dirname "$pkg_json")
        version=$(bun -e "console.log(require('$pkg_json').version)")
        for csproj in $(find "$dotnet_dir" -name "*.csproj" -type f); do
            echo "Sincronizando $csproj para versão $version"
            sed -i "s|<Version>.*</Version>|<Version>$version</Version>|g" "$csproj"
        done
    done

# Mostra status dos changesets
changeset-status:
    bunx changeset status

# ========================================
# Build
# ========================================

# Build de todos os pacotes
build-all:
    just apis/timetable-generator-v1/build

# ========================================
# CI
# ========================================

# Roda todas as verificações do CI localmente
ci: lint
    just build-all

# ========================================
# Atalhos
# ========================================

# Alias para timetable-generator v1
tg1 *args:
    just apis/timetable-generator-v1/{{ args }}
