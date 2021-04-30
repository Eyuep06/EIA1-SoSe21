var aufgabe6;
(function (aufgabe6) {
    function aufrunden(zahl) {
        return Math.round(zahl * 100) / 100;
    }
    var emissionEuropa18 = 4209.3;
    var emissionAsien18 = 16274.1;
    var emissionAfrika18 = 1235.5;
    var emissionAustralien18 = 2100.5;
    var emissionSamerica18 = 1261.5;
    var emissionNamerica18 = 6035.6;
    var emissionWelt18 = emissionAfrika18 + emissionAsien18 + emissionEuropa18 + emissionNamerica18 + emissionSamerica18 + emissionAustralien18;
    var emissionEuropa08 = 4965.7;
    var emissionAsien08 = 12954.7;
    var emissionAfrika08 = 1028;
    var emissionAustralien08 = 1993;
    var emissionSamerica08 = 1132.6;
    var emissionNamerica08 = 6600.4;
    var emissionWelt08 = emissionAfrika08 + emissionAsien08 + emissionAustralien08 + emissionEuropa08 + emissionNamerica08 + emissionSamerica08;
    var hundert = 100;
    /*  var UnterschiedEuropaProz: number = aufrunden((emissionEuropa18 - emissionEuropa08) / emissionEuropa08 * 100);
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
      var UnterschiedNamericaKg: number = aufrunden((emissionNamerica18 - emissionNamerica08));*/
    var Asien = 'Asia';
    var Afrika = 'Africa';
    var Australien = 'Australia';
    var Europa = 'Europe';
    var Suedamerika = 'Southamerica';
    var Nordamerika = 'Northamerica';
    document.querySelector('.europe').addEventListener('click', function () { emissionsWerte(Europa, emissionEuropa18, emissionEuropa08); });
    document.querySelector('.asia').addEventListener('click', function () { emissionsWerte(Asien, emissionAsien18, emissionAsien08); });
    document.querySelector('.africa').addEventListener('click', function () { emissionsWerte(Afrika, emissionAfrika18, emissionAfrika08); });
    document.querySelector('.australia').addEventListener('click', function () { emissionsWerte(Australien, emissionAustralien18, emissionAustralien08); });
    document.querySelector('.southamerica').addEventListener('click', function () { emissionsWerte(Suedamerika, emissionSamerica18, emissionSamerica08); });
    document.querySelector('.northamerica').addEventListener('click', function () { emissionsWerte(Nordamerika, emissionNamerica18, emissionNamerica08); });
    function emissionsWerte(KontinentName, kontinentWert18, kontinentWert08) {
        document.querySelector('#titleRegion').innerHTML = KontinentName;
        document.querySelector('#sec1Continent').innerHTML = KontinentName;
        document.querySelector('#emissionAbsolute').innerHTML = kontinentWert18.toString();
        document.querySelector('#relativeWorld').innerHTML = aufrunden(kontinentWert18 / emissionWelt18 * hundert).toString();
        document.querySelector('#growthPercent').innerHTML = aufrunden((kontinentWert18 - kontinentWert08) / kontinentWert08 * 100).toString();
        document.querySelector('#growthAbsolute').innerHTML = aufrunden(kontinentWert18 - kontinentWert08).toString();
        document.querySelector('.chart').setAttribute('style', 'height:' + kontinentWert18 / emissionWelt18 * hundert + '%');
    }
    /*
    document.querySelector('.europe').addEventListener('click', klickEuropa);
    document.querySelector('.asia').addEventListener('click', klickAsien);
    document.querySelector('.africa').addEventListener('click', klickAfrika);
    document.querySelector('.australia').addEventListener('click', klickAustralien);
    document.querySelector('.southamerica').addEventListener('click', klickSmarika);
    document.querySelector('.northamerica').addEventListener('click', klickNamerika);

/*
    function klickEuropa() {
        document.querySelector('#titleRegion').innerHTML = "Europe";
        document.querySelector('#sec1Continent').innerHTML = 'Emission absolute of Europe in 2018';
        document.querySelector('#emissionAbsolute').innerHTML = emissionEuropa18.toString();
        document.querySelector('#relativeWorld').innerHTML = aufrunden(emissionEuropa18 / emissionWelt18 * hundert).toString();
        document.querySelector('#growthPercent').innerHTML = aufrunden(UnterschiedEuropaProz).toString();
        document.querySelector('#growthAbsolute').innerHTML = aufrunden(UnterschiedEuropaKg).toLocaleString();
        document.querySelector('.chart').setAttribute('style', 'height:13.53%');
    }

    function klickAsien() {
        document.querySelector('#titleRegion').innerHTML = "Asia";
        document.querySelector('#sec1Continent').innerHTML = 'Emission absolute of Asia in 2018';
        document.querySelector('#emissionAbsolute').innerHTML = emissionAsien18.toString();
        document.querySelector('#relativeWorld').innerHTML = aufrunden(emissionAsien18 / emissionWelt18 * hundert).toString();
        document.querySelector('#growthPercent').innerHTML = aufrunden(UnterschiedAsienProz).toString();
        document.querySelector('#growthAbsolute').innerHTML = aufrunden(UnterschiedAsienKg).toLocaleString();
        document.querySelector('.chart').setAttribute('style', 'height:52.3%');
    }


    function klickAfrika() {
        document.querySelector('#titleRegion').innerHTML = "Africa";
        document.querySelector('#sec1Continent').innerHTML = 'Emission absolute of Africa in 2018';
        document.querySelector('#emissionAbsolute').innerHTML = emissionAfrika18.toString();
        document.querySelector('#relativeWorld').innerHTML = aufrunden(emissionAfrika18 / emissionWelt18 * hundert).toString();
        document.querySelector('#growthPercent').innerHTML = aufrunden(UnterschiedAfrikaProz).toString();
        document.querySelector('#growthAbsolute').innerHTML = aufrunden(UnterschiedAfrikaKg).toLocaleString();
        document.querySelector('.chart').setAttribute('style', 'height:3.97%');
    }


    function klickAustralien() {
        document.querySelector('#titleRegion').innerHTML = "Australia";
        document.querySelector('#sec1Continent').innerHTML = 'Emission absolute of Australia in 2018';
        document.querySelector('#emissionAbsolute').innerHTML = emissionAustralien18.toString();
        document.querySelector('#relativeWorld').innerHTML = aufrunden(emissionAustralien18 / emissionWelt18 * hundert).toString();
        document.querySelector('#growthPercent').innerHTML = aufrunden(UnterschiedAustralienProz).toString();
        document.querySelector('#growthAbsolute').innerHTML = aufrunden(UnterschiedAustralienKg).toLocaleString();
        document.querySelector('.chart').setAttribute('style', 'height:6.75%');
    }


    function klickSmarika() {
        document.querySelector('#titleRegion').innerHTML = "Southamerica";
        document.querySelector('#sec1Continent').innerHTML = 'Emission absolute of Southamrica in 2018';
        document.querySelector('#emissionAbsolute').innerHTML = emissionSamerica18.toString();
        document.querySelector('#relativeWorld').innerHTML = aufrunden(emissionSamerica18 / emissionWelt18 * hundert).toString();
        document.querySelector('#growthPercent').innerHTML = aufrunden(UnterschiedSamericaProz).toString();
        document.querySelector('#growthAbsolute').innerHTML = aufrunden(UnterschiedSamericaKg).toLocaleString();
        document.querySelector('.chart').setAttribute('style', 'height:4.05%');

    }


    function klickNamerika() {
        document.querySelector('#titleRegion').innerHTML = "Northamerica";
        document.querySelector('#sec1Continent').innerHTML = 'Emission absolute of Northamerica in 2018';
        document.querySelector('#emissionAbsolute').innerHTML = emissionNamerica18.toString();
        document.querySelector('#relativeWorld').innerHTML = aufrunden(emissionNamerica18 / emissionWelt18 * hundert).toString();
        document.querySelector('#growthPercent').innerHTML = aufrunden(UnterschiedNamericaProz).toString();
        document.querySelector('#growthAbsolute').innerHTML = aufrunden(UnterschiedNamericaKg).toLocaleString();
        document.querySelector('.chart').setAttribute('style', 'height:19.4%');
    }









*/
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=script.js.map