const BASE_URL = "https://jsonplaceholder.typicode.com";

// GET - Get users
export async function getUsers() {
  const response = await fetch(`${BASE_URL}/users`);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

// POST - Create user
export async function createUser(user) {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return response.json();
}

// PUT - Update complete user
export async function updateUser(id, user) {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  return response.json();
}

// PATCH - Update partial user
export async function patchUser(id, data) {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to partially update user");
  }

  return response.json();
}

// DELETE - Delete user
export async function deleteUser(id) {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }

  return true;
}