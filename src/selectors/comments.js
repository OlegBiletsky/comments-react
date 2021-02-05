export const getCommentsSelector = (state) => state.comments.comments.database;
export const getPagesSelector = (state) => state.comments.pages;
export const getLastPageSelector = (state) => state.comments.lastPage;
export const getCurrentPageSelector = (state) => { 
    const pages = getPagesSelector(state)
    return pages[pages.length - 1] 
};