FROM node:20.18.0-alpine3.19

#creamos un nuevo directorio donde estara nuestra aplicacion
WORKDIR /app


#todos los archivos package se copiaran en la carpeta app, por eso es el './'
COPY package*.json ./



COPY . .
#el primer punto indica que copiaremos todos los archivos y el segundo punto indica que copiaremos

RUN npm install 


EXPOSE 5173 4173

# Para producción, ejecuta npm run build y luego npm run preview
CMD sh -c "npm run dev & npm run build && npm run preview"



# QUEDA PENDIENTE SEPARAR LOS dockerfile de desarrollo y produccion PARA QUE CADA UNO EJECUTE EL COMANDO CORRESPONDIENTE
# PARA DESARROLLO npm run dev y para produccion npm run build y npm run preview

