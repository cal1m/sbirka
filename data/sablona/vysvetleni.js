/* Vysvětlení pro režim Pochopit (NEPOVINNÉ, jen pro příklady, které ho mají). Spojuje se s příkladem přes id = num. */
(function () {
const R = String.raw;
window.NAI_EX = [
  {
    id: "1.1", /* = num příkladu v priklady.js */
    task: R`Urči proud děličem $I$ a výstupní napětí $V_{out}$.`, /* nepovinné: zadání v HTML/TeX místo task z priklady.js */
    idea: R`Nezatížený dělič: oběma rezistory teče stejný proud a výstup je úbytek na $R_2$.`,
    /* části obrázku ke zvýraznění, souřadnice v % šířky / výšky obrázku:
       b: obdélník [x, y, šířka, výška], a: šipka (proud) [[x, y], [x, y], …], n: uzel [x, y]
       c: barva r o b g p k t y s (červená, oranžová, modrá, zelená, fialová, růžová, tyrkys, žlutá, šedá), t: popisek */
    parts: {
      R1: { b: [42, 18, 16, 25], c: "r", t: "R1 6k" },
      R2: { b: [42, 57, 16, 25], c: "b", t: "R2 4k" },
      I:  { a: [[30, 20], [30, 85]], c: "o", t: "I" },
      OUT: { n: [80, 50], c: "g", t: "Vout" }
    },
    steps: [
      { t: "Proud děličem", h: ["R1", "R2", "I"], /* h: které části zvýraznit v tomto kroku */
        x: R`<p>Výstup nic nezatěžuje, takže $R_1$ a $R_2$ jsou v sérii a teče jimi stejný proud.</p>`, /* text kroku (HTML + TeX) */
        g: [R`I=\frac{V_{in}}{R_1+R_2}`],                     /* obecné vzorce (šedě) */
        eq: [R`I=\frac{10\,\text{V}}{10\,\text{k}\Omega}=1\,\text{mA}`], /* dosazení */
        r: R`$I = 1$ mA` },                                    /* výsledek kroku */
      { t: "Výstupní napětí", h: ["R2", "OUT"],
        x: R`<p>Výstup je úbytek na $R_2$.</p>`,
        eq: [R`V_{out}=IR_2=1\,\text{mA}\cdot4\,\text{k}\Omega=4\,\text{V}`],
        r: R`$V_{out} = 4$ V`,
        m: R`Dělič: $V_{out}=\frac{R_2}{R_1+R_2}V_{in}$.`,   /* nepovinné: „zapamatuj si“ */
        w: R`Platí jen bez zátěže na výstupu.` }              /* nepovinné: varování */
    ],
    res: R`$I=1$ mA, $V_{out}=4$ V`,                         /* souhrn výsledků */
    tk: [[R`V_{out}=\frac{R_2}{R_1+R_2}V_{in}`, "T"], [R`I=\frac{U}{R}`, "d", "Ohmův zákon"]]
  }
];
})();
