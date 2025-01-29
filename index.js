import express from 'express';
import cors from 'cors';
import booksRoutes from './Routes/booksRouter.js';
import errorMiddleware from './Middlewares/errorMiddleware.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/books', booksRoutes);
app.use(errorMiddleware);

export default app;

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is running on port 3000`);
    });
}