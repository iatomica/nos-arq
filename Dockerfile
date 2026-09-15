# ==========================================
# Etapa 1: Construcción (Build Stage)
# ==========================================
FROM node:22-alpine AS build

WORKDIR /app

# Instalar dependencias necesarias
COPY package.json package-lock.json ./
RUN npm ci

# Copiar el código fuente y compilar
COPY . .
RUN npm run build

# ==========================================
# Etapa 2: Producción con Nginx ligero (Runtime Stage)
# ==========================================
FROM nginx:1.27-alpine AS production

# Configuración optimizada de Nginx para Single Page Apps (SPA) y compresión Gzip
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar bundle compilado desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Healthcheck para orquestadores (Docker Swarm, Kubernetes, Coolify, Portainer)
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Comando de arranque
CMD ["nginx", "-g", "daemon off;"]
