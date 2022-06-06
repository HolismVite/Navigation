import NavigationIcon from '@mui/icons-material/Navigation';
import LinkGroups from './LinkGroup/List'
import Links from './Link/List'
import MenuItems from './MenuItem/Tree'
import LinkGroupAndLinks from './LinkGroup/ParentChildren'
import LinkGroupAndLinksTabs from './LinkGroup/ParentChildrenTabs'

const NavigationRoutes = [
    {
        path: "/linkGroups",
        component: LinkGroups
    },
    {
        path: "/links",
        component: Links
    },
    {
        path: "/linkGroupAndLinks",
        component: LinkGroupAndLinks
    },
    {
        path: "/linkGroupAndLinksTabs",
        component: LinkGroupAndLinksTabs
    },
    {
        path: "/menuItems",
        component: MenuItems
    }
]

const NavigationMenu = [
    {
        title: "Navigation",
        icon: NavigationIcon,
        children: [
            {
                title: "Menu",
                url: "/menuItems"
            },
            {
                title: "Link groups",
                url: "/linkGroups"
            }
        ]
    },

]

export { NavigationRoutes }
export { NavigationMenu }