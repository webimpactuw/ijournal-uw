import { defineField, defineType } from "sanity";

export default defineType({
  name: "article",
  title: "Article",
  type: "document",

  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),

    defineField({
        name: "featuredArticle",
        title: "Featured Article",
        type: "boolean",
        initialValue: false,
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),

    defineField({
      name: "publishDate",
      title: "Publish Date",
      type: "date",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "image",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt text",
              type: "string",
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "credits",
      title: "Credits",
      type: "array",
      of: [
        {
          type: "block",
        }
      ],
    })
  ],
});