export const boardPhoto = {
    name: "boardPhoto",
    title: "ExecutiveBoard Photo",
    type: "document",
    fields: [
        {
            name: "photo",
            title: "Board Group Photo",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                    description: "Describe the photo for accessibility",
                },
            ],
        },
        {
            name: "caption",
            title: "Caption",
            type: "string",
        },
    ],
}