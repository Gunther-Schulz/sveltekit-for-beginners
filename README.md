# SvelteKit For Beginners

Learn full stack web development with SvelteKit.

## Project Setup

🧑‍🤝‍🧑 Clone the project

```sh
git clone https://github.com/joysofcode/sveltekit-for-beginners.git
```

📦️ Install dependencies

```sh
pnpm i
```

## Database

✏️ Rename `.env.example` to `.env`

```
DATABASE_URL="file:./dev.db"
```

🔨 Create the database from the Prisma schema

```sh
pnpm prisma db push
```

🌱 Seed the database

```sh
pnpm prisma db seed
```

🔎 Inspect your database with Prisma Studio

```
pnpm prisma studio
```

## Development

🦄 Start the project and open http://localhost:3000/

```sh
pnpm dev
```

## Production

🔨 Build and preview

```sh
pnpm build && pnpm preview
```
vercel branch test