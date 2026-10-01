<div align="center">

<h1>Stargate Labs</h1>

<p>Laboratorio privato. Progetto software, impianti hardware e strumenti di sicurezza.</p>

<img src="https://raw.githubusercontent.com/StargateLabs/StargateLabs/main/assets/lab.png?v=4" alt="Stargate Labs" width="760">

<br>

<img src="https://raw.githubusercontent.com/StargateLabs/StargateLabs/main/assets/shipexpress-logo.png?v=1" alt="ShipExpress Enterprise" width="260">

<br>

[Presentazione](https://stargatelabs.github.io/StargateLabs/)
&nbsp;·&nbsp;
[Presentation (EN)](https://stargatelabs.github.io/StargateLabs/index-en.html)

[shipexpress.it](https://shipexpress.it)
&nbsp;·&nbsp;
[info@shipexpress.it](mailto:info@shipexpress.it)

</div>

---

Costruisco software che gira per gente vera, cerco difetti per mestiere, e
raffreddando macchine sotto carico. È la stessa disciplina ripetuta: capire
cosa deve sopravvivere, metterci un test o un allarme, e non dare per scontato
che un numero letto sia giusto.

| | | | |
|:---|:---|:---|:---|
| **36**<br>corrieri integrati | **1.234**<br>test automatici | **13**<br>provider nativi | **24**<br>adapter REST |

## Cosa c'è dentro

<table>
<tr>
<td width="50%" valign="top">

**ShipExpress** · gestionale, in produzione

Il gestionale che uso con aziende che spediscono ogni giorno. Multi-tenant: ogni cliente ha dominio suo, database suo, ruoli suoi.

Il pezzo dove si litiga è il listino. Prezzi per zona, peso e supplementi, e la differenza fra peso reale e volumetrico, che è l'errore che l'azienda scopre solo quando legge la fattura.

</td>
<td width="50%" valign="top">

**ARGUS** · security testing, v0.2.0

Orchestratore di security testing continuo: ricognizione, DAST, SAST, analisi delle dipendenze, scansione dei segreti, fuzzing, sempre su target autorizzati.

BullMQ per le code, Next.js per la dashboard, DefectDojo per i finding, Telegram per gli alert. Ho chiuso la parte che spesso si salta: TLS verify-full su Postgres e Redis, backup AES-256-GCM con ripristino provato e non solo scritto, certificati che ruotano, logrotate con retention.

</td>
</tr>
<tr>
<td valign="top">

**TechDash** · hardware del rig

Dashboard con backend Python che legge i sensori della macchina: CPU, GPU, carico, ventole, pompe, dischi.

Allarmi su condensazione, che su un impianto sotto carico costante è la variabile che uccide.

</td>
<td valign="top">

**Setup criogenici** · Intel Cryo

Raffreddamento TEC su CPU Intel di 10a e 13a generazione, con gestione della condensazione, curve di avvio sicuro e monitoraggio.

Stato del progetto, scelte tecniche e riferimenti sono nel repository TechDash. Il plugin SignalRGB con bridge LSC Battletron copre invece l'illuminazione RGB su hardware LSC.

</td>
</tr>
</table>

## ShipExpress

**[shipexpress.it](https://shipexpress.it)**

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

**36 corrieri integrati.** 13 provider nativi con adapter dedicato (BRT, DHL,
DPD, GLS, UPS, FedEx, TNT, SDA, Poste Italiane, InPost, EasyParcel,
SpediamoPro, SpedisciOnline) e 24 adapter REST generici per gli altri. Il
tracciamento usa i webhook quando il corriere li espone, e polling periodico
per chi non li ha.

## Sul codice

**1.234 test automatici.** Non è un numero da mettere in scheda: è la rete che
tiene quando cambio qualcosa alle 23.

L'isolamento multi-tenant è verificato, non dichiarato. Routing per dominio,
middleware di risoluzione, e un fallback che chiude se il tenant non è
risolvibile. Un tenant non è una colonna, è un muro.

Tutto l'input esterno passa da Zod. `unknown` invece di `any`. Query
parametrizzate. Transazioni quando l'operazione tocca più tabelle.

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
un valore fuori scala è quasi sempre un problema di acquisizione, non della
macchina.

Il freddo è un sistema. Peltier, CPU, RAM, GPU, alimentatore e scheda madre
hanno limiti termici diversi, e raffreddare solo la CPU sposta il danno invece
di evitarlo.

Ogni impianto lascia schema, componenti, curve di avvio e valori misurati. Se
fra sei mesi non lo capisco da solo, ho sbagliato il progetto.

## Stack

<table>
<tr><td align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/StargateLabs/StargateLabs/main/assets/stack-dark.svg">
    <img src="https://raw.githubusercontent.com/StargateLabs/StargateLabs/main/assets/stack-light.svg" alt="Next.js, React, TypeScript, PostgreSQL, Prisma, Redis, Tailwind CSS, Zod, Python" width="760">
  </picture>
</td></tr>
</table>

| Livello | Tecnologie |
|---|---|
| Applicazione | Next.js 16, React 19, TypeScript strict |
| Dati | PostgreSQL 17, Prisma 6 |
| Code e job | Redis 8, BullMQ |
| Interfaccia | Tailwind CSS 4 |
| Validazione | Zod 4 |
| Test | Vitest, Playwright |
| Hardware e sensori | Python |

## Contatti

Il codice di ShipExpress è privato. Per una demo, per un'integrazione o per
parlare di un progetto hardware:

- Sito: [shipexpress.it](https://shipexpress.it)
- Email: [info@shipexpress.it](mailto:info@shipexpress.it)
