import Home from "./Home.svelte"
import Accounts from "./Accounts.svelte"
import Blockchain from "./Blockchain.svelte"
import NotFound from "./NotFound.svelte"

export default [    
    {
        path: "/accounts-demo",
        component: Accounts
    },
    {
        path: "/blockchain-demo",
        component: Blockchain
    },
    {
        path: "/",
        component: Home
    },
    {
        path: "*",
        component: NotFound
    }
]