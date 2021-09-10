import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <section className="section--custom2">
                    <div className="grid wide">
                        <div className="row">
                            <div className="col xl-4 l-3 m-10 s-12">
                                <div className="footer footer__gallery">
                                    <h5 className="footer__title">Gallery</h5>
                                    <div className="row">
                                        <div className="col l-4 m-2 s-2 c-4">
                                            <div className="footer__box">
                                                <a href="# " className="footer__img thumbnail--classic">
                                                    <img src="./assets/images/grid-gallery-1-original.jpg" aria-hidden="true" alt="Image Gallery" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col l-4 m-2 s-2 c-4">
                                            <div className="footer__box">
                                                <a href="# " className="footer__img thumbnail--classic">
                                                    <img src="./assets/images/grid-gallery-2-original.jpg" aria-hidden="true" alt="Image Gallery" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col l-4 m-2 s-2 c-4">
                                            <div className="footer__box">
                                                <a href="# " className="footer__img thumbnail--classic">
                                                    <img src="./assets/images/grid-gallery-3-original.jpg" aria-hidden="true" alt="Image Gallery" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col l-4 m-2 s-2 c-4">
                                            <div className="footer__box">
                                                <a href="# " className="footer__img thumbnail--classic">
                                                    <img src="./assets/images/grid-gallery-4-original.jpg" aria-hidden="true" alt="Image Gallery" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col l-4 m-2 s-2 c-4">
                                            <div className="footer__box">
                                                <a href="# " className="footer__img thumbnail--classic">
                                                    <img src="./assets/images/grid-gallery-5-original.jpg" aria-hidden="true" alt="Image Gallery" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col l-4 m-2 s-2 c-4">
                                            <div className="footer__box">
                                                <a href="# " className="footer__img thumbnail--classic">
                                                    <img src="./assets/images/grid-gallery-6-original.jpg" aria-hidden="true" alt="Image Gallery" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col xl-5 l-5 m-7 s-5 c-12">
                                <div className="footer footer__links">
                                    <h5 className="footer__title">Quick Links</h5>
                                    <ul className="footer__list">
                                        <li className="footer__item">
                                            <a href="# ">About Us</a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="# ">Our Team</a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="# ">Shop</a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="# ">Pricing</a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="# ">FAQ</a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="# ">Contact Us</a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="# ">What We Offer</a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="# ">Our Blog</a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="# ">Testimonials</a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="# ">Baking School</a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="# ">Our Recipes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col xl-3 l-4 m-5 s-7 c-12">
                                <div className="footer footer__contact">
                                    <h5 className="footer__title">Get In Touch</h5>
                                    <div className="footer__address">
                                        <div className="footer__map">
                                            <i className='bx bxs-map'></i>
                                            <a href="# ">523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA</a>
                                        </div>
                                        <div className="footer__phone">
                                            <i className='bx bxs-phone'></i>
                                            <a href="# ">+(84)123 456 789</a>
                                        </div>
                                        <div className="footer__mail">
                                            <i className='bx bx-mail-send'></i>
                                            <a href="# ">hieucot69@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="footer__socials">
                                        <a href="https://www.facebook.com/trunghieupia/">
                                            <i className='bx bxl-facebook'></i>
                                        </a>
                                        <a href="https://www.instagram.com/trunghieupia/">
                                            <i className='bx bxl-instagram'></i>
                                        </a>
                                        <a href="https://twitter.com/trunghieupia/">
                                            <i className='bx bxl-twitter'></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/trung-hieu/">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                        <a href="https://github.com/hieucot">
                                            <i className='bx bxl-github'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section__copyright">
                    <div className="grid wide">
                        <p>© 2021. Sweet Bakery All Rights Reserved</p>
                    </div>
                </section>
            </footer>
        );
    }
}

export default Footer;
