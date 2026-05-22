export const journal = {
    name: "journal",
    title: "Journal",
    type: "document",

    fields: [
        { name: "title", title: "Title", type: "string"},
        { name: "pdf", title: "PDF File", type: "file"},
        { name: "coverImage", title: "Cover Image", type: "image"},
        { name: "edition", title: "Edition", type: "number"},
        { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } }
    ]
}
