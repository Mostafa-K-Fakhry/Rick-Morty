const getIdFromUrl = (url) => {

    if (!url) {
        return null;
    }

    return url.split("/").pop();
};


export {
    getIdFromUrl
};