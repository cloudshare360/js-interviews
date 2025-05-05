# Dockerfile
FROM mcr.microsoft.com/devcontainers/universal:2

# Unset NVS/NVSudo functions system-wide
RUN echo "unset nvs nvsudo 2>/dev/null || true" > /etc/profile.d/unset-nvs.sh