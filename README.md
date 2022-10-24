w

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

Check for provisioned ips

```
fly ips list
```

If needed, provision

```
fly ips allocate-v4
```

Create database

```
fly postgres create
```

✏️ Rename `.env.example` to `.env`
Set the `DATABASE_URL` to the database url from the previous step

If `fly.toml` does not exists, pull

```
fly config save --app sveltekit-for-beginners
```

Set internal and external ports (https://fly.io/docs/postgres/#external-port-configuration)

Deploy fly.toml

```
fly deploy . --app sveltekit-for-beginners --image flyio/postgres:14
```

Update .env with the new database url

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
