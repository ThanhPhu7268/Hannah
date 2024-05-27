import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "Home": "Home",
            "Facial": "Facial",
            "Hair": "Hair",
            "Body": "Body",
            "Learn": "Learn"
        }
    },
    vn: {
        translation: {
            "Home": "Trang chủ",
            "Facial": "Facial",
            "Hair": "Hair",
            "Body": "Body",
            "Learn": "Learn"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;