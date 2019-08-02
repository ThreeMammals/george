FROM migrate/migrate

FROM node:10-slim

COPY --from=0 . .

# WORKDIR /

COPY . .

# ENTRYPOINT ["/migrate"]
# ENTRYPOINT ["/bin/sh"]

CMD [ "npm", "run", "docker-migrate-up" ]