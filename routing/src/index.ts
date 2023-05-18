import { Hono } from 'hono';
import { cors } from 'hono/cors';

type Post = {
  id: number;
  username: string;
  caption: string;
  id_img: number;
};

type Bindings = {
  ALPINE_DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use(
  '/*',
  cors({
    origin: 'http://localhost:8000',
    allowMethods: ['GET', 'POST', 'OPTIONS'],
  })
);

app.get('/', (c) => c.text('API Contacted'));

app.get('/hello', (c) => c.text('Hello Hono!'));

app.get('/posts', async (c) => {
  const { results } = await c.env.ALPINE_DB.prepare(
    'SELECT * FROM posts'
  ).all();
  return c.json(results, 200);
});

export default app;
