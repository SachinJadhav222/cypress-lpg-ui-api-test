FROM cypress/base:10
COPY package.json package.json
RUN npm i

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./cypress-api.json ./cypress-api.json
COPY ./cypress-ui.json ./cypress-ui.json

CMD ["npm","test"]