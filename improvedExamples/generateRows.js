/**
 * Building an Array with Optional Items
 * - Pattern for building an array with optional items immutably
 *
 * What problems can this pattern solve?
 * 	- Avoid mutating array methods
 * 	- Avoid unnecessary state
 *  - Avoid confusing array contents
 *
 * What solution does this pattern describe?
 * 	- Define an array containing all potential items
 *  - For each item, indicate whether it should be included:
 * 		 Idea 1) Add a field to indicate if it should be included
 *     Idea 2) Include the item or null ([myVal1, condition ? 'myVa2' : null])
 *  - Return filtered/mapped array
 */

const generateRows = () => {
	const rows = [
		{
			id: 'welcomeBackMessage',
			content: <WelcomeBackMessage />,
			shouldDisplay: isLoggedIn(),
		},
		{
			id: 'verifyEmailMessage',
			content: <VerifyEmailMessage />,
			shouldDisplay: isLoggedIn() && !isVerified(),
		},
		{
			id: 'registerMessage',
			content: <RegisterMessage />,
			shouldDisplay: !isLoggedIn(),
		},
		{
			id: 'localeDisclaimer',
			content: <LocaleDisclaimer />,
			shouldDisplay: getCountryFromLocale() !== 'US',
		},
	];

	return rows
		.filter((row) => row.shouldDisplay)
		.map(({ shouldDisplay, ...other }) => ({ ...other }));
};
