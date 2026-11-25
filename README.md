# Sbírka příkladů

Studijní sbírky příkladů po krocích, jedna aplikace pro více předmětů. Základ je společný, mění se jen data.

- Úvodní stránka: <https://machmar.github.io/sbirka/>
- NAI (Metody návrhu analogových IO): <https://machmar.github.io/sbirka/nai/>

Každý předmět má:

- **Pochopit**: vysvětlení příkladu po krocích, ve schématu se zvýrazní součástky a proudy, kterých se krok týká.
- **Procvičit**: stejný příklad po krocích k samostatnému výpočtu. Zadané číslo se zkontroluje (tolerance 2 %), je tu nápověda a odkrytí řešení.
- **Zkouška**: příklad bez nápověd, výsledky se zkontrolují najednou.
- Volitelně stránky **Vzory**, **Co na tahák** a **Bloky** (zobrazí se, jen když pro ně předmět má data).
- **Spolu**: sdílená místnost (pohled, ukazatel, kreslení a poznámky s dalšími počítači).

## Struktura

```
index.html              úvodní stránka se seznamem předmětů (z data/subjects.js)
core/boot.js            společná stránka: vypíše rozvržení a načte data předmětu a app.js
core/app.js, app.css    aplikace (bez build kroku)
data/subjects.js        seznam předmětů na úvodní stránce
data/<předmět>/         všechno, co patří předmětu: subject.js, datové soubory, img/, tools/
<předmět>/index.html    jen adresa /sbirka/<předmět>/: jeden řádek s <script src="../core/boot.js" data-subject="…">
```

### Nový předmět

1. Vytvoř `data/xyz/subject.js` (název, kapitoly, seznam datových souborů, vzor je `data/nai/subject.js`) a k němu datové soubory a obrázky.
2. Zkopíruj `nai/index.html` do `xyz/index.html` a změň `data-subject="nai"` na `"xyz"`.
3. Přidej předmět do `data/subjects.js`.

Datové soubory nastavují tyto proměnné (formát viz `data/nai/`): `MPC` (příklady k procvičování, povinné), `NAI_EX` (vysvětlení pro Pochopit), `LINK` (vazba kroků procvičování na kroky vysvětlení), `PATTERNS` a `TAHAK` (Vzory a tahák), `BLOKY`, `VZORCE` (panel Vzorce a konstanty). Cesty k obrázkům v datech jsou vůči `data/<předmět>/`.

## Ukládání postupu a místnosti

Postup se ukládá **v prohlížeči** (localStorage, klíč `sbirka-<předmět>-v1`), každý předmět zvlášť. Nikam se neodesílá. V levém panelu dole je export, import a smazání.

Místnosti jsou oddělené podle předmětu: stejný kód místnosti v NAI a v jiném předmětu vede do dvou různých místností.

Stará adresa `machmar-claude.github.io/nai-sbirka` přesměruje sem. Pokud tu prohlížeč ještě nemá žádný postup NAI, přenese s sebou ten ze staré adresy.

## NAI: přegenerování dat

```
python data/nai/tools/build.py NAI_pruvodce_priklady.html MPC-NAI_priklady_po_krocich.html
```

Pozor: přepíše `data/nai/*.js`, takže ruční úpravy v nich (třeba vzorce u K1 až K11) by se ztratily.

### Zdroje NAI

- sbírka příkladů MPC-NAI, FEKT VUT, 2023
- P. Kadaňka, RC_EXPLAIN, 2025 (příklady K1 až K11)
