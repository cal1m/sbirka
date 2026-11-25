/* Příklady k procvičování (POVINNÉ). Každý příklad: zadání, kroky s výsledkem, nápovědou a řešením. */
(function () {
const R = String.raw; /* R`...` = text bez escapování zpětných lomítek, hodí se pro TeX */
window.MPC = [
  {
    id: "p1-1",          /* adresa příkladu (#p1-1): jen písmena, číslice, pomlčka */
    num: "1.1",          /* číslo v seznamu; podle části před tečkou se řadí do kapitoly */
    kind: "Dělič napětí", /* štítek typu příkladu */
    page: 3,             /* strana ve sbírce (nepovinné); src: "Název podkladů" mění text „sbírka“ */
    img: "img/1.1.svg", w: 300, h: 360, /* obrázek (cesta vůči této složce) a jeho rozměry v px; bez img se ukážou jen kroky */
    title: "Odporový dělič",
    task: "Urči proud děličem I a výstupní napětí V_out.", /* V_out, R_1… se vysází jako dolní index */
    given: ["V_in = 10 V", "R_1 = 6 kΩ", "R_2 = 4 kΩ"],
    steps: [
      { q: "Proud děličem I",
        sym: "I", unit: "mA", ans: 1, /* správný výsledek v jednotce unit; tolerance 2 % (nebo tolAbs: 0.2), další přijatelné alt: [..] */
        hint: "Oběma rezistory teče stejný proud: I = V_in / (R_1 + R_2).",
        tex: R`I = \frac{V_{in}}{R_1+R_2} = \frac{10}{10\cdot10^{3}} = 1\ \mathrm{mA}`, /* řešení (TeX) */
        why: "Výstup není zatížený, takže R_1 a R_2 jsou v sérii." },
      { q: "Výstupní napětí V_out", sym: "V_out", unit: "V", ans: 4,
        hint: "V_out je úbytek na R_2.",
        tex: R`V_{out} = I R_2 = \frac{R_2}{R_1+R_2}V_{in} = 4\ \mathrm{V}`,
        why: "" }
    ]
  },
  {
    id: "p2-1", num: "2.1", kind: "Výpočet", page: 7,
    title: "Kvadratická rovnice (příklad bez obrázku)",
    task: "Vyřeš rovnici x² − 5x + 6 = 0.",
    given: ["a = 1", "b = −5", "c = 6"],
    steps: [
      { q: "Diskriminant D", sym: "D", unit: "", ans: 1, hint: "D = b² − 4ac.", tex: R`D = (-5)^2 - 4\cdot1\cdot6 = 1`, why: "" },
      { q: "Větší kořen x_1", sym: "x_1", unit: "", ans: 3, hint: "x = (−b ± √D) / 2a.", tex: R`x_1 = \frac{5+1}{2} = 3`, why: "" },
      /* krok bez ans = odvození: student si ho napíše a porovná s řešením */
      { q: "Rozklad na součin", hint: "(x − x_1)(x − x_2)", tex: R`x^2-5x+6=(x-3)(x-2)`, why: "" }
    ],
    /* vzorce do rámečku „Vzorce v tomto příkladu“ (u příkladů bez vysvětlení): [TeX, "T" na taháku / "+" doplnit / "d" odvodit, poznámka] */
    tk: [[R`x_{1,2}=\frac{-b\pm\sqrt{b^2-4ac}}{2a}`, "T"]]
  }
];
})();
