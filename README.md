<p align="center">
<img src="https://raw.githubusercontent.com/StargateLabs/StargateLabs/main/assets/lab.png?v=4" alt="Stargate Labs" width="760">
<br><br>
<a href="https://stargatelabs.github.io/StargateLabs/"><b>Presentazione</b></a>
&nbsp;&nbsp;·&nbsp;&nbsp;
<a href="https://stargatelabs.github.io/StargateLabs/index-en.html">Presentation (EN)</a>
&nbsp;&nbsp;·&nbsp;&nbsp;
<a href="https://shipexpress.it">shipexpress.it</a>
&nbsp;&nbsp;·&nbsp;&nbsp;
<a href="mailto:info@shipexpress.it">info@shipexpress.it</a>
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=480&lines=Software+in+produzione;Hardware+che+non+perdona;Ogni+difetto+diventa+un+test" alt="Software in produzione, hardware che non perdona, ogni difetto diventa un test">
</p>

<p align="center">
  <a href="https://shipexpress.it"><img src="https://img.shields.io/badge/shipexpress.it-0A0A0A?logo=googlechrome&logoColor=white" alt="shipexpress.it"></a>
  <a href="mailto:info@shipexpress.it"><img src="https://img.shields.io/badge/info%40shipexpress.it-D14836?logo=gmail&logoColor=white" alt="info@shipexpress.it"></a>
  <a href="https://github.com/StargateLabs"><img src="https://img.shields.io/badge/StargateLabs-181717?logo=github&logoColor=white" alt="StargateLabs su GitHub"></a>
</p>

<p align="center">
  <a href="https://github.com/StargateLabs?tab=followers"><img src="https://img.shields.io/github/followers/StargateLabs?label=Followers&logo=github" alt="Follower GitHub"></a>
  <img src="https://komarev.com/ghpvc/?username=StargateLabs&label=Visite+profilo" alt="Visite profilo">
</p>

<details>
<summary><b>Indice</b></summary>
<br>

