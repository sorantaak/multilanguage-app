import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
	en: {
		translation: {
			"hello": "hello",
            "bye":"bye",
            "message":"first message {{ m1 }} and second message:{{ m2 }}"
		},
	},
	fa: {
		translation: {
			"hello": "سلام",
               "bye":"خداحافظ",
            "message":"سلام پیام:{{ m1 }} و سلام پیام {{ m2 }}"
		},
	},
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: resources,
		fallbackLng: "fa",
		// lng: "fa", when use LanguageDetector, we do not need this option
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
