La ricerca interna usa RAG: i documenti vengono indicizzati e interrogati in
linguaggio naturale, non per parole chiave. Serve perché nessuno ricorda in
quale ticket ha già visto quel problema.

La parte AI è più larga del RAG. Nel codice ci sono route per hybrid search,
query RAG, apprendimento, e un sistema di agent skills con playbook, valutazione
e verifica, eseguito anche in schedulazione. C'è anche il pacchetto `ai` nelle
dipendenze.