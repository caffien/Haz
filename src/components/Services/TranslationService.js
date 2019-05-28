import i18n from '../../i18n';

export default function translate(textNeedsToBeTranslated) {
    console.log(i18n);
    return i18n.t(textNeedsToBeTranslated);
}
