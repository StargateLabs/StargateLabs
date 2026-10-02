# DESIGN.md: Stargate Labs (profilo + Pages)

Direzione visiva del profilo pubblico e del sito Pages. R-37: se questo file
chiede uno slop-pattern, segnalare elemento + regola e chiedere keep/drop.

## Identita
Laboratorio privato: software in produzione (gestionale logistico multi-tenant),
security testing, impianti criogenici e raffreddamento a TEC, controller e sensori.
Pubblico: tecnico (chi legge il profilo GitHub). Vetrina asciutta, non marketing.

## Personalita
Tecnica, misurata, concreta. Nessuna teatralita: ogni numero ha una fonte, ogni
frase dice un fatto. Tono diretto, italiano.

## Palette
- Fondi: `#0a0e12` (bg), `#0f151b` (panel), `#1c2631` (line).
- Testo: `#e8eef4` (ink), `#93a1b0` (dim), `#5d6b7a` (faint).
- Core 1: verde `#35e08a`. Ragione: segnale, stato ok, traccia sensore.
- Core 2: ciano `#4cc9f0`. Ragione: dati e link.
- Accento: ambra `#f5a623`. Ragione: temperatura, dato tecnico. Usato al momento
  chiave (versioni, range), mai ovunque.
- Cap: 2 core + 1 accento + neutri (R-29).

## Tipografia
- Sans: system-ui (body, titoli). Ragione: leggibilita su GitHub Pages, zero webfont.
- Mono: solo per dati tecnici e piccole etichette (versioni, range, codici). Mai
  titoli mono grandi (R-06).

## Radius e ombre
- Radius 10px card, 8px bottoni, 6px chip. Non tutto pill (R-11).
- Ombre: nessuna, superfici piatte su bordo (R-12). La gerarchia viene da bordo e
  spaziatura.

## Tema
Dark fisso. Ragione: hardware, sensori e cryo, il pubblico tecnico legge dati su
fondo scuro (R-21). Nessun toggle light/dark.

## Mood e dial
Dial: ENERGY 2 / RHYTHM 3 / MOTION 1.
- ENERGY 2: saluta con chiarezza, non grida. Il contenuto tecnico comanda.
- RHYTHM 3: sezioni con composizioni diverse (hero, griglia numeri, flagship full
  width, griglia progetti, tabella, liste, contatti). Ragione: contenuti diversi,
  forme diverse.
- MOTION 1: solo hover/focus/transition e `prefers-reduced-motion`. Nessun loop.

## Motivo identita
La "pulse": una traccia di segnale (linea verde che sfuma) usata come separatore.
Ripete il tema sensori/temperatura, lega le pagine al laboratorio (R-20).

## Regole
- Niente em dash nei testi (R-02).
- Numeri solo dai repository reali dei progetti, mai inventati (R-17, R-38).
- Link solo verso destinazioni reali: shipexpress.it, email, repo pubblici
  (signalrgb-razer-stream-controller-x, dashboard-for-intel-cryo-cooling-technology),
  profilo GitHub (R-24, R-26).
- Logo: asset esistenti `assets/logo.png`, `assets/shipexpress-logo.png`, badge
  `assets/badge-*.svg`. Nuovi asset solo con istruzioni esplicite (R-23).
- Mobile: reflow, target 44px, niente overflow (R-03). Focus visibile, skip link,
  aria-labelledby (R-25, R-32).

## Decisioni bloccate (una riga per cambiare)
1. Tema dark fisso, nessun toggle. Ragione: identita hardware/cryo.
2. Verde `#35e08a` come accento primario, ambra come tecnico.
3. Contenuto bilingue: `index.html` (IT), `index-en.html` (EN), README profilo (IT).
