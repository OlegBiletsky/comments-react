const BASE = '/api/goods/30/comments';


export const getCommentsFetch = (page) => {
    return fetch(`${BASE}?page=${page}`);
}

export const sendCommentFetch = (values) => {
    return fetch(BASE, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(values),
    });
}
