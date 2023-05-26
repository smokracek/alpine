import { Hono } from 'hono';
import { cors } from 'hono/cors';

type Bindings = {
  ALPINE_DB: D1Database;
};

interface Post {
  id: string;
  username: string;
  caption: string;
  date: number;
}

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
  results?.sort((a, b) => (b as Post).date - (a as Post).date);
  return c.json(results, 200);
});

app.post('/post', async (c) => {
  const post: Post = await c.req.json();
  console.log(post);
  const ok = await c.env.ALPINE_DB.prepare(
    `INSERT INTO posts (id, username, caption, date) VALUES ('${post.id}', '${post.username}', '${post.caption}', ${post.date})`
  ).run();
  return c.json(ok, 200);
});

export default app;
