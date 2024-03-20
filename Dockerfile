FROM node:12.18.3-alpine3.12

COPY ./index-for-deployment.js ./
COPY ./index-for-job.js ./

CMD [ "node",  "./index-for-deployment.js" ]