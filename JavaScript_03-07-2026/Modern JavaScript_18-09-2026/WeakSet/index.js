// JavaScript WeakSet

// 1. Create objects

const user1 = {
    name: "Krishna"
};

const user2 = {
    name: "Rahul"
};

const user3 = {
    name: "John"
};


// 2. Create WeakSet

const users = new WeakSet();


// 3. add()

users.add(user1);
users.add(user2);
users.add(user3);

console.log("Objects added to WeakSet");


// 4. has()

console.log("User1 exists:", users.has(user1));

console.log("User2 exists:", users.has(user2));


// 5. delete()

users.delete(user2);

console.log("After deleting User2:");

console.log("User2 exists:", users.has(user2));


// 6. User3 still exists

console.log("User3 exists:", users.has(user3));