# Content Guides

## Add Artwork

1. Put the image in `public/images/artwork/`.
2. Add an object to `artwork.ts` inside `artworks`.

```ts
{
  title: "New Artwork Title",
  description: "A short description of the piece.",
  src: "/images/artwork/new-artwork.jpg",
  alt: "Plain-language description of the image",
},
```

## Add Research

Add an object to `research.ts` inside `threads`.

```ts
{
  id: "short-unique-name",
  title: "Research Project Title",
  description: "A short project summary.",
  image: "/images/research/example.jpg",
  imageAlt: "Plain-language description of the image",
  link: "https://example.com",
  imagePlacement: "left",
},
```

`image`, `imageAlt`, `link`, and `imagePlacement` are optional.

## Add Home Page Box

Add one object to `home.ts` inside `sections`.

```ts
{
  title: "New Text Box",
  kind: "text",
  body: "A short paragraph for the homepage.",
},
```

```ts
{
  title: "New List Box",
  kind: "list",
  items: ["First item", "Second item", "Third item"],
},
```

## Update Contact

Add one object to `contact.ts` inside `coordinates.items`.

```ts
{
  label: "Website",
  value: "example.com",
  href: "https://example.com",
},
```

Leave out `href` when the text should not be clickable.
