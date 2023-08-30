function updateUser(user) {
	const { id, address, age, height } = user;
	let updatedUser = { ...user };

	if (!id) {
		updatedUser = {
			...updatedUser,
			id: generateId(),
		};
	}

	if (!address.street) {
		updatedUser = {
			...updatedUser,
			address: {
				...address,
				street: 'MISSING FIELD',
			},
		};
	}

	if (age <= 19) {
		updatedUser = {
			...updatedUser,
			ageGroup: 'teen',
		};
	}

	if (!height) {
		updatedUser = {
			...updatedUser,
			height: 'MISSING FIELD',
		};
	}

	return updatedUser;
}
