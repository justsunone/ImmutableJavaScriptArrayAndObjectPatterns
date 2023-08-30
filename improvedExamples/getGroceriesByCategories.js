/**
 * Declaratively Transforming an Array
 * - Pattern for transforming an array declaratively and immutably
 *
 * What problems can this pattern solve?
 * 	- Avoid mutating array methods
 *  - Avoid unnecessary state
 * 	- Avoid combined transformation and result creation logic
 *
 * What solution does this pattern describe?
 * 	- Define a transformation object (e.g. myField: myNewField())
 *	- Use map/flatMap using the transformation object
 */

function getGroceriesByCategories(categories) {
	const GROCERY_OPTIONS = {
		dairy: ['milk', 'cheese'],
		cereal: ['Frosted Flakes', 'Captain Crunch', 'Cinnamon Toast Crunch'],
		seafood: ['shrimp', 'fish', 'clam'],
	};

	return categories.flatMap((category) => GROCERY_OPTIONS[category] ?? []);
}

function getGroceriesByCategories2(categories) {
	const GROCERY_OPTIONS = {
		dairy: 'DAIRY',
		cereal: 'CEREAL',
		seafood: 'SEAFOOD',
	};

	return categories
		.map((category) => GROCERY_OPTIONS[category])
		.filter(Boolean);
}
