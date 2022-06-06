import { Tree } from '@List'
import UpsertMenuItem from './Upsert'

const MenuItems = () => {
    return <Tree
        title='Menu'
        entityType='MenuItem'
        show={item => {
            if (item.isDirectory) {
                return item.title
            }
            return <a target='_blank' className="link" href={item.url}>{item.title}</a>
        }}
        upsert={UpsertMenuItem}
        hasEdit={true}
        hasDelete={true}
    />
}

export default MenuItems