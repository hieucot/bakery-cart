import React, { Component } from 'react';
import CartContainer from './../containers/CartContainer';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className="nav__top">
                        <div className="grid wide">
                            <div className="nav__container">
                                <div className="nav-location">
                                    <div className="nav-location__wrap">
                                        <i className='bx bx-map'></i>
                                        <a href="# ">
                                            523 Sylvan Ave
                                            <br />
                                            Mountain View, CA 94041 USA
                                        </a>
                                    </div>

                                </div>
                                <div className="nav-logo">
                                    <a href="/ " className="nav-logo__link">
                                        <img className="nav-logo__img" src="./assets/images/logo.png" alt="Logo" />
                                    </a>
                                </div>
                                <div className="nav-button">
                                    <a href="# " className="btn btn--sm btn--outline btn--zakaria">
                                        <i className='bx bx-mail-send'></i>
                                        Get in touch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav__main">
                        <div className="grid wide">
                            <div className="nav__container">
                                <div className="nav__mobile">
                                    <button className="nav-button__toggle">
                                        <span></span>
                                    </button>
                                    <div className="nav-logo__mobile">
                                        <a href="/" className="nav-logo__link">
                                            <img className="nav-logo__img" src="./assets/images/logo.png" alt="Logo" />
                                        </a>
                                    </div>
                                </div>
                                <div className="nav-menu">
                                    <ul className="nav-menu__list">
                                        <li className="nav-menu__item active">
                                            <a href="/" className="nav-menu__link">Home</a>
                                        </li>
                                        <li className="nav-menu__item">
                                            <div className="nav-menu__box">
                                                <a href="/" className="nav-menu__link">Gallery</a>
                                                <i className='bx bx-chevron-down nav-menu__icon'></i>
                                            </div>
                                            <ul className="nav-dropdown">
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">Grid Gallery</a>
                                                </li>
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">Grid Fullwidth Gallery</a>
                                                </li>
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">Masonry Gallery</a>
                                                </li>
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">Masonry Fullwidth Gallery</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-menu__item">
                                            <div className="nav-menu__box">
                                                <a href="/" className="nav-menu__link">Shop</a>
                                                <i className='bx bx-chevron-down nav-menu__icon'></i>
                                            </div>
                                            <ul className="nav-dropdown">
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">Grid Shop</a>
                                                </li>
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">Shop list</a>
                                                </li>
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">Single Product</a>
                                                </li>
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">Cart page</a>
                                                </li>
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">Check out</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-menu__item">
                                            <div className="nav-menu__box">
                                                <a href="/" className="nav-menu__link">Blog</a>
                                                <i className='bx bx-chevron-down nav-menu__icon'></i>
                                            </div>
                                            <ul className="nav-dropdown">
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">Grid Blog</a>
                                                </li>
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">Blog list</a>
                                                </li>
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">Blog post</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-menu__item">
                                            <div className="nav-menu__box">
                                                <a href="/" className="nav-menu__link">Pages</a>
                                                <i className='bx bx-chevron-down nav-menu__icon'></i>
                                            </div>
                                            <ul className="nav-dropdown">
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">What we offer</a>
                                                </li>
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">Our team</a>
                                                </li>
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">Testimonials</a>
                                                </li>
                                                <li className="nav-dropdown__item">
                                                    <a href="# ">Pricing list</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-menu__item">
                                            <div className="nav-menu__box">
                                                <a href="/" className="nav-menu__link">Elements</a>
                                                <i className='bx bx-chevron-down nav-menu__icon'></i>
                                            </div>
                                            <ul className="nav-dropdown nav-megamenu">
                                                <li className="nav-megamenu__element">
                                                    <div className="nav-megamenu__title">
                                                        <i className='bx bxs-grid'></i>
                                                        <span>Elements</span>
                                                    </div>
                                                    <ul className="nav-megamenu__list nav-megamenu__column">
                                                        <li className="nav-megamenu__item">
                                                            <a href="# ">Typography</a>
                                                        </li>
                                                        <li className="nav-megamenu__item">
                                                            <a href="# ">Icon lists</a>
                                                        </li>
                                                        <li className="nav-megamenu__item">
                                                            <a href="# ">Progress bars</a>
                                                        </li>
                                                        <li className="nav-megamenu__item">
                                                            <a href="# ">Calls to action</a>
                                                        </li>
                                                        <li className="nav-megamenu__item">
                                                            <a href="# ">Tabs & accordions</a>
                                                        </li>
                                                        <li className="nav-megamenu__item">
                                                            <a href="# ">Buttons</a>
                                                        </li>
                                                        <li className="nav-megamenu__item">
                                                            <a href="# ">Tables</a>
                                                        </li>
                                                        <li className="nav-megamenu__item">
                                                            <a href="# ">Forms</a>
                                                        </li>
                                                        <li className="nav-megamenu__item">
                                                            <a href="# ">Counters</a>
                                                        </li>
                                                        <li className="nav-megamenu__item">
                                                            <a href="# ">Grid system</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-megamenu__element">
                                                    <div className="nav-megamenu__title">
                                                        <i className='bx bxs-layer'></i>
                                                        <span>Additional page</span>
                                                    </div>
                                                    <ul className="nav-megamenu__list">
                                                        <li className="nav-megamenu__item">
                                                            <a href="# ">404 Page</a>
                                                        </li>
                                                        <li className="nav-megamenu__item">
                                                            <a href="# ">Coming Soon</a>
                                                        </li>
                                                        <li className="nav-megamenu__item">
                                                            <a href="# ">Privacy Policy</a>
                                                        </li>
                                                        <li className="nav-megamenu__item">
                                                            <a href="# ">Search Results</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-megamenu__element">
                                                    <div className="nav-megamenu__title">
                                                        <i className='bx bxs-cake'></i>
                                                        <span>Welcome to our story</span>
                                                    </div>
                                                    <a href="# " className="nav-megamenu__picture thumbnail--classic">
                                                        <img src="./assets/images/welcome-to-our-story.jpg" alt="Welcome" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-menu__item">
                                            <a href="/" className="nav-menu__link">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav-boxs">
                                    <div className="nav-search">
                                        <button className="nav-search__button">
                                            <i className='bx bx-search nav-search__search'></i>
                                            <i className='bx bx-x-circle nav-search__close'></i>
                                        </button>
                                        <form>
                                            <div className="nav-search__form">
                                                <input type="text" placeholder="Search..." />
                                                <button type="submit" className="nav-search__button">
                                                    <i className='bx bx-search'></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="nav-cart">

                                        <div className="nav__overlay"></div>

                                        <button className="nav-cart__button">
                                            <i className='bx bx-shopping-bag'></i>
                                            {/* <sup className="nav-cart__amount">2</sup> */}
                                        </button>

                                        <div className="nav-cart__toggle">
                                            <CartContainer />
                                        </div>
                                    </div>
                                    <div className="nav-info">
                                        <i className='bx bx-dots-vertical-rounded'></i>
                                        <div htmlFor="info-check" className="nav-info__wrap">
                                            <div className="nav-location__wrap">
                                                <i className='bx bx-map'></i>
                                                <a href="# ">
                                                    523 Sylvan Ave
                                                    <br />
                                                    Mountain View, CA 94041 USA
                                                </a>
                                            </div>
                                            <div className="nav-button">
                                                <a href="# " className="btn btn--sm btn--outline btn--zakaria">
                                                    <i className='bx bx-mail-send'></i>
                                                    Get in touch
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
