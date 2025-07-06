import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  it: {
    translation: {
      "Pagina App.js": "Pagina App.js",
      "PROVA 1": "PROVA 1",
      "PROVA 2": "PROVA 2",
      "PROVA 3": "PROVA 3",
      "Prova 1.1": "Prova 1.1",
      "Prova 1.2": "Prova 1.2",
      "Prova 2.1": "Prova 2.1",
      "Prova 2.2": "Prova 2.2",
      "Prova 3.1": "Prova 1.1",
      "Prova 3.2": "Prova 3.2",
      "Contenuto di Prova 1.1": "Contenuto di Prova 1.1",
      "Contenuto di Prova 1.2": "Contenuto di Prova 1.2",
      "Contenuto di Prova 2.1": "Contenuto di Prova 2.1",
      "Contenuto di Prova 2.2": "Contenuto di Prova 2.2",
      "Contenuto di Prova 3.1": "Contenuto di Prova 3.1",
      "Contenuto di Prova 3.2": "Contenuto di Prova 3.2"

      //altre stringhe
    }
  },
  en: {
    translation: {
        "Pagina App.js": "App Page",
        "PROVA 1": "TEST 1",
        "PROVA 2": "TEST 2",
        "PROVA 3": "TEST 3",
        "Prova 1.1": "Test 1.1",
        "Prova 1.2": "Test 1.2",
        "Prova 2.1": "Test 2.1",
        "Prova 2.2": "Test 2.2",
        "Prova 3.1": "Test 3.1",
        "Prova 3.2": "Test 3.2",
        "Contenuto di Prova 1.1": "Content of Test 1.1",
        "Contenuto di Prova 1.2": "Content of Test 1.2",
        "Contenuto di Prova 2.1": "Content of Test 2.1",
        "Contenuto di Prova 2.2": "Content of Test 2.2",
        "Contenuto di Prova 3.1": "Content of Test 3.1",
        "Contenuto di Prova 3.2": "Content of Test 3.2"

        //altre tr aduzioni
    }
  }
};

i18n
  .use(initReactI18next) // Collega i18next a React
  .init({
    resources,           // Dizionario lingue
    lng: "it",           // Lingua iniziale
    fallbackLng: "it",   // Lingua di riserva
    interpolation: {
      escapeValue: false // React protegge già dai rischi XSS
    }
  });

export default i18n;
