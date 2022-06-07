import { List, EntityAction } from '@List'
import LinkIcon from '@mui/icons-material/Link';

const headers = <>
    <th>Title</th>
</>

const row = (item) => <>
    <td>{item.title}</td>
</>

const entityActions = (item) => <>
    <EntityAction
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
        entityActions={entityActions}
    />
}

export default LinkGroups