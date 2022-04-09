const getAllArticles = (req, res, next) => {
    res.send('all items from the new file');
};

const createArticle = (req, res, next) => {
    res.json(req.body);
};

const getArticle = (req, res, next) => {
    res.json({ id: req.params.id });
};

const updateArticle = (req, res, next) => {
    res.send('update article');
};

const deleteArticle = (req, res, next) => {
    res.send('delete article');
};

module.exports = {
    getAllArticles,
    createArticle,
    getArticle,
    updateArticle,
    deleteArticle
};