import React, { Component } from 'react';
import {
    Nav,NavItem, NavLink
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <Nav vertical>
                    <NavItem>
                        <NavLink href="#">
                            Link
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            Link
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            Another Link
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            disabled
                            href="#"
                        >
                            Disabled Link
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}