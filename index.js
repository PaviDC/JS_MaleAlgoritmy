// document.body.innerHTML = "test"; // zkouška, že stránka funguje a zobrazuje co má

/*
zadání úkolu:
Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. Budeme jej používat ve všech následujících úlohách.

const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];
1. Vypište do stránky všechna čísla. _ done
2.Vypište do stránky druhé mocniny všech čísel. _done
3.Vypište do stránky pouze záporná čísla. _ done
4.Vypište do stránky absolutní hodnotu všech čísel. _done
5.Vypište do stránky pouze sudá čísla. _ done
6.Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi. _done
7.Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5. _done
8.Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5. _done together with NO.7
9.Spočítejte, kolik je v seznamu záporných čísel. _done
10.Spočítejte součet všech čísel v poli. _done
11.Spočítejte průměr všech čísel v poli. _done
12.Spočítejte součet všech kladných čísel v poli. _done

*/

// praktická poznámka na zakomentování více řádků najednou - označit  Ctrl + (+vedle backspacu na klavesnici, stejný klik znovu odstraní jednořádkový koment)

const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

  //1. Vypište do stránky všechna čísla.
 
document.body.innerHTML += [numbers];

  // 2.Vypište do stránky druhé mocniny všech čísel.
const druhaMocnina = numbers.map((cisloMoje) =>cisloMoje ** 2 )  // pro druhou mocninu se používá operátor ** 
 
druhaMocnina.forEach(cisloMoje => {
    document.body.innerHTML += `<p>druhá mocnina: ${cisloMoje}</p>`; //vypsání čísel druhých mocnin tedy cisloMoje do stránky pod sebe
  });

  //poznámka pro estetické úpravy-  pokud bychom chtěli vypsat čísla vedle sebe a oddělené čárkou dalo by se použít funkce join  takto: document.body.innerHTML += "druhaMocnina".join(" , ");  ale já jsem zvolila funkci klasickou pod sebe - pro mě přehlednější


  //3.Vypište do stránky pouze záporná čísla. -- takže čísla menší než 0 s podmínkou if
const zaporneCislo = numbers.forEach(cisloMoje => {
    if (cisloMoje < 0 ) { // pokud je číslo menší než 0 tedy záporné vypíše se do stránky - chceme každé na svůj řádek pro přehlednost a možnou kontrolu
        document.body.innerHTML += `<h1>záporné číslo: ${cisloMoje}</h1>`; //h1 použito ať vidím že to funguje - ano funguje :D
    }
});

  //4.Vypište do stránky absolutní hodnotu všech čísel. 
  /*-- co je myšleno absolutní hodnotou? -- odpověď od Naty: Absolútni hodnota je matematický pojem - v jednoduchosti je to vzdialenosť čísla od nuly ( takze keď je tam číslo 5, ma to vrátiť číslo 5; keď je tam číslo -11, má to vrátiť číslo 11) , mela by to byt fce Mth.abs(); */
/*let absolutniHodnota = "-4"; // zkouska zda to ukaze spravnou hodnotu
document.body.innerHTML += Math.abs(nazev konstanty); */

numbers.forEach(mojeAbsHodnota => {
  const absolutniHodnota = Math.abs(mojeAbsHodnota); 
  
  document.body.innerHTML += `toto je absolutní hodnota: <h3> ${absolutniHodnota},  </h3>`; // doladit format aby tam byly beyerz ci carky
  
});

  //5.Vypište do stránky pouze sudá čísla. -- pozn. kouknout do lekce 31.3. na cvicene z hodiny -- musi byt delitelne 2 bude tam podmínka;

numbers.forEach(sudeCislo => {
  if (sudeCislo %2 === 0) { // pro sude cislo je potreba deleni 2 beze zbytku aby bylo rovno 0, pak je to cislo sude
    document.body.innerHTML += `<p> Sude číslo je: ${sudeCislo} </p>`;
  }
});

// 6.Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi. -- opet dalsi podmínka - nejřív zkusím jak vydělit všechna třemi - pro mou kontrolu:
/* tady jsem si pro kontrolu delila 3 abych videla vysledky a mela jistotu ze funkce dela co ma - proto cele zakomentuji
numbers.forEach(mojeAbsHodnotadelena3 => {
  const absolutniHodnotaDelena3 = (Math.abs(mojeAbsHodnotadelena3))/3; 
    //tady jsem si pro kontrolu delila 3 abych videla vysledky a mela jistotu ze funkce dela co ma
document.body.innerHTML += `absolutní hodnota vydělená 3: <p> ${absolutniHodnotaDelena3} </p>`;
});
*/
/*
numbers.forEach(mojeAbsHodnotadelena3 => {
  const absolutniHodnotaDelena3 = (Math.abs(mojeAbsHodnotadelena3))%3; 
    //deleni beze zbytku pro podminky - pokud bude vysledek 0 pak je cislo delitelne 3 / overeni ye funguje / pak zahrnout do podmínky
    if (mojeAbsHodnotadelena3 === 0) {
      document.body.innerHTML += `absolutní hodnota, která je dělitelná 3: <p> ${absolutniHodnotaDelena3} </p>`;
    }
});
*/
// řešení úloha 6:
numbers.forEach(mojeAbsHodnotadelena3 => {
     if (Math.abs (mojeAbsHodnotadelena3) %3 === 0) {
      document.body.innerHTML += `absolutní hodnota, dělitelná 3: <p> ${Math.abs(mojeAbsHodnotadelena3)} </p>`;
    }
});

