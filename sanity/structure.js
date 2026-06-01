// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Board Photo')
        .child(
          S.document()
            .schemaType('boardPhoto')
            .documentId('boardPhoto')
        ),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'boardPhoto'
      ),
    ])
