function getGroceriesByCategories(categories) {
	let groceries = [];

	categories.forEach((category) => {
		if (category === 'dairy') {
			groceries = [...groceries, 'milk', 'cheese'];
		} else if (category === 'cereal') {
			groceries = [
				...groceries,
				'Frosted Flakes',
				'Captain Crunch',
				'Cinnamon Toast Crunch',
			];
		} else if (category === 'seafood') {
			groceries = [...groceries, 'shrimp', 'fish', 'clam'];
		}
	});

	return groceries;
}
