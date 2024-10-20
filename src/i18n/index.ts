import english from '@i18n/en.json';
import spanish from '@i18n/es.json';
import germany from '@i18n/de.json';

const LANG = {
	ENGLISH: 'en',
	SPANISH: 'es',
	GERMANY: 'de',
};

export const getI18N = ({
	currentLocale = 'es',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.GERMANY) return {...spanish, ...germany};
	if (currentLocale === LANG.ENGLISH) return {...spanish, ...english};
	return spanish;
};