# Jogg Coding Challenge

This coding challenge is to build a list of cards with two different views along with search and filter ability.

## Project Setup

This is a basic site scaffold using Next.js and React. Feel free to read the docs at [Next.js](https://nextjs.org/docs/getting-started). You shouldn't touch `pages/api/cards/index.js`, the file is used to create mockup data for the `/api/cards` endpoint.

### Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## Challenge

Complete the challenge by building out the page according to the Figma mockup

## Details

- API endpoint: GET `/api/cards`
- For tablet/desktop view use 3 cards per row and use 1 card per row for mobile view
- Feel free to use any css library to complete this challenge
- All the svgs are provided in `/svgs`
- Don't worry about the font, use any font that you like
- Use different colors to show different status (`ongoing`, `scheduled`, `ended`)
- Add filter capability
  - ongoing: `#0EA0A0`
  - scheduled: `#F79014`
  - ended: `#EA4A26`
- Other colors:
  - Body background: `#F5F5F5`
  - Heading Font: `#59595B`
  - Active Color: `#C5327B`
  - Primary Color: `#0EA0A0`

## What we are looking for

- **Attention to detail.** Everything in the mockup should match your page, so do your best to match the mockup as closely as possible. This includes colors, spacing, layouts etc. Let us know if we miss providing any value that's blocking you from completing the page.
- **Responsive.** Make sure you use the mobile-first concept to build out the page to make it responsive on mobile, tablet, and desktop. Create your own breakpoints and use any kind of css methodology that you prefer.
- **Interactive.** Make sure your application works smoothly on different browsers with the ability to filter or search cards.
- **Solid fundamentals.** We look for solid frontend fundamentals such as semantic HTML, accessibility, clean css, component reusability, code readability etc. Make sure you build all your components from scratch and do not use any UI library.
- **Scalability.** Make sure the application is scalable as it grows.

## DEMO

A completed demo walkthrough demo video is included in the root folder

## Bonus

- Use Typescript
- Use emotion css library
- Add a loading state before loading the cards
- Use [swr](https://swr.now.sh/) to fetch/cache the data
- Do some cool animation
