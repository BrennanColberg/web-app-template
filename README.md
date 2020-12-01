This is my current template for new web apps—it contains all of my favorite technologies, pre-configured to work together so that I can get right into building any new ideas.

Technologies used for adding core functionality:

- React ([npm](https://www.npmjs.com/package/react), [docs](https://reactjs.org/docs)): used for website structure & content
- Next.js ([npm](https://www.npmjs.com/package/next), [docs](https://nextjs.org/docs)): used for server-side rendering
- Firebase ([npm](https://www.npmjs.com/package/firebase), [docs](https://firebase.google.com/docs)): used for storing data, user-based analytics, and authentication
- TailwindCSS ([npm](https://www.npmjs.com/package/tailwindcss), [docs](https://tailwindcss.com/docs)): used for easy, scalable styling

Technologies used for code quality and ease of development:

- Typescript ([npm](https://www.npmjs.com/package/typescript), [docs](https://www.typescriptlang.org/docs)): used to add types to JavaScript (and thereby make it usable)
- ESLint ([npm](https://www.npmjs.com/package/eslint), [docs](https://eslint.org)): used for checking the validity of code syntax
- Prettier ([npm](https://www.npmjs.com/package/prettier), [docs](https://prettier.io/docs/en/index.html)): used for code formatting & style enforcement
- Husky ([npm](https://www.npmjs.com/package/husky), [docs](https://typicode.github.io/husky)): used for running lint / formatting / test / etc before each commit

Accounts that need to be set up for each project:

- [Vercel](https://vercel.com): used for hosting, CI, and performance-based analytics
- [Firebase](https://firebase.google.com): used for storing data, user-based analytics, and authentication

Note: for the code to work properly, replace the `firebaseConfig` object in `firebase/index.ts` with one for a "Web App" in a Firebase project.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
