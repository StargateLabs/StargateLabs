<div align="center">

<h1>Stargate Labs</h1>

<p><em>Laboratorio privato: software di gestione in produzione, impianti hardware e strumenti di sicurezza.</em></p>

<img src="https://raw.githubusercontent.com/StargateLabs/StargateLabs/main/assets/shipexpress-logo.png?v=1" alt="ShipExpress Enterprise" width="360">

<br><br>

<img src="https://raw.githubusercontent.com/StargateLabs/StargateLabs/main/assets/lab.png?v=3" alt="Stargate Labs" width="760">

<br><br>

<a href="https://stargatelabs.github.io/StargateLabs/">Presentazione</a>
&nbsp;&middot;&nbsp;
<a href="https://stargatelabs.github.io/StargateLabs/index-en.html">Presentation (EN)</a>
&nbsp;&middot;&nbsp;
<a href="https://shipexpress.it">shipexpress.it</a>
&nbsp;&middot;&nbsp;
<a href="mailto:info@shipexpress.it">info@shipexpress.it</a>

</div>

<hr>

Laboratorio privato. Progetto software, impianti hardware e strumenti di sicurezza, con la stessa curiosità tecnica su ogni strato: dal ciclo di refrigerazione di un rig al ciclo di richiesta di un'API.

---

## I miei lavori

**ARGUS, piattaforma di security testing continuo.** Orchestratore che esegue ricognizione, DAST, SAST, analisi delle dipendenze, scansione dei segreti e fuzzing su target autorizzati. Code con BullMQ, dashboard Next.js, integrazione con DefectDojo e alert su Telegram. Aggiornato fino alla v0.2.0: TLS verify-full su Postgres e Redis, backup cifrati AES-256-GCM con ripristino verificato, rotazione e controllo dei certificati, logrotate con retention configurabile.

**ShipExpress, gestionale operativo per spedizioni.** Piattaforma multi-tenant in produzione: 36 corrieri integrati, magazzino, ordini, DDT e fatturazione elettronica, con code BullMQ e RAG per la ricerca interna. Il dettaglio è nella sezione dedicata qui sotto.

**TechDash, monitoraggio dell'hardware del rig.** Dashboard single-page con backend Python che legge i sensori della macchina: temperature CPU e GPU, carico, ventole, pompe e stato dei dischi, con avvisi su condensazione e gestione termica. Pensata per un impianto che gira sotto carico costante, quindi priorizza la lettura rapida e gli allarmi.

**Plugin SignalRGB e bridge LSC Battletron.** Integrazione per il controllo dell'illuminazione RGB con hardware LSC, con bridge verso il controller e configurazione automatica dei dispositivi.

**Setup criogenici su Intel Cryo.** Studio e messa a punto del raffreddamento TEC su CPU Intel di 10a e 13a generazione, con gestione della condensazione, curve di avvio sicuro e monitoraggio. Lo stato del progetto, le scelte tecniche e i riferimenti sono documentati nel repository TechDash.

---

## Cosa faccio

**Sviluppo software indipendente.** Progetto e mantengo piattaforme gestionali complete, dal modello dati all'interfaccia. Il prodotto principale è in produzione e serve aziende che spediscono ogni giorno. Se una funzione non regge il carico reale, non viene rilasciata.

**Bug hunting.** Cerco difetti in modo sistematico, non a caso. Il laboratorio applica la stessa disciplina del codice al software: test di sicurezza dedicati (isolamento tenant, hardening OAuth, proxy fail-closed, certificazione root), audit end-to-end di ogni API e controlli di accessibilità automatici. Ogni finding viene trasformato in test, così il difetto non torna.

**Hardware custom e cryocooling.** Progetto impianti di liquid cooling per PC, circuiti ad acqua, tubazioni, pompe, radiatori e monitoring. Il raffreddamento criogenico è l'estremo del percorso: portare una CPU sotto zero e tenerla stabile lì, con protezioni, curve di avvio sicuro e gestione della condensazione. Mi interessa la parte che nessuno vede ma che deve funzionare.

**Appassionato di tech e cyber.** Mi interessa tutto ciò che sta fra hardware e sicurezza: firmware, protocolli, reverse engineering, Linux, reti. L'hardware e il software non sono due hobby separati, sono lo stesso metodo di ragionamento applicato a cose diverse.

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

## Stack

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/StargateLabs/StargateLabs/main/assets/stack-dark.svg">
    <img src="https://raw.githubusercontent.com/StargateLabs/StargateLabs/main/assets/stack-light.svg" alt="Next.js, React, TypeScript, PostgreSQL, Prisma, Redis, Tailwind CSS, Zod, Python" width="760">
  </picture>
</p>

| Livello | Tecnologie |
|---|---|
| Applicazione | Next.js 16, React 19, TypeScript strict |
| Dati | PostgreSQL 17, Prisma 6 |
| Code e job | Redis 8, BullMQ |
| Interfaccia | Tailwind CSS 4 |
| Validazione | Zod 4 |
| Test | Vitest, Playwright |
| Hardware e sensori | Python |

## Come lavoro sul codice

**1.234 test automatici.** Unitari, di integrazione ed end-to-end con Playwright, eseguiti a ogni modifica. Il typecheck è separato dal build, così un errore di tipi blocca la pipeline senza mascherare i problemi di build.

**Isolamento multi-tenant verificato.** Ogni tenant ha routing dedicato per dominio, middleware di risoluzione e fallback esplicito a chiusura quando il tenant non è risolvibile. Il tenant non è un campo su una tabella: è un confine.

**Validazione ai bordi.** Zod su tutto l'input esterno, `unknown` al posto di `any`, query parametrizzate, transazioni quando un'operazione tocca più tabelle.

**Sicurezza operativa.** Autenticazione a due fattori sull'account root, audit delle operazioni critiche, rate limit, rilevamento brute-force e blacklist sessioni su Redis.

## Come lavoro sull'hardware

**Protezioni prima delle prestazioni.** Un impianto criogenico che non ha allarmi è un rischio, non un esperimento. Ogni progetto parte da sensori, soglie, avvio sicuro e gestione della condensazione, poi si ottimizza.

**Nessun segnale è attendibile.** Le misure vengono lette da più sensori indipendenti e validate a monte, perché un valore fuori scala spesso è un problema di acquisizione, non della macchina.

**Il freddo è un sistema, non un componente.** Peltier, CPU, RAM, GPU, alimentatore e scheda madre hanno limiti termici diversi. Portare sotto zero solo la CPU e ignorare il resto sposta il danno, non lo evita.

**Documentazione dal giorno zero.** Ogni impianto lascia uno schema, l'elenco dei componenti, le curve di avvio e i valori misurati. Un laboratorio serve anche a se stesso fra sei mesi.

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