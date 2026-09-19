// JavaScript WeakMap

// 1. Create objects

const user1 = {
    name: "Krishna"
};

const user2 = {
    name: "Rahul"
};


// 2. Create WeakMap

const users = new WeakMap();


// 3. set()

users.set(user1, "Student");

users.set(user2, "Developer");

console.log("WeakMap created");


// 4. get()

console.log("User1:", users.get(user1));

console.log("User2:", users.get(user2));


// 5. has()

console.log("User1 exists:", users.has(user1));

console.log("User2 exists:", users.has(user2));


// 6. delete()

users.delete(user2);

console.log("After deleting User2:");

console.log("User2 exists:", users.has(user2));


// 7. Object can be used as key

const user3 = {
    name: "John"
};

users.set(user3, "Manager");

console.log("User3:", users.get(user3));