# Étape 1 : Build de l'application
FROM node:20-alpine AS build

WORKDIR /app

# Copie les fichiers sources
COPY package*.json ./
COPY . .

# Installation des dépendances et build de l'app
RUN npm install
RUN npm run build

# Étape 2 : Serveur NGINX pour héberger l'app statique
FROM nginx:alpine

# Copie des fichiers buildés dans nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Optionnel : remplace la config nginx par défaut si besoin
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose le port 80
EXPOSE 80

# Lancement de nginx
CMD ["nginx", "-g", "daemon off;"]
