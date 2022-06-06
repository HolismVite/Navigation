import UpsertLinkGroup from "./Upsert"
import Links from "../Link/List"

const LinkGroupAndLinks = () => {
    return <div>
        <UpsertLinkGroup
            large={true}
        />
        <Links />
    </div>
}

export default LinkGroupAndLinks