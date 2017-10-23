import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className=''>
            <Link className='navbar-brand' to={'/'}>GameDiscovery</Link>
        </div>;
    }
}
