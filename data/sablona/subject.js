/* ŠABLONA PŘEDMĚTU. Zkopíruj celou složku data/sablona/ do data/<zkratka>/ (malá písmena, třeba "ele")
   a přepiš. Přesný popis všech polí je v PRIDAT-PREDMET.md v kořeni repozitáře. */
window.SUBJECT = {
  title: "XYZ · sbírka příkladů",          /* titulek záložky */
  brand: "XYZ · sbírka",                   /* nápis vlevo nahoře; první slovo se píše do hlášení chyb */
  sub: "Název předmětu · 2 příklady",      /* menší řádek pod ním */
  /* kapitoly v pořadí seznamu: [klíč, název]. Klíč je část čísla příkladu před tečkou ("1.1" → "1"),
     u čísel bez tečky písmena na začátku ("K3" → "K") */
  chapters: [["1", "Kapitola 1 · obvody"], ["2", "Kapitola 2 · rovnice"]],
  /* datové soubory v této složce, načtou se v tomto pořadí (názvy jsou libovolné) */
  files: ["vysvetleni.js", "priklady.js", "vazby.js", "vzorce.js"]
};