// 7.Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5. -- vysvetleni o co jde -- tzn. pokud mam cislo 8 tak v pozici od cisla 5 je to 3 -- 
// 8.Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5. - vyuziti ulohy cislo 7  a pridani podminky

numbers.forEach(cisloPuvodni => {
  const poziceOd5 = Math.abs(cisloPuvodni - 5); //uloha reseni cislo 7
  const druhaMocninaOd5 = poziceOd5 ** 2; // uloha cislo 8
  document.body.innerHTML += `<p> Pozice ${cisloPuvodni} od čísla 5 je ${poziceOd5} a jeho druhá mocnina je ${druhaMocninaOd5}. </p>`;
//reseni pro obe ulohy dohromady
});

// 9.Spočítejte, kolik je v seznamu záporných čísel. -- nejprve zobrazit popř. return záporná čísla - viz uloha 3. a pak jejich počet 
/*
const zaporneCislo = numbers.forEach(cisloMoje => {
  if (cisloMoje < 0 ) { // pokud je číslo menší než 0 tedy záporné vypíše se do stránky - chceme každé na svůj řádek pro přehlednost a možnou kontrolu
      document.body.innerHTML += `<h1>záporné číslo: ${cisloMoje}</h1>`; //h1 použito ať vidím že to funguje - ano funguje :D
  }
});
*/
//pocet zapornych cisel - reseni uloha 9:

const zapornePole = [];
numbers.forEach(zaporneCislo => {
  if (zaporneCislo < 0) { // pro zaporne cislo aby bylo mensi nez nula X opak bude pro kladne
    zapornePole.push(zaporneCislo);
  }
});

document.body.innerHTML += `<h2>Celkem je ${zapornePole.length} záporných čísel.</h2>`;

// extra vypocet pro kontrolu kladnych cisel - pocet vsech kladnych cisel v poli 

const kladnePole = [];
numbers.forEach(kladneCislo => {
  if (kladneCislo > 0) { // nutno davat pozor na znamenko podle toho zaporne ci kladne cislo
    kladnePole.push(kladneCislo);
  }
});

document.body.innerHTML += `<h2>Celkem je ${kladnePole.length} kladných čísel.</h2>`;


/* 10.Spočítejte součet všech čísel v poli. -- pro soucest staci zadat += a to secte, nutno zadat do konstatnty let soucetCisel 0 aby to nebylo NaN a positalo se od nuly*/

let soucetCisel = 0;

numbers.forEach(soucetCelkovy => {
  soucetCisel += soucetCelkovy;
  
});
document.body.innerHTML += `<h3> Součet všech čísel je: ${soucetCisel}</h3>`;

// 11.Spočítejte průměr všech čísel v poli. -- potřebuji sečít všechna čísla tzn. celkový součet viz 10. soucetCelkovy a vydělit počtem čísel tedy kolik jich je  = 19 (to zjistím pomocí length funkce)

const celkovyPrumer = soucetCisel / numbers.length; // využití konstanty z předchozí úlohy
document.body.innerHTML += `<h3> Průměr všech čísel je: ${celkovyPrumer} </h3> `;


/*kontrola zda mi to ukáže co potřebuji // slozitejsi verze 
- pro pripadne psani textu kolem - vyuziji interpolaci tedy: 
pocetCisel = numbers.length;
document.body.innerHTML += */ 
/*
pro mou aktulální kontrolu stačí jednoduchý zápis takto - klasické vypsání do HTML stránky:
document.body.innerHTML += (numbers.length); // funguje s i bez kulatých závorek - nemají význam, jen lepší viditelnosti pro mě - lze i bez závorek

prumerCelkovy =  //soucet vydelit poctem cisel tedy /19

// 12.Spočítejte součet všech kladných čísel v poli. -- tzn. vyber cisel vetsi nez 0 a pak nasledny soucet */

let kladnySoucet = 0;
numbers.forEach(kladnaCisla => {
  if (kladnaCisla > 0 ) {
    kladnySoucet += kladnaCisla;
  }
});
document.body.innerHTML += `<h2> Celkový součet kladných čísel je: ${kladnySoucet}</h2>`;