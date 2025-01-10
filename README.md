# TypeScript

TypeScript is a language built on JavaScript to give extra features and primarily the ability to specify the data types to variable or values.
 
### Benefits of TypeScript
1.	It provides better error feedback: When data types are specified ahead of time, this will give us good error feedback as we code. If we make a mistake along the line assigning data of a type different from the specified type to a variable, an error will be flagged and this can be corrected before it leads to a bigger error.
 
2.	We get better auto-completion and code hints: When we define the types of every bit of data we use in TypeScript, we then get better feedback when we try to use a method or property that is not available for each data.
3.	TypeScript allows us to make custom types in addition to the standard types: These custom data types can be created using “interfaces”, “classes”, and “aliases”
 
4.	TypeScript code is essentially self-documenting: Because the data type of each data being used is explicitly defined, it is easy to look up these different types, functions and other definitions when needed.

### TypeScript Installation via npm
Run ```npm install –g typescript``` inside a terminal.

To run a TS file on the computer, we first need to compile the TS file to JS and then run the following scripts:
```
  tsc [filename]
  node [compiled js file]
```

To make this process more seamless, execute the following steps:

i.	Initialize TypeScript compiler and create a “tsconfig.json” file by running the script
```
  tsc --init
```

ii.	Inside the “tsconfig.json” file, uncomment both the “root” and “out” directories and assign them the following values:
```
  "rootDir": "./src",
  "outDir": "./dist",
```

iii.	Create an “src” folder and a “dist” folder, move the ts file into the “src” folder, and open the terminal to run: > tsc --watch.
This command runs the TypeScript compiler automatically and every time a change is made in the file, the compiler automatically runs.
iv.	Open another terminal and create a similar watch command for node to watch the compiled js files and rerun the script automatically every time a change is made. To do this, run the script: > node --watch dist/[compiled js file]
DataTypes in TypeScript
We have “string”, “number”, and “Boolean”. We also have “null” and “undefined”, both of which represent a lack of value, but with a small distinction. When we assign the value “null” to a variable, we are intentionally providing the absence of actual value to the variable, but when the variable is “undefined” in that we did not assign a value whatsoever to the variable, that is more of an unintentional lack of value. So once a variable is explicitly “undefined” or assigned the value “null”, it cannot be changed.
 
Other data types in TypeScript are “arrays” and “object literals”. In TypeScript, type inference also happens with arrays, whereby TypeScript infers the type of data in the array.
 
Another datatype in TypeScript is “any”. Assigning the data type “any” to a variable means that the data type of the variable can be changed in the future.
 
Another datatype in TypeScript is “tuple”. This datatype is like an array, but whereas an array typically is a collection of values of a particular type in no specific order, tuple is an array of values of different data types in a very specific order.
 
 
Interfaces
This is a way of defining a certain structure that other data structures can adhere to, be it classes, object literals, or even other interfaces.
 
 
Type Alias
Although this is similar to “interfaces”, there are some slight differences. When making a type alias, it is defined using the keyword “type” and it is set equal to the custom type using the assignment operator, unlike interfaces that have no assignment operator.
 
 
Union Types
This is a way for us to let TypeScript know that a defined variable of value can be one of several data types.
When using union type in a function, it is important to note that we can only use props and methods that are common to the types of those passed in function.
Say for instance, we passed union types of “string” and “number” for a function, we cannot use the “parseInt()” method inside the function as a method for the parameter. This is because the “parseInt()” method is applicable to string of numbers, and cannot be applied to actual numbers.
