# Astro SupaBase Simple Authentification

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/hamer1818/AstroLoginRegister)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/hamer1818/AstroLoginRegister/master?import=true)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/hamer1818/AstroLoginRegister)

## 🚀 Project Structure

```bash
AstroLoginRegister/
├─ .env
├─ astro.config.mjs
├─ package.json
├─ pnpm-lock.yaml
├─ public/
│  └─ favicon.svg
├─ README.md
├─ src/
│  ├─ env.d.ts
│  ├─ layouts/
│  │  └─ Layout.astro
│  ├─ lib/
│  │  └─ supabase.ts
│  ├─ middleware.ts
│  └─ pages/
│     ├─ dashboard.astro
│     ├─ en/
│     │  ├─ dashboard.astro
│     │  ├─ index.astro
│     │  ├─ register.astro
│     │  └─ signin.astro
│     ├─ index.astro
│     ├─ register.astro
│     └─ signin.astro
├─ tailwind.config.mjs
└─ tsconfig.json
```


## Description

This is a simple example of how to use SupaBase Authentification with Astro.

## How to use

1. Clone this repository `git clone https://github.com/hamer1818/AstroLoginRegister.git` or `pnpm create astro@latest --template hamer1818/AstroLoginRegister#master` to create a new project.
2. Run `npm install` , `pnpm install` or `yarn install` to install the dependencies. (You can use any package manager you want but I recommend using `pnpm` because it's faster than `npm` and `yarn`).
3. Create a `.env` file in the root of the project and add the following variables:

```bash
SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

4. Run `npm run dev` , `pnpm dev` or `yarn dev` to start the development server.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.




| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |


## 👀 Want to learn more?
Feel free to check [our documentation](https://yazilimrehberi.dev) or jump into our [Discord server](https://astro.build/chat).