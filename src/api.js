import axios from "axios"

export const login = async (uName, pWord) => {
    const url = `https://jsonplaceholder.typicode.com/users/1`;

    const data = await axios.get(url);
    return data;
}

export const fetchProtectedResource = async () => {
    const url = `https://jsonplaceholder.typicode.com/users/1/posts`;

    const data = await axios.get(url);
    return data;
}