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

  // document.body.innerHTML += "druhaMocnina"; - pokud bychom chtěli vypsat čísla vedle sebe dalo by se použít funkce join - já jsem zvolila funkci klasickou pod sebe - pro mě přehlednější


  //3.Vypište do stránky pouze záporná čísla.