- [Stargate Labs](#stargate-labs)
- [Progetti](#progetti)
- [ShipExpress](#shipexpress)
- [Sul codice](#sul-codice)
- [Sull'hardware](#sullhardware)
- [Stack](#stack)
- [GitHub Stats](#github-stats)
- [Contatti](#contatti)

</details>

---

## Stargate Labs

Infrastruttura, sicurezza, sistemi. La stessa mania la metto nei componenti: loop
ad acqua su misura, impianti criogenici su CPU Intel, temperature che non
dovrebbero esistere.

Costruisco il software che li fa girare. Gestionali in produzione, strumenti di
security testing, dashboard che leggono ogni sensore. E un motore di ricerca con
RAG, perché la documentazione che nessuno legge non serve a nessuno.

Niente si dà per scontato. Ogni numero lo misuro, ogni difetto diventa un test.

<table>
<tr>
<td width="50%" valign="top">

**ShipExpress** · gestionale, in produzione

ShipExpress 2026.2.5. 1.462 endpoint API, 357 modelli su Prisma, 42 corrieri, 8.896 test, 67 dipendenze di produzione. Multi-tenant: ogni cliente ha dominio suo, database suo, ruoli suoi.

Il pezzo dove si litiga è il listino. Prezzi per zona, peso e supplementi, e la differenza fra peso reale e volumetrico, che è l'errore che l'azienda scopre solo quando legge la fattura.

</td>
<td width="50%" valign="top">

**ARGUS** · security testing, v0.2.0

17 scanner orchestrati: 6 recon, 4 DAST, 1 SAST, 2 SCA, 2 secrets, 1 API, 1 fuzz. Ogni tool con Docker image pinned, ogni scan su target autorizzati.

14.071 righe di TypeScript, 42 file di test, 71 endpoint API, 11 tabelle. Agent AI che esegue missioni autonome con due modelli: uno per pianificare, uno per eseguire.

</td>
</tr>
<tr>
<td valign="top">

**ARA** · assistente vocale

29.537 righe di Python. Whisper per la voce in ingresso, Kokoro per quella in uscita, e un router che distingue task da conversazione in meno di 5 millisecondi.

7 azioni distruttive richiedono conferma umana. La memoria è un vault RAG in TF-IDF, tutto in locale, zero API esterne.

</td>
<td valign="top">

**StargateCryo** · controller TEC per cryocooling

23.286 righe di Rust. Legge i sensori da HWiNFO64 e AIDA64, controlla il TEC via seriale con PID, e misura il margine di condensa.

Lavora sul controller, non sul processore: nessun socket, nessun chipset, nessun modello di CPU nel codice. Quindi va su Intel, su AMD, e su qualsiasi CPU montabile che il controller riesca a pilotare.

6 canali di allarme, 5 regole di default, 3 profili PID con setpoint e potenza propria. Se la pompa si ferma, il TEC si riduce da solo al 50%.

</td>
</tr>
</table>

<details>
<summary><b>Plugin SignalRGB per Razer Stream Controller X</b></summary>
<br>

Il plugin standard di SignalRGB per display non regge lo schermo di questo
deck: passa dall'overlay composited e ci mette il logo al centro. Il percorlo
riscritto legge il canvas dell'effetto e scrive pixel per pixel in RGB565,
quindi l'immagine arriva pulita a 480 × 288.

<p align="center">
<a href="https://github.com/StargateLabs/signalrgb-razer-stream-controller-x">
<img src="https://raw.githubusercontent.com/StargateLabs/signalrgb-razer-stream-controller-x/main/assets/product.png" alt="Razer Stream Controller X" width="300">
<br>
<b>signalrgb-razer-stream-controller-x</b>
</a>
</p>

<table>
<tr>
<td width="50%" valign="top">

**Il protocollo**

Protocollo Loupedeck, WebSocket su seriale, handshake `HTTP/1.1 101`. I comandi che servono sono quattro: `FRAMEBUFF` per i pixel di un rettangolo, `DRAW` per mostrarlo, `VERSION`, `SERIAL`.

Un tasto da 96 × 96 costa 18.459 byte, quindi il deck intero sono 277 KB.

</td>
<td width="50%" valign="top">

**Le misure**

Il ciclo di refresh del device è fisso a circa 420 ms e non scala con i byte, ma il device accoda: 8 frame in coda danno 12,8 fps contro i 2,3 di un frame alla volta.

Il limite è a monte. SignalRGB scrive a 2,3-2,5 MB/s, pyserial sugli stessi byte sullo stesso cavo arriva a 11,5 MB/s. Per questo il plugin ottiene 3,6-4,6 fps e non di più.

</td>
</tr>
</table>

Documentazione in italiano e inglese nel repo, con la curva di costo per
scrittura e i limiti verificati.

</details>


<details>
<summary><b>StargateCryo: controller Gen 1 modificato su TEC Gen 2</b></summary>
<br>

Il software è nato su un controller Gen 1 modificato, potenziato, che gira su
una TEC Gen 2. Non è un supporto "Gen 1 e Gen 2" generico: le soglie sono
specifiche di quell'hardware, e il codice lo dice in chiaro.

<p align="left">

<b>Il tetto che mancava</b>

Il firmware accetta una percentuale, non dei watt, e il 100% su questo
controller vale circa 230 W. Ma il Gen 1 porta 200 W. Con la percentuale al
massimo si chiedevano circa 230 W, il 115% del tetto: il modulo segnalava OCP,
il firmware tagliava, e quei watt erano sprecati perché il freddo non arrivava.

Nel codice non c'era nessun tetto in watt, solo la percentuale che non sa
nulla dell'hardware. Ora c'è: 200 W dichiarati come costante, con la radice del
difetto scritta accanto.

<b>La finestra di cinque gradi</b>

Il controller a regime sta a 30 °C. Fino a 35 °C è normale. A 40 °C si sciolgono
le guaine dei fili, e quelle sono già state sostituite una volta.

<table>
<tr><th>Range</th><th>Lettura</th><th>Comportamento</th></tr>
<tr><td>fino a 35 °C</td><td>regime normale</td><td>verde</td></tr>
<tr><td>36 - 37 °C</td><td>allarme</td><td>giallo</td></tr>
<tr><td>da 38 °C</td><td>rischio di danno</td><td>rosso, riduzione fino a zero</td></tr>
<tr><td>40 °C</td><td>guaine sciolte</td><td>cut-off</td></tr>
</table>

La guardia non è un interruttore che aspetta i 38 °C per reagire, perché
lascierebbe 35-37 °C senza protezione, e sono esattamente i gradi in cui il
danno inizia.

<b>Cambiare hardware</b>

Se il controller cambia, cambiano i numeri: potenza massima, watt al 100% della
percentuale, soglie della guardia. Sono costanti dichiarate in `running.rs`, con
il motivo per cui esistono scritto accanto, perché il bug torna se non le vedi.

</details>

<details>
<summary><b>TechDash: monitoraggio hardware del rig</b></summary>
<br>

Dashboard single-page con backend Python che legge i sensori della macchina:
temperature CPU e GPU, carico, ventole, pompe e stato dei dischi, con avvisi su
condensazione e gestione termica.

Pensata per un impianto che gira sotto carico costante: priorizza la lettura
rapida e gli allarmi, non i grafici.

</details>

## ShipExpress

<p align="center">
<img src="https://raw.githubusercontent.com/StargateLabs/StargateLabs/main/assets/shipexpress-logo.png?v=2" alt="ShipExpress Enterprise" width="340">
<br>
<a href="https://shipexpress.it"><b>shipexpress.it</b></a>
</p>

Versione 2026.2.5. Il router espone 1.462 endpoint e il modello dati ha 357
entità, che coprono spedizioni, magazzino, fatturazione, CRM e ciclo di vita del
cliente.

Ogni cliente ha un dominio proprio, un database separato e una gerarchia di
utenti con permessi per ruolo.

| Area | Cosa fa |
|---|---|
| Spedizioni | Confronto tariffe tra corrieri, creazione, tracciamento, contrassegno, consegna con foto e firma |
| Magazzino | Prodotti, categorie, giacenze, ubicazioni, movimenti, conteggi, imballaggi |
| Ordini | Ordini cliente, flusso di stato, picklist con lettura dei codici a barre |
| Documenti | DDT e fatturazione elettronica |
| Integrazioni | Corrieri, marketplace e gestionali esterni |

**42 corrieri, 74 servizi.** I principali hanno un adapter dedicato (BRT, DHL
Express, DPD, GLS, UPS, FedEx, TNT, SDA, Poste Italiane, InPost, Aramex, CEVA,
DB Schenker, Pony Express e altri), gli altri passano da API REST. Il
tracciamento usa i webhook quando il corriere li espone, e polling periodico per
chi non li ha.

La ricerca interna usa RAG: i documenti vengono indicizzati e interrogati in
linguaggio naturale, non per parole chiave. Serve perché nessuno ricorda in
quale ticket ha già visto quel problema.

La parte AI è più larga del RAG. Nel codice ci sono route per hybrid search,
query RAG, apprendimento, e un sistema di agent skills con playbook, valutazione
e verifica, eseguito anche in schedulazione. C'è anche il pacchetto `ai` nelle
dipendenze.

## Sul codice

L'isolamento multi-tenant è verificato, non dichiarato. Routing per dominio,
middleware di risoluzione, e un fallback che chiude se il tenant non è
risolvibile. Un tenant è un confine, non una colonna.

Tutto l'input esterno passa da Zod. `unknown` invece di `any`. Query
parametrizzate. Transazioni quando un'operazione tocca più tabelle.

Root ha due fattori, le operazioni critiche lasciano traccia, e ci sono rate
limit, rilevamento brute-force e blacklist sessioni su Redis.

**8.896 test** raccolti da vitest, su 1.059 file. Il ciclo non cambia mai: trovo
il difetto, e il difetto diventa un test. Test di sicurezza dedicati (isolamento
tenant, hardening OAuth, proxy fail-closed, certificazione root), audit
end-to-end di ogni API, accessibilità in automatico.

## Sull'hardware

Prima le protezioni, poi le prestazioni. Un impianto criogenico senza allarmi è
un rischio, non un esperimento. Quindi si parte da sensori, soglie, avvio
sicuro e condensazione gestita. L'ottimizzazione arriva dopo.

Nessun segnale è attendibile. Più sensori indipendenti e validazione a monte:
un valore fuori scala è quasi sempre un problema di acquisizione, non della
macchina.

Il freddo è un sistema. Peltier, CPU, RAM, GPU, alimentatore e scheda madre
hanno limiti termici diversi, e raffreddare solo la CPU sposta il danno invece
di evitarlo.

Ogni impianto lascia schema, componenti, curve di avvio e valori misurati. Se
fra sei mesi non lo capisco da solo, ho sbagliato il progetto.

## Stack

<table>
<tr>
<td align="center" width="33%"><b>Next.js 16</b><br>React 19<br>TypeScript strict</td>
<td align="center"><b>PostgreSQL 17</b><br>Prisma 6<br>Redis 8 · BullMQ</td>
<td align="center"><b>Zod 4</b><br>Tailwind CSS 4<br>Vitest · Playwright</td>
</tr>
</table>

<p align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,react,ts,postgres,prisma,redis,tailwind,py,linux,docker,git&theme=dark" alt="Next.js, React, TypeScript, PostgreSQL, Prisma, Redis, Tailwind CSS, Python, Linux, Docker, Git">
</p>

<details>
<summary><b>Dettaglio dello stack</b></summary>
<br>
<table>
<tr><th>Livello</th><th>Tecnologie</th></tr>
<tr><td>Applicazione</td><td>Next.js 16, React 19, TypeScript strict</td></tr>
<tr><td>Dati</td><td>PostgreSQL 17, Prisma 6</td></tr>
<tr><td>Code e job</td><td>Redis 8, BullMQ</td></tr>
<tr><td>Interfaccia</td><td>Tailwind CSS 4</td></tr>
<tr><td>Validazione</td><td>Zod 4</td></tr>
<tr><td>Test</td><td>Vitest, Playwright</td></tr>
<tr><td>Hardware e sensori</td><td>Python</td></tr>
</table>
</details>

## GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=StargateLabs&show_icons=true&hide_border=true" alt="Statistiche GitHub StargateLabs" height="160">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=StargateLabs&layout=compact&hide_border=true" alt="Linguaggi principali StargateLabs" height="160">
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com?user=StargateLabs&hide_border=true" alt="Serie contributi StargateLabs" height="160">
  <img src="https://komarev.com/ghpvc/?username=StargateLabs" alt="Visite profilo StargateLabs">
</p>

## Contatti

Il codice di ShipExpress è privato. Per una demo, per un'integrazione o per
parlare di un progetto hardware:

- Sito: [shipexpress.it](https://shipexpress.it)
- Email: [info@shipexpress.it](mailto:info@shipexpress.it)
