set dotenv-load := true

# Lista comandos disponíveis
default:
    @just --list

# ========================================
# Imagens de Container
# ========================================

changeset_image := "localhost/ladesa-messages-changeset:latest"

# Builda imagem para changesets
changeset-build-image:
    podman build -t {{ changeset_image }} -f .github/Containerfile.changeset .

# ========================================
# Changesets (Versionamento)
# ========================================

# Adiciona um changeset (interativo)
changeset-add:
    podman run --rm -it \
        -v "{{ justfile_directory() }}":/workspace \
        -w /workspace \
        {{ changeset_image }} \
        bunx changeset

# Aplica versões dos changesets pendentes
changeset-version:
    podman run --rm \
        -v "{{ justfile_directory() }}":/workspace \
        -w /workspace \
        {{ changeset_image }} \
        bunx changeset version

# Mostra status dos changesets
changeset-status:
    podman run --rm \
        -v "{{ justfile_directory() }}":/workspace \
        -w /workspace \
        {{ changeset_image }} \
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
