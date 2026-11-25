/* Panel „Vzorce a konstanty“ vpravo (NEPOVINNÉ): skupiny vzorců [popis, TeX]. */
(function () {
const R = String.raw;
window.VZORCE = [
  { g: "Obvody", f: [
    ["Ohmův zákon", R`U=RI`],
    ["nezatížený dělič", R`V_{out}=\frac{R_2}{R_1+R_2}V_{in}`]
  ]},
  { g: "Rovnice", f: [
    ["kořeny kvadratické rovnice", R`x_{1,2}=\frac{-b\pm\sqrt{b^2-4ac}}{2a}`]
  ]}
];
})();
