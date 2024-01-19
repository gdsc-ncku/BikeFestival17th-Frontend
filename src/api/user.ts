interface User {
    name: string;
}

interface Token {
    access_token: string;
    refresh_token: string;
}

interface Response<T> {
    msg: string;
    data: T
}

export const profile = async (user: User): Promise<Response<User>> => {
    const response = await fetch('http://localhost:8000/users/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
        credentials: 'include'
    });

    return response.json();
}
