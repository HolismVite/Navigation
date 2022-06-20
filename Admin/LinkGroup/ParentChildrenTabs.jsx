import { Tabs, Tab } from '@Tab'
import UpsertLinkGroup from './Upsert'
import Links from '../Link/List'

const tabs = <>
    {/* <Tab
        title="Group"
        panel={UpsertLinkGroup()}
    />
    <Tab
        title="Links"
        panel={Links()}
    /> */}
</>

const LinkGroupAndLinksTabs = () => {
    return <Tabs
        title="Manage federal links"
        tabs={tabs}
    />
}

export default LinkGroupAndLinksTabs