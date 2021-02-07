export const getCommentsFetch = (page) => fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${page}`);

export const sendCommentFetch = (values) => fetch(    
    `https://jordan.ashton.fashion/api/goods/30/comments`,
    {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(values)
    }
);