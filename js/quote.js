var quotesArr = [];

quotesArr[0] = "Gyvenimas myli tuos, kurie juo nesiskundžia";
quotesArr[1] = "Tai nebuvo laiko švaistymas, jei tu iš to kažką išmokai...";
quotesArr[2] = "Nustok lyginti save su kitais!";
quotesArr[3] = "Nesuteik savo buvusiems pralaimėjimams daug reikšmės!";
quotesArr[4] = "Nustok sakyti „Aš neturiu laiko“.Tu turi laiko viskam, kam nori turėti laiko!";
quotesArr[5] = "Išmok atleisti. Idealių nėra.";
quotesArr[6] = "Lai kiekvienas pajunta, kad susitikimas su tavimi - tai dovana.";
quotesArr[7] = "Trumpalaikiai žmonės, duoda ilgalaikes pamokas.";
quotesArr[8] = "Visada prisimink, kad galimybės neatsiranda - tu jas sukuri.";
quotesArr[9] = "Gyvenimas trapus ir trumpas, gražiausius dalykus vienas kitam dovanokime šiandien.";
quotesArr[10] = "Meilė... Be tavęs viskas nebe taip.";
quotesArr[11] = "Šilta ir gera ne ten, kur tik geras oras, o ten, kur žmonės šilti.";
quotesArr[12] = "Gražūs poelgiai iškalbingesni už gražius žodžius.";
quotesArr[13] = "Ilgai svarstantis - ne visada randa geriausią sprendimą.";
quotesArr[14] = "Sėkmė yra kelionė, o ne konkretus atvykimo punktas.";
quotesArr[15] = "Kuo jūsų laimė tylesnė – tuo ji ilgesnė!";
quotesArr[16] = "Sėkmė aplanko tuos, kurie atsikelia geros nuotaikos!";
quotesArr[17] = "Kartais tikriausia terapija – išgerti puodelį kavos su savo draugu.";
quotesArr[18] = "Svajonės tam tikru momentu išsipildo, viskas vyksta savu laiku.";
quotesArr[19] = "Jeigu matysi prasmę, rasi ir tikslus, ir kelią.";
quotesArr[20] = "Jei turi norą čia ir dabar, jis pavyks, nes svajonės išaugina sparnus!";
quotesArr[21] = "Šiame gyvenime yra žmonių, kurie tavęs nesupras...";
quotesArr[22] = "Būk sąžiningas sau, kitiems, aplinkai...";
quotesArr[23] = "Laimė ateina tuomet, kai tavo darbai ir žodžiai yra naudingi tau ir kitiems.";
quotesArr[24] = "Išmokite paleisti. Laimė visada ras kelią atgal!";
quotesArr[25] = "Diplomas negarantuoja gero gyvenimo.";
quotesArr[26] = "Nebūk skūpus - duok antrą šansą...";
quotesArr[27] = "Laimė yra tiesiog buvimas kartu ir bendravimas.";
quotesArr[28] = "Nieko nėra neįmanomo - reikia tik labai norėti...";
quotesArr[29] = "Niekados nelaidok savo vilties.";
quotesArr[30] = "Pasinaudok visomis galimybėmis... Tik netingėk!";
quotesArr[31] = "Nesijausk didelis, nes nežinai kur ir kada atsiras už tave didesnių.";
quotesArr[32] = "Pasaulyje daug kelių, bet pats mieliausias – kelias pas tėvus.";
quotesArr[33] = "Vaistas, nuo kurio niekam niekada nebus alergijos – švelnumas.";
quotesArr[34] = "Atstumas nėra kliūtis... Viską gadiname patys.";
quotesArr[35] = "Neįmanomiems dalykams tiesiog reikia skirti daugiau laiko...";
quotesArr[36] = "Neleisk energijai užsistovėti...";
quotesArr[37] = "Didžiausia laimė neprasilenkti kely , o atpažinti";
quotesArr[38] = "Norint padėti kitam, nebūtina būti stipriu ir turtingu.";
quotesArr[39] = "Geriausi migdomieji yra švari sąžinė.";

function displayDetails()
{
  var randomQuote = Math.floor(Math.random() * (quotesArr.lenght - 0));

  document.getElementByID("quote").innerHTML = quotesArr[randomQuote];
}
