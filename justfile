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
    podman build -t {{ changeset_image }} -f .docker/Containerfile.changeset .

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

# Aplica versões e sincroniza pacotes não-npm
version:
    just changeset-version
    just _sync-dotnet-versions

# Sincroniza versões de pacotes .NET com seus package.json
[private]
_sync-dotnet-versions:
    podman run --rm \
        -v "{{ justfile_directory() }}":/workspace \
        -w /workspace \
        {{ changeset_image }} \
        sh -c 'for pkg_json in $(find /workspace -path "*/dotnet/package.json" -type f); do \
            dotnet_dir=$(dirname "$pkg_json"); \
            version=$(bun -e "console.log(require(\"$pkg_json\").version)"); \
            for csproj in $(find "$dotnet_dir" -name "*.csproj" -type f); do \
                echo "Sincronizando $csproj para versão $version"; \
                sed -i "s|<Version>.*</Version>|<Version>$version</Version>|g" "$csproj"; \
            done; \
        done'

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
    just apis/timetable-generator-v1/build

# ========================================
# Atalhos para pacotes específicos
# ========================================

# Alias para timetable-generator v1
tg1 *args:
    just apis/timetable-generator-v1/{{ args }}
