let books = [];

export const getAllBooks = (req, res) => {
    res.json(books);
};

export const getBookById = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
};

export const addBook = (req, res) => {
    const { name, author, publishedYear } = req.body;
    const newBook = { id: books.length + 1, name, author, publishedYear };
    books.push(newBook);
    res.status(201).json(newBook);
};

export const updateBook = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: 'Book not found' });
    
    const { name, author, publishedYear } = req.body;
    if (name) book.name = name;
    if (author) book.author = author;
    if (publishedYear) book.publishedYear = publishedYear;
    
    res.json(book);
};

export const deleteBook = (req, res) => {
    books = books.filter(b => b.id !== parseInt(req.params.id));
    res.json({ message: 'Book deleted' });
};
