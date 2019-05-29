import i18n from '../../i18n';

export default function translate(textNeedsToBeTranslated) {
    console.log(i18n);
    return i18n.t(textNeedsToBeTranslated);
}

export function getCurrentLanguage() {
    return i18n.language;
}

export function changeSystemLanguage(language) {
    console.log(i18n.changeLanguage);
    i18n.locale = language;
    return i18n.changeLanguage(language);
}
