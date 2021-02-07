
const DOMAIN = process.env.NODE_ENV === "development" ? '' : 'https://jordan.ashton.fashion';
const BASE = '/api/goods/30/comments';


export const getCommentsFetch = (page) => {
    return fetch(`${DOMAIN}${BASE}?page=${page}`);
}

export const sendCommentFetch = (values) => {
    return fetch(`${DOMAIN}${BASE}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(values),
    });
}
