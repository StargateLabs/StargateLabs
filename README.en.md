<p align="center"><img src="assets/hero.svg" alt="Stargate Labs — laboratorio e ricerca hardware" width="100%"></p>

# Software, security and hardware. Engineered together.

Stargate Labs is an independent software development and hardware research lab. I build operational applications, analysis tools and integrations for devices with limited protocol documentation. Reverse engineering provides the understanding needed to build a verifiable interface.

[Italiano](README.md) · [English](README.en.md) · [Portfolio IT](https://stargatelabs.github.io/StargateLabs/) · [Portfolio EN](https://stargatelabs.github.io/StargateLabs/index-en.html)

## SignalRGB · Hardware interoperability

<p><img src="assets/razer-logo.svg" alt="Razer" height="30"> &nbsp; <img src="assets/signalrgb-logo.svg" alt="SignalRGB" height="30"></p>

A laboratory workflow: observation, protocol analysis, implementation and testing. Public code includes installation guides and clearly scoped validation notes.

| Project | Implementation | Guides |
|---|---|---|
| [Stream Controller X](https://github.com/StargateLabs/signalrgb-razer-stream-controller-x) | SignalRGB effects across 15 keys as one continuous 480 × 288 image. RGB565 transport, tile-based transfers and full-framebuffer checks. | [IT](https://github.com/StargateLabs/signalrgb-razer-stream-controller-x/blob/main/docs/INSTALL-IT.md) · [EN](https://github.com/StargateLabs/signalrgb-razer-stream-controller-x/blob/main/docs/INSTALL-EN.md) |
| [Key Light Chroma](https://github.com/StargateLabs/signalrgb-razer-key-light-chroma) | Control of the RGB section through the lamp’s local protocol: TCP setup, UDP frames and connection recovery. 77 automated checks. | [IT](https://github.com/StargateLabs/signalrgb-razer-key-light-chroma/blob/main/docs/INSTALL-IT.md) · [EN](https://github.com/StargateLabs/signalrgb-razer-key-light-chroma/blob/main/docs/INSTALL-EN.md) |
| [LSC / Battletron](https://github.com/StargateLabs/signalrgb-lsc-battletron-bridge) | A Rust bridge for LSC and Battletron Wi-Fi lights: QR login, authenticated LAN streaming, device management and configuration recovery. | [IT](https://github.com/StargateLabs/signalrgb-lsc-battletron-bridge/blob/main/docs/INSTALL-IT.md) · [EN](https://github.com/StargateLabs/signalrgb-lsc-battletron-bridge/blob/main/docs/INSTALL-EN.md) |

## Projects and capabilities

<p><img src="assets/shipexpress-logo.png" alt="ShipExpress" width="260"></p>

### ShipExpress

A production platform for shipping, orders, inventory and business documents. Multi-tenant architecture with separate databases, carrier integrations and search tools for operational documentation.

[Project](https://shipexpress.it)

### ARGUS

Security assessment orchestration for authorized targets: reconnaissance, static and dynamic analysis, dependencies, exposed credentials and APIs. Results from individual tools feed a shared analysis workflow.

### ARA

A voice assistant combining Whisper transcription, Kokoro speech synthesis and local document memory. Request routing and confirmation for sensitive operations keep conversation and execution clearly separated.

### StargateCryo

A dashboard for Intel Cryo controllers: regulation, telemetry, diagnostics and history. The desktop build integrates Core Temp clocks and Thermaltake TF2/TF3 sensors; thresholds are setup-specific and missing measurements remain explicit.

[Project](https://github.com/StargateLabs/dashboard-for-intel-cryo-cooling-technology)


### Sistemi di raffreddamento

Design and testing of liquid loops and thermoelectric systems, including sensor acquisition, condensation management, controlled startup and documentation of the specific hardware limits.


## Engineering approach

- **Understand before changing.** Reconstruct flows, formats and constraints from code, traffic and observable behavior. Keep hypotheses separate from evidence.
- **Design for recovery.** Backups, reconnects, timeouts and missing-data handling are part of implementation alongside the primary feature.
- **Verify behavior.** Protocol tests, regression checks and physical device observations answer different questions. Documentation identifies the evidence behind each result.

## Stack and documentation

Rust · Python · TypeScript · React / Next.js · PostgreSQL · Redis / BullMQ · Docker / Linux · Vitest / Playwright · USB / HID / UART · TCP / UDP / BLE.

[Previous technical information remains available in the archive](docs/PROJECT-NOTES-2026-10.md): versions, capabilities and measurements retain their historical context. Current releases and verification results are described in the individual repositories.


## GitHub statistics and visits

<img src="assets/github-stats.svg" alt="GitHub public statistics — snapshot 25 October 2026" width="100%">

<p align="center"><a href="https://github.com/StargateLabs?tab=followers"><img src="https://img.shields.io/github/followers/StargateLabs?label=Followers&labelColor=0b100b&color=00e5a0&logo=github&style=flat-square" alt="GitHub followers"></a> &nbsp; <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FStargateLabs&label=VISITE+PROFILO&labelColor=0b100b&countColor=00e5a0&style=flat-square" alt="Visite profilo StargateLabs"></p>

The visitor counter retains the profile’s existing identifier. The numeric card is a dated snapshot; repository badges are updated by their respective services. The portfolio refreshes its summaries through GitHub’s public API.

| Repository | Stars | Forks | Open issues and PRs |
|---|---:|---:|---:|
| [dashboard-for-intel-cryo-cooling-technology](https://github.com/StargateLabs/dashboard-for-intel-cryo-cooling-technology) | ![Stars](https://img.shields.io/github/stars/StargateLabs/dashboard-for-intel-cryo-cooling-technology?style=flat-square&label=stars&color=7fe8f5) | ![Forks](https://img.shields.io/github/forks/StargateLabs/dashboard-for-intel-cryo-cooling-technology?style=flat-square&label=forks&color=b3f67c) | [GitHub](https://github.com/StargateLabs/dashboard-for-intel-cryo-cooling-technology/issues) |
| [signalrgb-lsc-battletron-bridge](https://github.com/StargateLabs/signalrgb-lsc-battletron-bridge) | ![Stars](https://img.shields.io/github/stars/StargateLabs/signalrgb-lsc-battletron-bridge?style=flat-square&label=stars&color=7fe8f5) | ![Forks](https://img.shields.io/github/forks/StargateLabs/signalrgb-lsc-battletron-bridge?style=flat-square&label=forks&color=b3f67c) | [GitHub](https://github.com/StargateLabs/signalrgb-lsc-battletron-bridge/issues) |
| [signalrgb-razer-key-light-chroma](https://github.com/StargateLabs/signalrgb-razer-key-light-chroma) | ![Stars](https://img.shields.io/github/stars/StargateLabs/signalrgb-razer-key-light-chroma?style=flat-square&label=stars&color=7fe8f5) | ![Forks](https://img.shields.io/github/forks/StargateLabs/signalrgb-razer-key-light-chroma?style=flat-square&label=forks&color=b3f67c) | [GitHub](https://github.com/StargateLabs/signalrgb-razer-key-light-chroma/issues) |
| [signalrgb-razer-stream-controller-x](https://github.com/StargateLabs/signalrgb-razer-stream-controller-x) | ![Stars](https://img.shields.io/github/stars/StargateLabs/signalrgb-razer-stream-controller-x?style=flat-square&label=stars&color=7fe8f5) | ![Forks](https://img.shields.io/github/forks/StargateLabs/signalrgb-razer-stream-controller-x?style=flat-square&label=forks&color=b3f67c) | [GitHub](https://github.com/StargateLabs/signalrgb-razer-stream-controller-x/issues) |
| [StargateLabs](https://github.com/StargateLabs/StargateLabs) | ![Stars](https://img.shields.io/github/stars/StargateLabs/StargateLabs?style=flat-square&label=stars&color=7fe8f5) | ![Forks](https://img.shields.io/github/forks/StargateLabs/StargateLabs?style=flat-square&label=forks&color=b3f67c) | [GitHub](https://github.com/StargateLabs/StargateLabs/issues) |


<details><summary><b>Contributions, languages and contribution streak</b></summary>

<p><img src="https://github-readme-stats.vercel.app/api?username=StargateLabs&show_icons=true&hide_border=true&theme=transparent" alt="GitHub contribution statistics" height="160"> <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=StargateLabs&layout=compact&hide_border=true&theme=transparent" alt="Public repository languages" height="160"></p>

<p><img src="https://streak-stats.demolab.com?user=StargateLabs&hide_border=true" alt="GitHub contribution streak" height="160"></p>

[Official contribution graph](https://github.com/StargateLabs#year-list-container)

</details>

## Contact

[info@shipexpress.it](mailto:info@shipexpress.it) · [shipexpress.it](https://shipexpress.it) · [GitHub](https://github.com/StargateLabs)

<sub>Razer, SignalRGB, Intel e gli altri marchi appartengono ai rispettivi titolari. Progetti indipendenti, senza affiliazione dichiarata.</sub>

<p><img src="https://skillicons.dev/icons?i=nextjs,react,ts,postgres,prisma,redis,tailwind,py,linux,docker,git&amp;theme=dark" alt="Project technology logos"></p>
