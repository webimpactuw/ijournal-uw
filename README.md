This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Description 

Official code repository of the iJournal website, built using Next.js, Sanity CMS, and MongoDB.

## Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## File Structure

```
[website]/
├── app/
│   ├── about/
│   │   └── page.js                   # About page
│   ├── api/
│   │   ├── comments/
│   │   │   └── route.js              # Comments API route
│   │   └── reactions/
│   │       └── route.js              # Reactions API route
│   ├── articles/
│   │   ├── [slug]/
│   │   │   └── page.js               # Individual article page
│   │   └── page.js                   # Articles page
│   ├── journals/
│   │   ├── JournalFlipbook.js        # PDF flipbook viewer component
│   │   └── page.js                   # Journals page
│   ├── studio/[[...tool]]/
│   │   └── page.jsx                  # Sanity Studio embedded route
│   ├── globals.css                   # Global styles
│   ├── layout.js                     # Root layout
│   └── page.js                       # Homepage
├── Components/
│   ├── AddComment.js                 # Comment submission form
│   ├── CommentSection.js             # Comment section container
│   ├── Display.js                    # Content display component
│   ├── FeaturedArticles.js           # Featured articles section
│   ├── Footer.js                     # Global footer
│   ├── Homepage.js                   # Homepage content
│   ├── IndividualComment.js          # Comment display
│   ├── Navbar.js                     # Global navbar
│   └── Reactions.js                  # Article reactions
├── lib/
│   └── mongodb.js                    # MongoDB connection
├── models/
│   └── Comment.js                    # Comment data model
├── public/                           # Static assets (fonts, logos, images)
├── sanity/
│   ├── lib/
│   │   ├── client.js                 # Sanity client config
│   │   ├── image.js                  # Sanity image helper
│   │   └── live.js                   # Sanity live preview
│   └── schemaTypes/
│       ├── article.js                # Article schema
│       ├── boardPhoto.js             # Board photo schema
│       ├── index.js                  # Schema index
│       ├── journal.js                # Journal schema
│       └── teamMember.js             # Team member schema
├── next.config.mjs                   # Next.js config
├── sanity.cli.js                     # Sanity CLI config
└── sanity.config.js                  # Sanity studio config
```
