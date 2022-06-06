import { List, ItemAction } from '@List'
import LinkIcon from '@mui/icons-material/Link';

const headers = <>
    <th>Title</th>
</>

const row = (item) => <>
    <td>{item.title}</td>
</>

const itemActions = (item) => <>
    <ItemAction
        title='Manage links'
        icon={LinkIcon}
        goTo={`/links?linkGroupId=${item.id}`}
    />
</>

const LinkGroups = () => {
    return <List
        title='Link groups'
        entityType='LinkGroup'
        headers={headers}
        row={row}
        itemActions={itemActions}
    />
}

export default LinkGroups