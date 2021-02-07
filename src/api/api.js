export const getCommentsFetch = (page) =>
    fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${page}`);

export const sendCommentFetch = (values) =>
    fetch(`https://jordan.ashton.fashion/api/goods/30/comments`, {
        // mode: "no-cors",

        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Origin": "http://localhost:3000",
        },
        body: JSON.stringify(values),
    });
