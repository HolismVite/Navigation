import { List, Text } from '@List'
import UpsertLink from './Upsert'

const headers = <>
    <th>Text</th>
    <th>URL</th>
</>

const row = (item) => <>
    <td>{item.text}</td>
    <td>{item.url}</td>
</>

const Links = () => {
    return <List
        title='Links'
        entityType='Link'
        headers={headers}
        row={row}
        upsert={UpsertLink}
        hasDelete={true}
        hasEdit={true}
    />
}

export default Links