while inotifywait -e close_write ./src; 
  do npx relay-compiler --src ./src \
                        --schema ./src/schema.graphql \
                        --artifactDirectory ./__generated__/relay \
                        --noFutureProofEnums; 
done;
