const date = formatedDag + "+00%3A00&dateTo=" + formatedDag + "+23%3A59";

const urlAlleKonkuranser =
  "https://events.eqtiming.com/api/Events?query=&dateFrom=" +
  date +
  "&organizationId=0&regionIds=&levelIds=&sportIds=2%2C138%2C258%2C267%2C276%2C277%2C377%2C419%2C25%2C259%2C382%2C412%2C413&take=100&dateSort=true&desc=false&onlyValidated=true&onlyshowfororganizer=false&organizerIds=&graded=false";
const urlLangrenn =
  "https://events.eqtiming.com/api/Events?query=&dateFrom=" +
  date +
  "&organizationId=0&regionIds=&levelIds=&sportIds=2%2C138%2C258%2C267%2C276%2C277%2C377%2C419&take=100&dateSort=true&desc=false&onlyValidated=true&onlyshowfororganizer=false&organizerIds=&graded=false";
const urlSkiskyting =
  "https://events.eqtiming.com/api/Events?query=&dateFrom=" +
  date +
  "&organizationId=0&regionIds=&levelIds=&sportIds=25%2C259%2C382%2C412%2C413&take=100&dateSort=true&desc=false&onlyValidated=true&onlyshowfororganizer=false&organizerIds=&graded=false";
const urlFriidrett =
  "https://events.eqtiming.com/api/Events?query=&dateFrom=" +
  date +
  "&organizationId=0&regionIds=&levelIds=&sportIds=79%2C80%2C273%2C380%2C397%2C410%2C416%2C424%2C46%2C417%2C435%2C436%2C437%2C438%2C440%2C439%2C441%2C442%2C443%2C444%2C445%2C446%2C78%2C447&take=100&dateSort=true&desc=false&onlyValidated=true&onlyshowfororganizer=false&organizerIds=&graded=false";
const urlSykling =
  "https://events.eqtiming.com/api/Events?query=&dateFrom=" +
  date +
  "&organizationId=0&regionIds=&levelIds=&sportIds=381%2C395%2C425%2C64%2C65%2C66%2C67%2C68%2C69%2C70%2C427%2C428%2C429%2C448&take=100&dateSort=true&desc=false&onlyValidated=true&onlyshowfororganizer=false&organizerIds=&graded=false";
const urlMultisport =
  "https://events.eqtiming.com/api/Events?query=&dateFrom=" +
  date +
  "&organizationId=0&regionIds=&levelIds=&sportIds=177%2C210%2C207%2C208%2C209%2C379%2C386%2C387%2C420%2C421&take=100&dateSort=true&desc=false&onlyValidated=true&onlyshowfororganizer=false&organizerIds=&graded=false";
const urlOrientering =
  "https://events.eqtiming.com/api/Events?query=&dateFrom=" +
  date +
  "&organizationId=0&regionIds=&levelIds=&sportIds=115%2C116%2C117%2C118%2C378%2C426&take=100&dateSort=true&desc=false&onlyValidated=true&onlyshowfororganizer=false&organizerIds=&graded=false";

const apiUrl = {
  Alle: urlAlleKonkuranser,
  Langrenn: urlLangrenn,
  Skiskyting: urlSkiskyting,
  Friidrett: urlFriidrett,
  Sykling: urlSykling,
  Multisport: urlMultisport,
  Orientering: urlOrientering,
};
