export const teamMember = {
    name: "teamMember",
    title: "Team Member",
    type: "document",
    fields: [
        { name: "name", title: "Name", type: "string"},
        { name: "role", title: "Role", type: "string"},
        { name: "team", title: "Team", type: "string",
            options: {
                list: [
                    { title: "Executive Team", value: "executiveTeam" },
                    { title: "Design Team", value: "designTeam" },
                    { title: "Reporting Team", value: "reportingTeam" },
                    { title: "Editing Team", value: "editingTeam" },
                    { title: "Communications Team", value: "communicationsTeam" }
                ],
            },
        },
        { name: "photo", title: "Photo", type: "image"},
        { name: "order", title: "Display Order", type: "number"}
    ]
}