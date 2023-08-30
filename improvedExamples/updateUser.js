/**
 * Building a Complex Object Once
 * - Pattern for building a complex object with a clear shape
 *
 * What problems can this pattern solve?
 * 	- Avoid mutating object fields
 * 	- Avoid unnecessary state
 *  - Avoid confusing object shapes
 *
 * What solution does this pattern describe?
 * 	- Use operators for computing shallow fields (e.g. ternary, nullish coalescing, optional chaining)
 * 	- Use functions for computing nested fields
 *  - Return complete object at creation
 */

function updateUser(user) {
	const { id, age, height } = user;

	const ageGroup = age <= 19 ? { ageGroup: 'teen' } : null;

	return {
		...user,
		id: id ?? generateId(),
		...ageGroup,
		height: height ?? 'MISSING FIELD',
		...getUpdatedUserAddress(user),
	};
}

function getUpdatedUserAddress(user) {
	const { address } = user;

	return {
		address: {
			...address,
			street: address?.street ?? 'MISSING FIELD',
		},
	};
}
