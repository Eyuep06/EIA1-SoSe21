namespace aufgabe5{

function aufrunden(zahl: number): number {
    return Math.round(zahl * 100) / 100

}


var emissionEuropa18: number = 4209.3;
var emissionAsien18: number = 16274.1;
var emissionAfrika18: number = 1235.5;
var emissionAustralien18: number = 2100.5;
var emissionSamerica18: number = 1261.5;
var emissionNamerica18: number = 6035.6;
var emissionWelt18: number = emissionAfrika18 + emissionAsien18 + emissionEuropa18 + emissionNamerica18 + emissionSamerica18 + emissionAustralien18;
var emissionEuropa08: number = 4965.7;
var emissionAsien08: number = 12954.7;
var emissionAfrika08: number = 1028;
var emissionAustralien08: number = 1993;
var emissionSamerica08: number = 1132.6;
var emissionNamerica08: number = 6600.4;
var emissionWelt08: number = emissionAfrika08 + emissionAsien08 + emissionAustralien08 + emissionEuropa08 + emissionNamerica08 + emissionSamerica08;
var hundert: number = 100;

var UnterschiedEuropaProz: number = aufrunden((emissionEuropa18 - emissionEuropa08) / emissionEuropa08 * 100);
var UnterschiedAsienProz: number = aufrunden((emissionAsien18 - emissionAsien08) / emissionAsien08 * 100);
var UnterschiedAfrikaProz: number = aufrunden((emissionAfrika18 - emissionAfrika08) / emissionAfrika08 * 100);
var UnterschiedAustralienProz: number = aufrunden((emissionAustralien18 - emissionAustralien08) / emissionAustralien08 * 100);
var UnterschiedSamericaProz: number = aufrunden((emissionSamerica18 - emissionSamerica08) / emissionSamerica08 * 100);
var UnterschiedNamericaProz: number = aufrunden((emissionNamerica18 - emissionNamerica08) / emissionNamerica08 * 100);

var UnterschiedEuropaKg: number = aufrunden((emissionEuropa18 - emissionEuropa08));
var UnterschiedAsienKg: number = aufrunden((emissionAsien18 - emissionAsien08));
var UnterschiedAfrikaKg: number = aufrunden((emissionAfrika18 - emissionAfrika08));
var UnterschiedAustralienKg: number = aufrunden((emissionAustralien18 - emissionAustralien08));
var UnterschiedSamericaKg: number = aufrunden((emissionSamerica18 - emissionSamerica08));
var UnterschiedNamericaKg: number = aufrunden((emissionNamerica18 - emissionNamerica08));

var Ausgabe1: string = "Die Emission von ";
var Ausgabe1_2: string = " kg CO2";
var Ausgabe2: string = "Relativ zur Gesamtemission der Welt verursacht ";
var Ausgabe3: string = " hat sich 2018 im Vergleich zu 2008 die Emission um ";
var Ausgabe4: string = "2018 im Vergleich zu 2008 sind das ";



console.log(Ausgabe1 + "Europa ist: " + emissionEuropa18 + Ausgabe1_2)
console.log(Ausgabe2 + "Europa damit " + aufrunden( emissionEuropa18 / emissionWelt18 * hundert) + "%")
console.log("F??r Europa" + Ausgabe3 + UnterschiedEuropaProz + "% ver??ndert")
console.log(Ausgabe4 + UnterschiedEuropaKg + Ausgabe1_2)

console.log(Ausgabe1 + "Asien ist: " + emissionAsien18 + Ausgabe1_2)
console.log(Ausgabe2 + "Asien damit " + aufrunden( emissionAsien18 / emissionWelt18 * hundert) + "%")
console.log("F??r Asien" + Ausgabe3 + UnterschiedAsienProz + "% ver??ndert")
console.log(Ausgabe4 + UnterschiedAsienKg + Ausgabe1_2)

console.log(Ausgabe1 + "Afrika ist: " + emissionAfrika18 + Ausgabe1_2)
console.log(Ausgabe2 + "Afrika damit " + aufrunden( emissionAfrika18 / emissionWelt18 * hundert) + "%")
console.log("F??r Afrika" + Ausgabe3 + UnterschiedAfrikaProz + "% ver??ndert")
console.log(Ausgabe4 + UnterschiedAfrikaKg + Ausgabe1_2)

console.log(Ausgabe1 + "Australien ist: " + emissionAustralien18 + Ausgabe1_2)
console.log(Ausgabe2 + "Australien damit " + aufrunden( emissionAustralien18 / emissionWelt18 * hundert) + "%")
console.log("F??r Australien" + Ausgabe3 + UnterschiedAustralienProz + "% ver??ndert")
console.log(Ausgabe4 + UnterschiedAustralienKg + Ausgabe1_2)

console.log(Ausgabe1 + "S??damerika ist: " + emissionSamerica18 + Ausgabe1_2)
console.log(Ausgabe2 + "S??damerika damit " + aufrunden( emissionSamerica18 / emissionWelt18 * hundert) + "%")
console.log("F??r S??damerika" + Ausgabe3 + UnterschiedSamericaProz + "% ver??ndert")
console.log(Ausgabe4 + UnterschiedSamericaKg + Ausgabe1_2)

console.log(Ausgabe1 + "Nordamerika ist: " + emissionNamerica18 + Ausgabe1_2)
console.log(Ausgabe2 + "Nordamerika damit " + aufrunden( emissionNamerica18 / emissionWelt18 * hundert) + "%")
console.log("F??r Noramerika" + Ausgabe3 + UnterschiedNamericaProz + "% ver??ndert")
console.log(Ausgabe4 + UnterschiedNamericaKg + Ausgabe1_2)
}