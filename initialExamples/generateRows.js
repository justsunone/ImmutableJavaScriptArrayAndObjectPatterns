const generateRows = () => {
	const rows = [];

	if (isLoggedIn()) {
		rows.push({
			id: 'welcomeBackMessage',
			content: <WelcomeBackMessage />,
		});
		if (!isVerified()) {
			rows.push({
				id: 'verifyEmailMessage',
				content: <VerifyEmailMessage />,
			});
		}
	} else {
		rows.push({
			id: 'registerMessage',
			content: <RegisterMessage />,
		});
	}

	const country = getCountryFromLocale();
	if (country !== 'US') {
		rows.push({
			id: 'localeDisclaimer',
			content: <LocaleDisclaimer />,
		});
	}

	return rows;
};
