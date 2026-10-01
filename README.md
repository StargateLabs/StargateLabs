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

Il gestionale che uso con aziende che spediscono ogni giorno. Multi-tenant: ogni cliente ha dominio suo, database suo, ruoli suoi.

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

**StargateCryo** · controller criogenico

23.286 righe di Rust. Legge i sensori da HWiNFO64 e AIDA64, controlla il TEC via seriale con PID, e rileva la condensa dal margine rugiada.

6 canali di allarme, 5 regole di default, 3 profili PID. Se la pompa si ferma, il TEC si riduce da solo al 50%.

</td>
</tr>
</table>

<details>
<summary><b>Plugin SignalRGB e bridge LSC Battletron</b></summary>
<br>

Plugin per l'illuminazione RGB su hardware LSC, con bridge verso il controller e
configurazione automatica dei dispositivi. Include anche un plugin per il Razer
Stream Controller X, dove il lavoro vero è stato reverse engineering del
protocollo.

<p align="center">
<a href="https://github.com/StargateLabs/signalrgb-razer-stream-controller-x">
<img src="https://raw.githubusercontent.com/StargateLabs/signalrgb-razer-stream-controller-x/main/assets/product.png" alt="Razer Stream Controller X" width="300">
<br>
<b>signalrgb-razer-stream-controller-x</b>
</a>
</p>

Il deck ha uno schermo 480 × 288 dietro a 15 tasti, e il plugin standard di
SignalRGB per display non lo regge: passa dall'overlay composited e ci mette il
logo al centro. Il percorso riscritto legge il canvas dell'effetto e scrive
pixel per pixel in RGB565, quindi l'immagine arriva pulita.

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

## ShipExpress

<p align="center">
<img src="https://raw.githubusercontent.com/StargateLabs/StargateLabs/main/assets/shipexpress-logo.png?v=2" alt="ShipExpress Enterprise" width="340">
<br>
<a href="https://shipexpress.it"><b>shipexpress.it</b></a>
</p>

Piattaforma multi-tenant per la gestione operativa delle spedizioni. Ogni
cliente ha un dominio proprio, un database separato e una gerarchia di utenti
con permessi per ruolo.

| Area | Cosa fa |
|---|---|
| Spedizioni | Confronto tariffe tra corrieri, creazione, tracciamento, contrassegno, consegna con foto e firma |
| Magazzino | Prodotti, categorie, giacenze, ubicazioni, movimenti, conteggi, imballaggi |
| Ordini | Ordini cliente, flusso di stato, picklist con lettura dei codici a barre |
| Documenti | DDT e fatturazione elettronica |
| Integrazioni | Corrieri, marketplace e gestionali esterni |

I 36 corrieri sono 13 provider nativi con adapter dedicato (BRT, DHL, DPD, GLS,
UPS, FedEx, TNT, SDA, Poste Italiane, InPost, EasyParcel, SpediamoPro,
SpedisciOnline) e 24 adapter REST generici per gli altri. Il tracciamento usa i
webhook quando il corriere li espone, e polling periodico per chi non li ha.

La ricerca interna usa RAG: i documenti vengono indicizzati e interrogati in
linguaggio naturale, non per parole chiave. Serve perché nessuno ricorda in
quale ticket ha già visto quel problema.

## Sul codice

L'isolamento multi-tenant è verificato, non dichiarato. Routing per dominio,
middleware di risoluzione, e un fallback che chiude se il tenant non è
risolvibile. Un tenant è un confine, non una colonna.

Tutto l'input esterno passa da Zod. `unknown` invece di `any`. Query
parametrizzate. Transazioni quando un'operazione tocca più tabelle.

Root ha due fattori, le operazioni critiche lasciano traccia, e ci sono rate
limit, rilevamento brute-force e blacklist sessioni su Redis.

Il ciclo non cambia mai: trovo il difetto, e il difetto diventa un test. Test
di sicurezza dedicati (isolamento tenant, hardening OAuth, proxy fail-closed,
certificazione root), audit end-to-end di ogni API, accessibilità in automatico.

## Sull'hardware

Prima le protezioni, poi le prestazioni. Un impianto criogenico senza allarmi è
un rischio, non un esperimento. Quindi si parte da sensori, soglie, avvio
sicuro e condensazione gestita. L'ottimizzazione arriva dopo.

Nessun segnale è attendibile. Più sensori indipendenti e validazione a monte:
un valore fuori scala è quasi sempre un problema di acquisizione, not della
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

## Contatti

Il codice di ShipExpress è privato. Per una demo, per un'integrazione o per
parlare di un progetto hardware:

- Sito: [shipexpress.it](https://shipexpress.it)
- Email: [info@shipexpress.it](mailto:info@shipexpress.it)
