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

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
    code?: number;
}

export const profile = async (): Promise<ApiResponse<User>> => {
    const response = await fetchApi<User>('http://localhost:8000/users/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });

    return response;
}

export async function fetchApi<T>(
    url: string,
    options?: RequestInit,
    timeout?: number,
): Promise<ApiResponse<T>> {
    if (timeout !== undefined) {
        const controller = new AbortController();
        setTimeout(() => {
            controller.abort();
        }, timeout);
    }
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const data = await response.json();
            return {
                success: false,
                error: data.msg || response.statusText,
                code: response.status,
            };
        }

        const data = await response.json();
        return {
            success: true,
            data: data.data,
            code: response.status,
            message: data.msg,
        };
    } catch (error) {
        return {
            success: false,
            error: (error instanceof Error ? error.message : "Something went wrong"),
        };
    }
}