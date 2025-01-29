export default function validateBook(req, res, next) {
    const { name, author, publishedYear } = req.body;
    if (!name || !author || !publishedYear) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    next();
}