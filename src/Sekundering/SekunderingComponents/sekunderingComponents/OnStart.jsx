export function OnStart(orgData) {
  if (orgData === null) {
    return null;
  }
  // funksjon for å gjøre om klokkeslettende til sekunder
  function gøreTidTilSekunder(klokkeslett) {
    const [timer, minutter, sekunder] = klokkeslett.split(":");

    const timerISekunder = parseInt(timer) * 3600;
    const minutterIsekunder = parseInt(minutter) * 60;
    const sekunderSekunder = parseInt(sekunder);

    const klokkeslettISekunder =
      sekunderSekunder + timerISekunder + minutterIsekunder;
    return klokkeslettISekunder;
  }

  const data = Object.keys(orgData);

  // omstruktrer dataen så den blir lettere å bruke senere
  let brukeligData = data.map((item) => {
    const splitItem = item.split(",");
    const name = splitItem[0];
    const startno = splitItem[1];
    const starttid = splitItem[2];
    const klubb = splitItem[3];
    const klasse = splitItem[4];
    const startnoInt = parseInt(startno);
    const data = {
      navn: name,
      startNummer: startnoInt,
      klubb: klubb,
      klasse: klasse,
    };

    if (starttid !== undefined) {
      const startTidSekunder = gøreTidTilSekunder(starttid);
      data["startTidSekunder"] = startTidSekunder;
      data["startTid"] = starttid;
    }

    return data;
  });

  // finn antall løpere
  const antallLøpere = brukeligData.length;

  // gå gjennom lista å legg til klokkeslitt i sekunder
  brukeligData = brukeligData.map((item) => {
    const klokkeslett = item["startTid"];
    const klokkeslettISekunder = gøreTidTilSekunder(klokkeslett);
    item["startTidSekunder"] = klokkeslettISekunder;

    return item;
  });

  // soter data etter klokkeslett
  brukeligData.sort(function (a, b) {
    return a.startTidSekunder - b.startTidSekunder;
  });

  // legg til passeringer å liknende:
  brukeligData = brukeligData.map((item) => {
    item["antallPasseringer"] = 0;
    return item;
  });
  return { antallLøpere: antallLøpere, løpere: brukeligData };
}
