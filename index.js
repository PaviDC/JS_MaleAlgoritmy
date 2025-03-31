// document.body.innerHTML = "test"; // zkouška, že stránka funguje a zobrazuje co má

/*
zadání úkolu:
Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. Budeme jej používat ve všech následujících úlohách.

const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];
1. Vypište do stránky všechna čísla.
2.Vypište do stránky druhé mocniny všech čísel.
3.Vypište do stránky pouze záporná čísla.
4.Vypište do stránky absolutní hodnotu všech čísel.
5.Vypište do stránky pouze sudá čísla.
6.Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
7.Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
8.Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
9.Spočítejte, kolik je v seznamu záporných čísel.
10.Spočítejte součet všech čísel v poli.
11.Spočítejte průměr všech čísel v poli.
12.Spočítejte součet všech kladných čísel v poli.

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
    document.body.innerHTML += `<p>${cisloMoje}</p>`; //vypsání čísel druhých mocnin tedy cisloMoje do stránky pod sebe
  });

  //poznámka pro estetické úpravy-  pokud bychom chtěli vypsat čísla vedle sebe a oddělené čárkou dalo by se použít funkce join  takto: document.body.innerHTML += "druhaMocnina".join(" , ");  ale já jsem zvolila funkci klasickou pod sebe - pro mě přehlednější


  //3.Vypište do stránky pouze záporná čísla. -- takže čísla menší než 0 s podmínkou if
const zaporneCislo = numbers.forEach(cisloMoje => {
    if (cisloMoje < 0 ) { // pokud je číslo menší než 0 tedy záporné vypíše se do stránky - chceme každé na svůj řádek pro přehlednost a možnou kontrolu
        document.body.innerHTML += `<h1>${cisloMoje}</h1>`; //h1 použito ať vidím že to funguje - ano funguje
    }
});


        //4.Vypište do stránky absolutní hodnotu všech čísel. 
         /*-- co je myšleno absolutní hodnotou? -- odpověď od Naty: Absolútni hodnota je matematický pojem - v jednoduchosti je to vzdialenosť čísla od nuly ( takze keď je tam číslo 5, ma to vrátiť číslo 5; keď je tam číslo -11, má to vrátiť číslo 11) 
dovypocitat
        absolutniHodnota = */

    //5.Vypište do stránky pouze sudá čísla. -- pozn. kouknout do lekce 31.3. na cvicene z hodiny -- musi byt delitelne 2;

//sudeCislo = 


// 6.Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.

//absolutniHodnotaDelena3 = 

// 7.Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5. -- vysvetleni o co jde -- tzn. pokud mam cislo 8 tak v pozici od cisla 5 je to 3 -- 

//poziceOdcisla5

// 8.Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5. -- tomu teda nerozumim ?? co se chce? -- podobne prikladu 7. ale jeste to 


// 9.Spočítejte, kolik je v seznamu záporných čísel. -- nejprve zobrazit popř. return záporná čísla - viz uloha 3. a pak jejich počet 

//pocetZapornychCisel =

// 10.Spočítejte součet všech čísel v poli. -- najít funkci na součet  -- 

//soucetCelkovy =

// 11.Spočítejte průměr všech čísel v poli. -- potřebuji sečít všechna čísla tzn. celkový součet viz 10. soucetCelkovy a vydělit počtem čísel tedy kolik jich je  = 19 (to zjistím pomocí length funkce)

/*kontrola zda mi to ukáže co potřebuji // slozitejsi verze 
- pro pripadne psani textu kolem - vyuziji interpolaci tedy:
pocetCisel = numbers.length;
document.body.innerHTML += `<p>Pocet cisel je:${pocetCisel}</p>`;
*/
// pro mou aktulální kontrolu stačí jednoduchý zápis takto - klasické vypsání do HTML stránky:
document.body.innerHTML += (numbers.length); // funguje s i bez kulatých závorek - nemají význam, jen lepší viditelnosti pro mě - lze i bez závorek

prumerCelkovy =  //soucet vydelit poctem cisel tedy /19

// 12.Spočítejte součet všech kladných čísel v poli. -- tzn. vyber cisel vetsi nez 0 a pak nasledny soucet

//soucetKLadnychCisel 