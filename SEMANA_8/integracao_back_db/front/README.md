This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


#### PLUGINS
```
npx eslint --init

npm install eslint-plugin-react-hooks --save-dev

npm install eslint-plugin-import-helpers --save-dev
```

##### Alterar arquivo eslintrc.json
```
{
	"env": {
		"browser": true,
		"es2021": true
	},
	//para detectar a versão do react
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"react",
		"react-hooks"
	],
	"rules": {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		//desabilitar regra que obriga a importação do react na pagina
		"react/react-in-jsx-scope": "off"
	}
}
```


#### PRETTIER
Cria um arquivo na raiz do projeto ".prettierrc" e criar configurações.

#### INTEGRAR PRETTIER E ESLINT
```
npm install --save-dev eslint-config-prettier

npm install --save-dev eslint-plugin-prettier
```

No arquivo ".eslintrc.json" adiciona:
```
"plugins": [
		"prettier"
	],
	"rules": {
		"prettier/prettier": "error"
	}
```
#### eslint-plugin-import-helpers
No arquivo ".eslintrc.json" adiciona:
