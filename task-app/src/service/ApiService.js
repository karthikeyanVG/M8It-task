export async function signUp(body) {
  try {
    const response = await fetch("http://localhost:8080/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function signIn(email, password) {
  try {
    const response = await fetch("http://localhost:8080/v1/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function getUser() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:8080/v1/profile`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 401) {
      throw new Error("User Unauthorized. Please login again.");
    } else return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function postImg(body) {
  try {
    const response = await fetch("http://localhost:8080/v1/image", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function getallImg() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:8080/v1/getimage`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 401) {
      throw new Error("User Unauthorized. Please login again.");
    } else return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function getPost() {
  try {
    const token = localStorage.getItem("token");
    console.log("token: ", token);
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (response.status === 401) {
      throw new Error("User Unauthorized. Please login again.");
    } else return await response.json();
  } catch (e) {
    throw e;
  }
}
