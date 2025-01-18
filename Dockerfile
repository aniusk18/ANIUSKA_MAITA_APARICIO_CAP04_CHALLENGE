# Usa una imagen base oficial de Node.js 18
FROM node:18-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Instala create-next-app globalmente
RUN npm install -g create-next-app

# Copia el archivo package.json y package-lock.json
COPY package.json package-lock.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para iniciar el servidor de desarrollo
CMD ["npm", "run", "dev"]