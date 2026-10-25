<p align="center"><img src="assets/hero.svg" alt="Stargate Labs — laboratorio e ricerca hardware" width="100%"></p>

# Software, sicurezza e hardware. Progettati insieme.

Stargate Labs è un laboratorio indipendente di sviluppo software e ricerca hardware. Realizzo applicazioni operative, strumenti di analisi e integrazioni per dispositivi con protocolli poco documentati. Il reverse engineering serve a comprendere il sistema e costruire un’interfaccia verificabile.

[Italiano](README.md) · [English](README.en.md) · [Portfolio IT](https://stargatelabs.github.io/StargateLabs/) · [Portfolio EN](https://stargatelabs.github.io/StargateLabs/index-en.html)

## SignalRGB · Hardware interoperability

<p><img src="assets/razer-logo.svg" alt="Razer" height="30"> &nbsp; <img src="assets/signalrgb-logo.svg" alt="SignalRGB" height="30"></p>

Un metodo da laboratorio: osservazione, analisi del protocollo, implementazione e test. Il codice pubblico è accompagnato da guide d’installazione e indicazioni sui limiti del collaudo.

| Progetto | Implementazione | Guide |
|---|---|---|
| [Stream Controller X](https://github.com/StargateLabs/signalrgb-razer-stream-controller-x) | Effetti SignalRGB sui 15 tasti, con un’immagine continua a 480 × 288 pixel. Trasporto RGB565, trasferimenti per tile e test sull’intero framebuffer. | [IT](https://github.com/StargateLabs/signalrgb-razer-stream-controller-x/blob/main/docs/INSTALL-IT.md) · [EN](https://github.com/StargateLabs/signalrgb-razer-stream-controller-x/blob/main/docs/INSTALL-EN.md) |
| [Key Light Chroma](https://github.com/StargateLabs/signalrgb-razer-key-light-chroma) | Controllo della sezione RGB attraverso il protocollo locale della lampada: configurazione TCP, frame UDP e recupero della connessione. 77 controlli automatici. | [IT](https://github.com/StargateLabs/signalrgb-razer-key-light-chroma/blob/main/docs/INSTALL-IT.md) · [EN](https://github.com/StargateLabs/signalrgb-razer-key-light-chroma/blob/main/docs/INSTALL-EN.md) |
| [LSC / Battletron](https://github.com/StargateLabs/signalrgb-lsc-battletron-bridge) | Bridge Rust per luci Wi-Fi LSC e Battletron: login QR, stream LAN autenticato, gestione dei dispositivi e recupero della configurazione. | [IT](https://github.com/StargateLabs/signalrgb-lsc-battletron-bridge/blob/main/docs/INSTALL-IT.md) · [EN](https://github.com/StargateLabs/signalrgb-lsc-battletron-bridge/blob/main/docs/INSTALL-EN.md) |

## Progetti e competenze

<p><img src="assets/shipexpress-logo.png" alt="ShipExpress" width="260"></p>

### ShipExpress

Piattaforma gestionale per spedizioni, ordini, magazzino e documenti. Architettura multi-tenant con database separati e integrazioni con i corrieri; strumenti di ricerca per consultare la documentazione operativa.

[Progetto](https://shipexpress.it)

### ARGUS

Orchestrazione di verifiche di sicurezza su target autorizzati: ricognizione, analisi statica e dinamica, dipendenze, credenziali esposte e API. I risultati dei diversi strumenti confluiscono in un flusso di analisi comune.

### ARA

Assistente vocale con trascrizione Whisper, sintesi Kokoro e memoria documentale locale. Il routing delle richieste e le conferme sulle operazioni sensibili mantengono esplicito il confine tra conversazione ed esecuzione.

### StargateCryo

Dashboard per controller Intel Cryo: regolazione, telemetria, diagnostica e storico. La build desktop integra clock Core Temp e sensori Thermaltake TF2/TF3; le soglie dipendono dall’impianto e i dati mancanti restano riconoscibili.

[Progetto](https://github.com/StargateLabs/dashboard-for-intel-cryo-cooling-technology)


### Sistemi di raffreddamento

Progettazione e collaudo di loop a liquido e sistemi termoelettrici. Il lavoro comprende acquisizione dei sensori, gestione della condensa, avvio controllato e documentazione dei limiti dell’hardware utilizzato.


## Metodo di lavoro

- **Comprendere prima di intervenire.** Ricostruisco flussi, formati e vincoli a partire da codice, traffico e comportamento osservabile. Le ipotesi restano distinte dalle prove.
- **Progettare il recupero.** Backup, riconnessioni, timeout e gestione dei dati mancanti fanno parte dell’implementazione, insieme alla funzionalità principale.
- **Verificare il comportamento.** Test di protocollo, controlli di regressione e prove sul dispositivo rispondono a domande diverse. La documentazione chiarisce quale verifica sostiene ogni risultato.

## Stack e documentazione

Rust · Python · TypeScript · React / Next.js · PostgreSQL · Redis / BullMQ · Docker / Linux · Vitest / Playwright · USB / HID / UART · TCP / UDP / BLE.

[Le informazioni tecniche precedenti sono conservate nell’archivio](docs/PROJECT-NOTES-2026-10.md): numeri di versione, funzionalità e misure mantengono il loro contesto storico. Le release recenti e i risultati verificati sono descritti nelle singole repository.


## Dettagli dei progetti già documentati

<details>
<summary><b>ShipExpress</b></summary>

Gestionale multi-tenant per spedizioni, magazzino, ordini, documenti e CRM. Ogni cliente dispone di dominio, database e ruoli separati. Le integrazioni comprendono confronto tariffe, creazione e tracciamento spedizioni, contrassegno, documenti di trasporto e fatturazione elettronica. Il magazzino gestisce giacenze, ubicazioni, movimenti, conteggi e imballaggi; gli ordini includono flussi di stato e picklist con lettura barcode. La ricerca documentale usa RAG e interrogazioni in linguaggio naturale.

Snapshot documentato 2026.2.5: 1.462 endpoint API, 357 modelli dati, 42 corrieri, 74 servizi, 8.896 test su 1.059 file. Sono i conteggi già pubblicati per quella versione, non una nuova misura della build attuale.

</details>

<details>
<summary><b>ARGUS</b></summary>

Il flusso di analisi coordina 17 scanner: 6 per ricognizione, 4 DAST, 1 SAST, 2 SCA, 2 per credenziali esposte, 1 per API e 1 per fuzzing. Le immagini degli strumenti sono fissate a versioni specifiche. Il sistema di agenti separa pianificazione ed esecuzione delle attività sui target autorizzati.

Snapshot già documentato v0.2.0: 14.071 righe TypeScript, 42 file di test, 71 endpoint API e 11 tabelle. I conteggi descrivono quella versione.

</details>

<details>
<summary><b>ARA</b></summary>

Assistente vocale con Whisper per la trascrizione, Kokoro per la sintesi e memoria documentale locale basata su TF-IDF. Il routing seleziona il percorso di gestione della richiesta; sette operazioni distruttive richiedono conferma. Nella descrizione originale il funzionamento è interamente locale, senza API esterne.

Snapshot già documentato: 29.537 righe Python. La latenza inferiore a 5 ms riportata nella presentazione precedente riguarda il router, non l’intera risposta vocale; non è stata rimisurata in questo aggiornamento.

</details>

<details>
<summary><b>StargateCryo e hardware</b></summary>

Il progetto documenta un controller Intel Cryo Gen 1 modificato abbinato a una cella TEC Gen 2. La versione desktop pubblicata integra Core Temp e sensori Thermaltake TF2/TF3. Configurazione, profili, log, storico, diagnostica e report restano descritti nella repository dedicata. I sorgenti e l’eseguibile desktop hanno provenienza e limiti dichiarati; durante la pubblicazione non sono state modificate le impostazioni del controller attivo.

Verifica di pubblicazione: 322 test dell’applicazione e 28 della libreria passati. Le vecchie conversioni percentuale/watt e le precedenti descrizioni OCP sono superate dalle note della release v2.9.0; non vengono riproposte come dati attuali.

</details>

**Stack della versione documentata:** Next.js 16, React 19, TypeScript strict, PostgreSQL 17, Prisma 6, Redis 8, BullMQ, Tailwind CSS 4, Zod 4, Vitest e Playwright. Rust e Python sono usati nei progetti hardware e negli strumenti di laboratorio.

## Statistiche GitHub e visite

<img src="assets/github-stats.svg" alt="GitHub public statistics — snapshot 25 October 2026" width="100%">

<p align="center"><a href="https://github.com/StargateLabs?tab=followers"><img src="https://img.shields.io/github/followers/StargateLabs?label=Followers&labelColor=0b100b&color=00e5a0&logo=github&style=flat-square" alt="GitHub followers"></a> &nbsp; <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FStargateLabs&label=VISITE+PROFILO&labelColor=0b100b&countColor=00e5a0&style=flat-square" alt="Visite profilo StargateLabs"></p>

Il contatore visite mantiene l’identificativo già utilizzato dal profilo. La scheda numerica è uno snapshot datato; i badge delle repository sono aggiornati dai rispettivi servizi. Il portfolio aggiorna i riepiloghi tramite l’API pubblica GitHub.

| Repository | Stars | Forks | Issue e PR aperte |
|---|---:|---:|---:|
| [dashboard-for-intel-cryo-cooling-technology](https://github.com/StargateLabs/dashboard-for-intel-cryo-cooling-technology) | ![Stars](https://img.shields.io/github/stars/StargateLabs/dashboard-for-intel-cryo-cooling-technology?style=flat-square&label=stars&color=7fe8f5) | ![Forks](https://img.shields.io/github/forks/StargateLabs/dashboard-for-intel-cryo-cooling-technology?style=flat-square&label=forks&color=b3f67c) | [GitHub](https://github.com/StargateLabs/dashboard-for-intel-cryo-cooling-technology/issues) |
| [signalrgb-lsc-battletron-bridge](https://github.com/StargateLabs/signalrgb-lsc-battletron-bridge) | ![Stars](https://img.shields.io/github/stars/StargateLabs/signalrgb-lsc-battletron-bridge?style=flat-square&label=stars&color=7fe8f5) | ![Forks](https://img.shields.io/github/forks/StargateLabs/signalrgb-lsc-battletron-bridge?style=flat-square&label=forks&color=b3f67c) | [GitHub](https://github.com/StargateLabs/signalrgb-lsc-battletron-bridge/issues) |
| [signalrgb-razer-key-light-chroma](https://github.com/StargateLabs/signalrgb-razer-key-light-chroma) | ![Stars](https://img.shields.io/github/stars/StargateLabs/signalrgb-razer-key-light-chroma?style=flat-square&label=stars&color=7fe8f5) | ![Forks](https://img.shields.io/github/forks/StargateLabs/signalrgb-razer-key-light-chroma?style=flat-square&label=forks&color=b3f67c) | [GitHub](https://github.com/StargateLabs/signalrgb-razer-key-light-chroma/issues) |
| [signalrgb-razer-stream-controller-x](https://github.com/StargateLabs/signalrgb-razer-stream-controller-x) | ![Stars](https://img.shields.io/github/stars/StargateLabs/signalrgb-razer-stream-controller-x?style=flat-square&label=stars&color=7fe8f5) | ![Forks](https://img.shields.io/github/forks/StargateLabs/signalrgb-razer-stream-controller-x?style=flat-square&label=forks&color=b3f67c) | [GitHub](https://github.com/StargateLabs/signalrgb-razer-stream-controller-x/issues) |
| [StargateLabs](https://github.com/StargateLabs/StargateLabs) | ![Stars](https://img.shields.io/github/stars/StargateLabs/StargateLabs?style=flat-square&label=stars&color=7fe8f5) | ![Forks](https://img.shields.io/github/forks/StargateLabs/StargateLabs?style=flat-square&label=forks&color=b3f67c) | [GitHub](https://github.com/StargateLabs/StargateLabs/issues) |


<details><summary><b>Contributi, linguaggi e continuità delle contribuzioni</b></summary>

<p><img src="https://github-readme-stats.vercel.app/api?username=StargateLabs&show_icons=true&hide_border=true&theme=transparent" alt="GitHub contribution statistics" height="160"> <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=StargateLabs&layout=compact&hide_border=true&theme=transparent" alt="Public repository languages" height="160"></p>

<p><img src="https://streak-stats.demolab.com?user=StargateLabs&hide_border=true" alt="GitHub contribution streak" height="160"></p>

[Grafico ufficiale delle contribuzioni](https://github.com/StargateLabs#year-list-container)

</details>

## Contatti

[info@shipexpress.it](mailto:info@shipexpress.it) · [shipexpress.it](https://shipexpress.it) · [GitHub](https://github.com/StargateLabs)

<sub>Razer, SignalRGB, Intel e gli altri marchi appartengono ai rispettivi titolari. Progetti indipendenti, senza affiliazione dichiarata.</sub>

<p><img src="https://skillicons.dev/icons?i=nextjs,react,ts,postgres,prisma,redis,tailwind,py,linux,docker,git&amp;theme=dark" alt="Project technology logos"></p>
