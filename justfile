set dotenv-load := true

# Lista comandos disponíveis
default:
    @just --list

# ========================================
# Changesets (Versionamento)
# ========================================

# Adiciona um changeset (interativo)
changeset-add:
    podman run --rm -it \
        -v "{{ justfile_directory() }}":/workspace \
        -w /workspace \
        docker.io/oven/bun:1.1.45 \
        bunx changeset

# Aplica versões dos changesets pendentes
changeset-version:
    podman run --rm \
        -v "{{ justfile_directory() }}":/workspace \
        -w /workspace \
        docker.io/oven/bun:1.1.45 \
        bunx changeset version

# Mostra status dos changesets
changeset-status:
    podman run --rm \
        -v "{{ justfile_directory() }}":/workspace \
        -w /workspace \
        docker.io/oven/bun:1.1.45 \
        bunx changeset status

# ========================================
# Build (todos os pacotes)
# ========================================

# Build de todos os pacotes
build-all:
    just timetable-generator/v1/build

# ========================================
# Atalhos para pacotes específicos
# ========================================

# Alias para timetable-generator v1
tg1 *args:
    just timetable-generator/v1/{{ args }}
