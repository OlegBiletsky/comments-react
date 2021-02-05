export const getCommentsSelector = (state) => state.comments.comments.database;
export const getPagesSelector = (state) => state.comments.comments.pages;
export const getLastPageSelector = (state) => state.comments.comments.lastPage;
export const getCurrentPageSelector = (state) => { 
    const pages = getPagesSelector(state)
    return pages[pages.length - 1] 
};