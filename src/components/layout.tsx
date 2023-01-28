import * as React from 'react'
import { Link } from 'gatsby'
import { home, container, navbar, navbarList, navItem, navLinkText} from "./layout.module.css"

type Page = {
    name: string
    url: string
}

const MainPages : Page[] = [
    {
        name: "About Me",
        url: "/about"
    },
    {
        name: "Blog",
        url: "/blog"
    }
]

export function Layout ({ pageTitle , children } : { pageTitle?: string, children: React.ReactNode }) {
    return (
        <div className={container}>
            <nav><div className={navbar}>
                <div className={home}>
                    <a>Hi I'm AusCyber</a>
                </div>
                <div className={navbarList}>

                {
                    MainPages.map((thing) => 
                        <div className={navItem}><Link to={thing.url} className={navLinkText}> {thing.name}</Link></div>
                    )
                } 
                </div>
                </div></nav>
                <main>
                    {pageTitle ? <h1>{pageTitle}</h1> : null}
                    {children}
                </main>
        </div>
    )
}