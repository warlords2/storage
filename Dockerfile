FROM quay.io/keycloak/keycloak

ENV KEYCLOAK_IMPORT realm-export.json

COPY ${KEYCLOAK_IMPORT} /opt/keycloak/data/import/

RUN ./opt/keycloak/bin/kc.sh import --file /opt/keycloak/data/import/${KEYCLOAK_IMPORT}


ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]