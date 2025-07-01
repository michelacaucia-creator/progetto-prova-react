export const ISMOCKEDLOGIN = true

// URL 
const config = {
    dev: {
        // baseUrl : 'https://api-pp.diva.metro.it', //URL pre production 
        // vaseUrl : 'http://10.244.2.14:8080/', //BE Java macchina Michela
        // baseUrlToken
        // baseUrlRedirect
        // client_id_params
        // client_secret_params
    },
    empty: {
        baseUrl : '',
        baseUrlToken : '',
        baseUrlRedirect : '',
        client_id_params : '',
        client_secret_params : ''
    }
}

// Se ISMOCKEDLOGIN è vero, allora restituisci direttamente config.dev.
// Altrimenti (ISMOCKEDLOGIN falso), controlla se sessionStorage.getItem("appConfig") esiste:
// Se esiste, ritorna il suo valore parsato con JSON.parse.
// Se non esiste, ritorna config.empty.
export default ISMOCKEDLOGIN 
  ? config.dev 
  : (sessionStorage.getItem("appConfig") 
      ? JSON.parse(sessionStorage.getItem("appConfig")) 
      : config.empty);