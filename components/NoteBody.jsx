import { createContext } from 'react'
import * as P from '@udecode/plate'

const NoteContext = createContext()

function LinkElement({ attributes, children, element, nodeProps }) {
  return (
    <a href={element.url} {...attributes} {...nodeProps}>{children}</a>
  )
}

const plugins = [
  P.createReactPlugin(),
  P.createHistoryPlugin(),
  P.createHeadingPlugin({ levels: 3 }),
  P.createParagraphPlugin(),
  P.createBoldPlugin(),
  P.createItalicPlugin(),
  P.createUnderlinePlugin(),
  P.createCodePlugin(),
  P.createHighlightPlugin(),
  P.createBlockquotePlugin(),
  P.createCodeBlockPlugin(),
  P.createListPlugin(),
  P.createTodoListPlugin(),
  P.createImagePlugin(),
  P.createLinkPlugin(),
];

const components = P.createPlateComponents({
  [P.ELEMENT_LINK]: LinkElement
});

const options = P.createPlateOptions();

export default function NoteBody({ conceptPrefix, json }) {
  return (
    <NoteContext.Provider value={{ conceptPrefix }}>
      <P.Plate initialValue={JSON.parse(json)}
        editableProps={{ readOnly: true }}
        components={components}
        options={options}
        plugins={plugins}/>
    </NoteContext.Provider>
  )
}