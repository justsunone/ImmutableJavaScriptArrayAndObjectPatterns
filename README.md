# Immutable JavaScript Array & Object Patterns

## Purpose
- Source code for: https://youtube.com/watch?v=djhrfveeBbs
- Several array/object patterns I created to help with writing clean immutable JavaScript code.

## Prerequisites

-   **Basic understanding of immutability**
    -   Objects: Avoid modifying fields directly. Create a new object while copying over all levels of nesting.
    -   Arrays: Avoid directly updating array items or using mutating methods such as push. Create a new array copy and/or use immutable methods such as map.
    -   https://www.youtube.com/watch?v=V0brGYlnWXA
    -   https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns

## Patterns

| Pattern                               | Description                                              | What problems can this pattern solve?                                                                                    | What solution does this pattern describe?                                                                                                                                                                                                                                                  |
| ------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Building a Complex Object Once        | Pattern for building a complex object with a clear shape | - Avoid mutating object fields<br>- Avoid unnecessary state<br>- Avoid confusing object shapes                           | - Use operators for computing shallow fields (e.g. ternary, nullish coalescing, optional chaining)<br>- Use functions for computing nested fields<br>- Return complete object at creation                                                                                                  |
| Building an Array with Optional Items | Pattern for building an array with optional items        | - Avoid mutating array methods<br>- Avoid unnecessary state<br>- Avoid confusing array contents                          | - Define an array containing all potential items<br>- For each item, indicate whether it should be included<br> - Idea 1) Add a field to indicate if it should be included<br> - Idea 2) Include the item or null ([myVal1, condition ? 'myVa2' : null])<br>- Return filtered/mapped array |
| Declaratively Transforming an Array   | Pattern for transforming an array declaratively          | - Avoid mutating array methods<br>- Avoid unnecessary state<br>- Avoid combined transformation and result creation logic | - Define a transformation object (e.g. { myField: myNewField() })<br>- Use map/flatMap using the transformation object                                                                                                                                                                     |
