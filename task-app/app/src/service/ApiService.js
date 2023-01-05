export async function signUp(body) {
    try {
      const response = await fetch('/v1/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
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
      const response = await fetch('/v1/user/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
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
      const token = localStorage.getItem('token');
      const response = await fetch(`/v1/profile`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });
      if (response.status === 401) {
        throw new Error('User Unauthorized. Please login again.');
      } else return await response.json();
    } catch (e) {
      throw e;
    }
  
  }

  export async function postImg(body) {
    try {
      const response = await fetch('/v1/image', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });
      return await response.json();
    } catch (e) {
      throw e;
    }
  }