

const BASE_URL = import.meta.env.VITE_API_URL;


console.log(BASE_URL);


export const createUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return response.json();
};


export const getUsers = async () => {

    const response = await fetch(`${BASE_URL}/users`);

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
};


export const updateUser = async ({
  id,
  userData,
}) => {
  const response = await fetch(
    `${BASE_URL}/users/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update user");
  }

  return response.json();
};


export const deleteUser = async (id) => {

    await new Promise((resolve) =>
    setTimeout(resolve, 3000)
  );

  
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }

  return true;
};