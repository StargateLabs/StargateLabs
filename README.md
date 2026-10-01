<p align="center">
  <img src="https://raw.githubusercontent.com/StargateLabs/StargateLabs/main/assets/logo.png" alt="Stargate Labs" width="560" height="364">
</p>

<p align="center">
  <a href="https://shipexpress.it"><img src="https://raw.githubusercontent.com/StargateLabs/StargateLabs/main/assets/badge-site-light.svg" alt="shipexpress.it" height="28"></a>
  <a href="mailto:info@shipexpress.it"><img src="https://raw.githubusercontent.com/StargateLabs/StargateLabs/main/assets/badge-mail-light.svg" alt="info@shipexpress.it" height="28"></a>
</p>

Laboratorio privato. Sviluppo software, hardware custom e sicurezza, con la stessa curiosità tecnica su ogni strato: dal ciclo di refrigerazione di un rig al ciclo di richiesta di un'API.

---

## Cosa faccio

**Sviluppo software indipendente.** Progetto e mantengo piattaforme gestionali complete, dal modello dati all'interfaccia. Il prodotto principale è in produzione e serve aziende che spediscono ogni giorno. Se una funzione non regge il carico reale, non viene rilasciata.

**Bug hunting.** Cerco difetti in modo sistematico, non a caso. Il laboratorio applica la stessa disciplina del codice al software: test di sicurezza dedicati (isolamento tenant, hardening OAuth, proxy fail-closed, certificazione root), audit end-to-end di ogni API e controlli di accessibilità automatici. Ogni finding viene trasformato in test, così il difetto non torna.

**Hardware custom e cryocooling.** Progetto impianti di liquid cooling per PC, circuiti ad acqua, tubazioni, pompe, radiatori e monitoring. Il raffreddamento criogenico è l'estremo del percorso: portare una CPU sotto zero e tenerla stabile lì, con protezioni, curve di avvio sicuro e gestione della condensazione. Mi interessa la parte che nessuno vede ma che deve funzionare.

**Appassionato di tech e cyber.** Mi interessa tutto ciò che passa fra hardware e sicurezza: firmware, protocolli, reverse engineering, Linux, reti. Nessuna delle due cose (il software e l'hardware) è un hobby separato dall'altra, sono lo stesso modo di ragionare applicato a cose diverse.

---

## ShipExpress

**[shipexpress.it](https://shipexpress.it)**

Piattaforma multi-tenant per la gestione operativa delle spedizioni. Ogni cliente ha un dominio proprio, un database separato e una gerarchia di utenti con permessi per ruolo.

| Area | Cosa fa |
|---|---|
| Spedizioni | Confronto tariffe tra corrieri, creazione, tracciamento, contrassegno, consegna con foto e firma |
| Magazzino | Prodotti, categorie, giacenze, ubicazioni, movimenti, conteggi, imballaggi |
| Ordini | Ordini cliente, flusso di stato, picklist con lettura dei codici a barre |
| Documenti | DDT e fatturazione elettronica |
| Integrazioni | Corrieri, marketplace e gestionali esterni |

Il listino tariffe è configurabile per tenant, con regole su zona, peso e supplementi. Il confronto tra corrieri ordina i costi dal più basso e segnala quando il peso volumetrico supera quello reale.

**36 corrieri integrati.** 13 provider nativi con adapter dedicato (BRT, DHL, DPD, GLS, UPS, FedEx, TNT, SDA, Poste Italiane, InPost, EasyParcel, SpediamoPro, SpedisciOnline) e 24 adapter REST generici che coprono gli altri operatori. Il tracciamento usa i webhook quando il corriere li espone e polling periodico per gli altri.

---

## Come lavoro sul codice

**1.234 test automatici.** Unitari, di integrazione ed end-to-end con Playwright, eseguiti a ogni modifica. Il typecheck è separato dal build, così un errore di tipi blocca la pipeline senza mascherare i problemi di build.

**Isolamento multi-tenant verificato.** Ogni tenant ha routing dedicato per dominio, middleware di risoluzione e fallback esplicito a chiusura quando il tenant non è risolvibile. Il tenant non è un campo su una tabella: è un confine.

**Validazione ai bordi.** Zod su tutto l'input esterno, `unknown` al posto di `any`, query parametrizzate, transazioni quando un'operazione tocca più tabelle.

**Sicurezza operativa.** Autenticazione a due fattori sull'account root, audit delle operazioni critiche, rate limit, rilevamento brute-force e blacklist sessioni su Redis.

---

## Stack

| Livello | Tecnologie |
|---|---|
| Applicazione | Next.js 16, React 19, TypeScript |
| Dati | PostgreSQL, Prisma 6 |
| Code e job | Redis, BullMQ |
| Interfaccia | Tailwind CSS 4 |
| Validazione | Zod 4 |
| Test | Vitest, Playwright |

| Metrica | Valore |
|---|---|
| Corrieri integrati | 36 |
| Test automatici | 1.234 |
| Dipendenze di produzione | 67 |

---

## Contatti

Il codice di ShipExpress è privato. Per una demo, per un'integrazione o per parlare di un progetto hardware:

- Sito: [shipexpress.it](https://shipexpress.it)
- Email: [info@shipexpress.it](mailto:info@shipexpress.it)