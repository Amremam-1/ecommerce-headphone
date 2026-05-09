import { defineType, defineField } from "sanity"

export default defineType({
  name: "product",
  title: "Product",
  type: "document",

  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hostpot: true,
      },
    }),

    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),

    defineField({
      name: "details",
      title: "Details",
      type: "string",
    }),

    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(0).max(5),
    }),
  ],
})
