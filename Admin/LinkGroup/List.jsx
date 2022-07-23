import { List, EntityAction } from '@List'
import LinkIcon from '@mui/icons-material/Link';
import UpsertLinkGroup from './Upsert';

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

const LinkGroups = ({ isSuperAdmin }) => {
    return <List
        title='Link groups'
        entityType='LinkGroup'
        headers={headers}
        row={row}
        create={isSuperAdmin && UpsertLinkGroup}
        edit={UpsertLinkGroup}
        entityActions={entityActions}
    />
}

export default LinkGroups