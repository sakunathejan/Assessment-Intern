import request from 'supertest';
import app from '../index.js'; 


describe('Books API', () => {
    it('should return an empty array initially', async () => {
        const res = await request(app).get('/books');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
    });

    it('should add a new book', async () => {
        const newBook = { name: 'Test Book', author: 'Test Author', publishedYear: 2023 };
        const res = await request(app).post('/books').send(newBook);
        expect(res.statusCode).toBe(201);
        expect(res.body).toMatchObject(newBook);
    });

    it('should return a 400 error for missing fields', async () => {
        const res = await request(app).post('/books').send({ name: 'Invalid Book' });
        expect(res.statusCode).toBe(400);
    });
});