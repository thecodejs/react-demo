import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../../constants'


export function Nav() {
    return (
        <ul className='flex flex-row gap-x-4'>
            {
                ROUTES.map(route => <NavLink key={route.path} path={route.path} title={route.title} />)
            }
        </ul>
    )
}

function NavLink({ path, title }) {
    const { pathname } = useLocation()
    return (
        <li>
            <Link to={path} className={pathname === path ? 'text-red-500' : ''}>{title}</Link>
        </li>
    )
}