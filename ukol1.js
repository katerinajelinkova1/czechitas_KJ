/* Založte proměnné pro jméno, vek, vahu v kg a a vysku v metrech - nastavte jim libovolnou hodnotu. Spočtěte BMI Do konzole vypište větu ve formátu:
"Jmenuji se Petra, je mi 34 let, vážím 65kg, měřím 1.67m a moje BMI je 23,2.".*/


let jmeno = 'Petra';
let vek = 34;
let vaha = 65;
let vyska = 1.67;

let BMI = vaha / vyska ** 2;

console.log('Jmenuji se ' + jmeno + ' je mi ' + vek + ' let, vážím ' + vaha + 'kg, měřím ' + vyska + ' m, a moje BMI je ' + BMI);