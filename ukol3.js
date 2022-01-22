let cislo = number(prompt('zadej cislo more'));
let soucet = cislo;

while (cislo != 0) {
  console.log('soucet je ' + soucet);
  cislo = number(prompt('zadej cislo more'));
  soucet = soucet + cislo;
}
