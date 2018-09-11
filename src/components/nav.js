import React from 'react'
import Link from 'gatsby-link'

class Nav extends React.Component {

    state = { showMenu: false }

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render() {
        const menuActive = this.state.showMenu ? 'is-active' : '';
        const burgerActive = this.state.showMenu ? 'is-active' : '';
        return (
            <nav className="main-nav">
                <div className="container">
                    <div className={`navbar-burger burger ${burgerActive}`} onClick={this.toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>


                    <div className={`navbar-menu ${menuActive}`} >
                        <ul>
                            <li>
                                <Link exact to="/" activeClassName="active" onClick={this.toggleMenu}>Startseite</Link>
                            </li>
                            <li>
                                <Link exact to="/zimmer/" activeClassName="active" onClick={this.toggleMenu}>Die Zimmer</Link>
                            </li>
                            <li>
                                <Link exact to="/buchung/" activeClassName="active" onClick={this.toggleMenu}>Buchungsinfos</Link>
                            </li>
                            <li>
                                <Link exact to="/leezen/" activeClassName="active" onClick={this.toggleMenu}>Leezen &amp; Umgebung</Link>
                            </li>
                            <li>
                                <Link exact to="/klinik-leezen/" activeClassName="active" onClick={this.toggleMenu}>Klinik Leezen</Link>
                            </li>
                            <li>
                                <Link exact to="/anfahrt/" activeClassName="active" onClick={this.toggleMenu}>Anfahrt</Link>
                            </li>
                            <li>
                                <Link exact to="/kontakt/" activeClassName="active" onClick={this.toggleMenu}>Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};

export default Nav;
