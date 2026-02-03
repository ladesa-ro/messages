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

# Corrige lint e formatação
fix:
    bunx biome check --write .

# ========================================
# Changesets (Versionamento)
# ========================================

# Adiciona um changeset
changeset:
    bunx changeset

# Aplica versões e sincroniza pacotes
version:
    bunx changeset version
    @just _sync-dotnet-versions

# Mostra status dos changesets
changeset-status:
    bunx changeset status

[private]
_sync-dotnet-versions:
    #!/usr/bin/env bash
    set -euo pipefail
    for pkg_json in $(find . -path "*/dotnet/package.json" -type f); do
        dotnet_dir=$(dirname "$pkg_json")
        version=$(bun -e "console.log(require('$pkg_json').version)")
        for csproj in $(find "$dotnet_dir" -name "*.csproj" -type f); do
            echo "Syncing $csproj to version $version"
            sed -i "s|<Version>.*</Version>|<Version>$version</Version>|g" "$csproj"
        done
    done

# ========================================
# Build
# ========================================

# Build de todos os pacotes
build:
    just apis/timetable-generator-v1/build

# ========================================
# CI
# ========================================

# Roda verificações do CI localmente
ci: lint build

# ========================================
# Atalhos
# ========================================

# timetable-generator v1
tg1 *args:
    just apis/timetable-generator-v1/{{ args }}
