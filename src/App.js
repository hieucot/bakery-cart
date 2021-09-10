import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';

class App extends Component {
    render() {
        return (
            <>
                <Header />

                <main>
                    <section className="section--custom1 section__hero">
                        <div className="grid wide">
                            <div className="row">
                                <div className="col l-7 m-5 c-12">
                                    <div className="hero__content">
                                        <h2 className="hero__title">Delicious</h2>
                                        <h3 className="hero__phrase">Cakes for you</h3>
                                        <h4 className="hero__sentence">Sweet Bakery offers the best
                                            cakes and sweets for you.
                                        </h4>
                                        <a href="# " className="btn btn--lg btn--shadow btn--primary btn--zakaria">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section__promo">
                        <div className="grid wide">
                            <article className="promo__content">
                                <div className="promo__title">Only Fresh Cakes</div>
                                <p className="promo__paragraph">
                                    All of our products are made from scratch using family recipes with only the highest quality
                                    ingredients. We bake and sell fresh daily to ensure only the best products are sold to our
                                    customers.
                                </p>
                                <a href="# " className="btn btn--icon btn--primary btn--zakaria">
                                    <i className='bx bx-right-arrow-alt'></i>
                                </a>
                            </article>
                        </div>
                    </section>
                    <section className="section--basic section__offer">
                        <div className="grid wide">
                            <h2 className="section--title">What We offer</h2>
                            <div className="offer__cards">
                                <div className="offer__card">
                                    <a href="# " className="offer__img">
                                        <img src="./assets/images/offer-1.jpg" alt="offer" />
                                    </a>
                                    <div className="offer__content">
                                        <div className="offer__top">
                                            <h3 className="offer__title">
                                                <a href="# ">Party Cupcakes</a>
                                            </h3>
                                            <p className="descriptions offer__descriptions">
                                                We provide a variety of cupcakes for any party made with high-quality natural
                                                ingredients and no preservatives.
                                            </p>
                                        </div>
                                        <div className="offer__bottom">
                                            <a href="# " className="btn--link">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="offer__card">
                                    <a href="# " className="offer__img">
                                        <img src="./assets/images/offer-2.jpg" alt="offer" />
                                    </a>
                                    <div className="offer__content">
                                        <div className="offer__top">
                                            <h3 className="offer__title">
                                                <a href="# ">Wedding cakes</a>
                                            </h3>
                                            <p className="descriptions offer__descriptions">
                                                Nothing tastes better than a chocolate cake with a variety of flavors, which is
                                                always available at our bakery.
                                            </p>
                                        </div>
                                        <div className="offer__bottom">
                                            <a href="# " className="btn--link">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="offer__card">
                                    <a href="# " className="offer__img">
                                        <img src="./assets/images/offer-3.jpg" alt="offer" />
                                    </a>
                                    <div className="offer__content">
                                        <div className="offer__top">
                                            <h3 className="offer__title">
                                                <a href="# ">Choco cakes</a>
                                            </h3>
                                            <p className="descriptions offer__descriptions">
                                                Want to make your wedding unforgettable? Then you need to order a unique wedding
                                                cake at Sweet Bakery!
                                            </p>
                                        </div>
                                        <div className="offer__bottom">
                                            <a href="# " className="btn--link">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section--basic section--bg section__product">
                        <ProductsContainer />
                    </section>

                    <section className="section--basic section__chooseus">
                        <div className="grid wide">
                            <h2 className="section--title">Why choose us</h2>
                            <div className="row">
                                <div className="col xl-4 m-4 s-6 c-10">
                                    <article className="chooseus chooseus__left">
                                        <div className="chooseus__wrap">
                                            <div className="chooseus__content">
                                                <h4 className="chooseus__title">
                                                    <a href="# ">Quality Products</a>
                                                </h4>
                                                <p className="descriptions chooseus__descriptions">
                                                    We guarantee the quality of all the cakes we provide as they are baked using the
                                                    freshest ingredients.
                                                </p>
                                            </div>
                                            <div className="chooseus__icons">
                                                <i className='bx bx-cookie'></i>
                                                <svg className="chooseus__svg chooseus__svg-right" width="77.06" height="71.94"
                                                    viewBox="0 0 77.06 71.94">
                                                    <path
                                                        d="M1220.63,3358.07c8.86-19.66,32.66-7.87,38.1,13a39.053,39.053,0,0,1-27.91,47.63c-20.85,5.44-43.52-6.76-47.59-27.93C1179.83,3373.1,1210.55,3380.43,1220.63,3358.07Z"
                                                        transform="translate(-1182.94 -3348.03)"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="chooseus chooseus__left">
                                        <div className="chooseus__wrap">
                                            <div className="chooseus__content">
                                                <h4 className="chooseus__title">
                                                    <a href="# ">Free Delivery</a>
                                                </h4>
                                                <p className="descriptions chooseus__descriptions">
                                                    We guarantee the quality of all the cakes we provide as they are baked using the
                                                    freshest ingredients.
                                                </p>
                                            </div>
                                            <div className="chooseus__icons">
                                                <i className='bx bxs-truck'></i>
                                                <svg className="chooseus__svg chooseus__svg-right" width="77.06" height="71.94"
                                                    viewBox="0 0 77.06 71.94">
                                                    <path
                                                        d="M1220.63,3358.07c8.86-19.66,32.66-7.87,38.1,13a39.053,39.053,0,0,1-27.91,47.63c-20.85,5.44-43.52-6.76-47.59-27.93C1179.83,3373.1,1210.55,3380.43,1220.63,3358.07Z"
                                                        transform="translate(-1182.94 -3348.03)"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col xl-4 m-4 c-0">
                                    <div className="chooseus__img">
                                        <img src="./assets/images/why-choose-us.jpg" alt="Choose US" />
                                    </div>
                                </div>
                                <div className="col xl-4 m-4 s-6 c-10">
                                    <article className="chooseus chooseus__right">
                                        <div className="chooseus__wrap">
                                            <div className="chooseus__icons">
                                                <i className='bx bxs-spa'></i>
                                                <svg className="chooseus__svg chooseus__svg-left" width="77.06" height="71.94"
                                                    viewBox="0 0 77.06 71.94">
                                                    <path
                                                        d="M1220.63,3358.07c8.86-19.66,32.66-7.87,38.1,13a39.053,39.053,0,0,1-27.91,47.63c-20.85,5.44-43.52-6.76-47.59-27.93C1179.83,3373.1,1210.55,3380.43,1220.63,3358.07Z"
                                                        transform="translate(-1182.94 -3348.03)"></path>
                                                </svg>
                                            </div>
                                            <div className="chooseus__content">
                                                <h4 className="chooseus__title">
                                                    <a href="# ">Catering service</a>
                                                </h4>
                                                <p className="descriptions chooseus__descriptions">
                                                    Our bakery also provides an outstanding catering service for events and special
                                                    occasions.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="chooseus chooseus__right">
                                        <div className="chooseus__wrap">
                                            <div className="chooseus__icons">
                                                <i className='bx bx-credit-card-front'></i>
                                                <svg className="chooseus__svg chooseus__svg-left" width="77.06" height="71.94"
                                                    viewBox="0 0 77.06 71.94">
                                                    <path
                                                        d="M1220.63,3358.07c8.86-19.66,32.66-7.87,38.1,13a39.053,39.053,0,0,1-27.91,47.63c-20.85,5.44-43.52-6.76-47.59-27.93C1179.83,3373.1,1210.55,3380.43,1220.63,3358.07Z"
                                                        transform="translate(-1182.94 -3348.03)"></path>
                                                </svg>
                                            </div>
                                            <div className="chooseus__content">
                                                <h4 className="chooseus__title">
                                                    <a href="# ">Online Payment</a>
                                                </h4>
                                                <p className="descriptions chooseus__descriptions">
                                                    We accept all kinds of online payments including Visa, MasterCard, American
                                                    Express credit cards.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section--basic section__sale">
                        <div className="grid wide">
                            <div className="row">
                                <div className="col xl-5 l-6 m-9">
                                    <div className="sale__content">
                                        <h2 className="sale__title">
                                            Summer sale
                                        </h2>
                                        <div className="sale__discount">
                                            <span className="sale__percent">-20%</span>
                                            <span className="sale__type">On all cakes</span>
                                        </div>
                                        <p className="descriptions sale__descriptions">
                                            Purchase our tasty cakes and sweets for your next event or family dinner at our online
                                            shop
                                            and save more money than anywhere.
                                        </p>
                                        <a href="# " className="btn btn--lg btn--primary btn--zakaria btn--shadow">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section--basic section__about">
                        <div className="grid wide">
                            <h2 className="section--title">About US</h2>
                            <div className="row">
                                <div className="col l-6 m-12">
                                    <img className="about__img" src="./assets/images/about.jpg" alt="About" />
                                </div>
                                <div className="col l-6 m-12">
                                    <div className="about__tab">
                                        <div className="about__content">
                                            <div className="about__pane active">
                                                <h4 className="about__title">
                                                    <a href="# ">Providing quality baked goods for all customers</a>
                                                </h4>
                                                <p className="descriptions about__descriptions">
                                                    Our mission is to create a bakery that makes the best quality baked goods on
                                                    site from scratch, and where both employees and customers would feel
                                                    comfortable.
                                                </p>
                                                <div className="about__button">
                                                    <a href="# " className="btn--link">Read more</a>
                                                </div>
                                            </div>
                                            <div className="about__pane">
                                                <h4 className="about__title">
                                                    <a href="# ">Ensuring the Best Atmosphere for Everyone</a>
                                                </h4>
                                                <p className="descriptions about__descriptions">
                                                    We see the most important part of our business in ensuring the happiness of our
                                                    staff and the satisfaction of our clients by creating a welcoming and caring
                                                    atmosphere.
                                                </p>
                                                <div className="about__button">
                                                    <a href="# " className="btn--link">Read more</a>
                                                </div>
                                            </div>
                                            <div className="about__pane">
                                                <h4 className="about__title">
                                                    <a href="# ">Serving only the freshest baked goods for you</a>
                                                </h4>
                                                <p className="descriptions about__descriptions">
                                                    We aim to deliver the best baked goods for corporate events and individual
                                                    celebrations, while also offering the best level of customer service in the
                                                    United States.
                                                </p>
                                                <div className="about__button">
                                                    <a href="# " className="btn--link">Read more</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="about__nav">
                                            <ul className="about__list">
                                                <li className="about__item active">Our Mission</li>
                                                <li className="about__item">Our Values</li>
                                                <li className="about__item">Our Goals</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section--basic section--bg section__team">
                        <div className="grid wide">
                            <h2 className="section--title">Our Team</h2>
                            <div className="team__cards">
                                <article className="team__card">
                                    <div className="team__thumbnail">
                                        <a href="# " className="team__img">
                                            <img src="./assets/images/team-1.jpg" alt="Team" />
                                        </a>
                                        <div className="team__arrow"></div>
                                    </div>
                                    <div className="team__content">
                                        <div className="team__top">
                                            <h4 className="team__title">
                                                <a href="# ">Richard Smith </a>
                                            </h4>
                                            <p className="descriptions team__descriptions">
                                                Richard has a true passion for baking and that’s why he has been our founder and
                                                head baker since day one.
                                            </p>
                                        </div>
                                        <div className="team__bottom">
                                            <a href="# " className="team__social">
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                            <a href="# " className="team__social">
                                                <i className='bx bxl-instagram'></i>
                                            </a>
                                            <a href="# " className="team__social">
                                                <i className='bx bxl-twitter'></i>
                                            </a>
                                            <a href="# " className="team__social">
                                                <i className='bx bxl-google-plus'></i>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                                <article className="team__card">
                                    <div className="team__thumbnail">
                                        <a href="# " className="team__img">
                                            <img src="./assets/images/team-2.jpg" alt="Team" />
                                        </a>
                                        <div className="team__arrow"></div>
                                    </div>
                                    <div className="team__content">
                                        <div className="team__top">
                                            <h4 className="team__title">
                                                <a href="# ">Susan Anderson</a>
                                            </h4>
                                            <p className="descriptions team__descriptions">
                                                Susan spends most of her time baking and cake decorating as well as heading up the
                                                bakery's marketing initiatives.
                                            </p>
                                        </div>
                                        <div className="team__bottom">
                                            <a href="# " className="team__social">
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                            <a href="# " className="team__social">
                                                <i className='bx bxl-instagram'></i>
                                            </a>
                                            <a href="# " className="team__social">
                                                <i className='bx bxl-twitter'></i>
                                            </a>
                                            <a href="# " className="team__social">
                                                <i className='bx bxl-google-plus'></i>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                                <article className="team__card">
                                    <div className="team__thumbnail">
                                        <a href="# " className="team__img">
                                            <img src="./assets/images/team-3.jpg" alt="Team" />
                                        </a>
                                        <div className="team__arrow"></div>
                                    </div>
                                    <div className="team__content">
                                        <div className="team__top">
                                            <h4 className="team__title">
                                                <a href="# ">Steve Ruffalo</a>
                                            </h4>
                                            <p className="descriptions team__descriptions">
                                                Steve is our lead cake designer. He has designed beautiful cakes for various
                                                occasions including weddings, parties, showers, anniversaries and more.
                                            </p>
                                        </div>
                                        <div className="team__bottom">
                                            <a href="# " className="team__social">
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                            <a href="# " className="team__social">
                                                <i className='bx bxl-instagram'></i>
                                            </a>
                                            <a href="# " className="team__social">
                                                <i className='bx bxl-twitter'></i>
                                            </a>
                                            <a href="# " className="team__social">
                                                <i className='bx bxl-google-plus'></i>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>

                    <section className="section--basic section__cta">
                        <div className="grid wide">
                            <div className="row">
                                <div className="col xl-7 l-12 m-10">
                                    <div className="cta__content">
                                        <h3 className="cta__sologan">Unique Flavors and
                                            Fresh Ingredients</h3>
                                        <h2 className="cta__title">All
                                            Kinds of Cakes</h2>
                                        <a href="# " className="btn btn--primary btn--lg btn--zakaria">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section--basic section__feedback">
                        <div className="grid wide">
                            <h2 className="section--title">Feedback</h2>
                            <div className="feedback__clients">
                                <article className="feedback__client">
                                    <div className="feedback__top">
                                        <blockquote>
                                            Thank you so much for the elegant cupcakes. They looked and tasted amazing. I’m
                                            recommending you to all my friends.
                                        </blockquote>
                                    </div>
                                    <div className="feedback__bottom">
                                        <div className="feedback__img">
                                            <img src="./assets/images/user-10.jpg" alt="Client" />
                                        </div>
                                        <div className="feedback__resume">
                                            <h6 className="feedback__author">Patrick Goodman</h6>
                                            <i className="feedback__role">Client</i>
                                        </div>
                                    </div>
                                </article>
                                <article className="feedback__client">
                                    <div className="feedback__top">
                                        <blockquote>
                                            Just a note to let you know how fabulous your wedding cake was. Many guests
                                            commented on
                                            how delicious it tasted.
                                        </blockquote>
                                    </div>
                                    <div className="feedback__bottom">
                                        <div className="feedback__img">
                                            <img src="./assets/images/user-11.jpg" alt="Client" />
                                        </div>
                                        <div className="feedback__resume">
                                            <h6 className="feedback__author">Jane Smith</h6>
                                            <i className="feedback__role">Client</i>
                                        </div>
                                    </div>
                                </article>
                                <article className="feedback__client">
                                    <div className="feedback__top">
                                        <blockquote>
                                            Thank you so much for the elegant cupcakes. They looked and tasted amazing. I’m
                                            recommending you to all my friends.
                                        </blockquote>
                                    </div>
                                    <div className="feedback__bottom">
                                        <div className="feedback__img">
                                            <img src="./assets/images/user-5.jpg" alt="Client" />
                                        </div>
                                        <div className="feedback__resume">
                                            <h6 className="feedback__author">Patrick Goodman</h6>
                                            <i className="feedback__role">Client</i>
                                        </div>
                                    </div>
                                </article>
                                <article className="feedback__client">
                                    <div className="feedback__top">
                                        <blockquote>
                                            Just a note to let you know how fabulous your wedding cake was. Many guests
                                            commented on
                                            how delicious it tasted.
                                        </blockquote>
                                    </div>
                                    <div className="feedback__bottom">
                                        <div className="feedback__img">
                                            <img src="./assets/images/user-6.jpg" alt="Client" />
                                        </div>
                                        <div className="feedback__resume">
                                            <h6 className="feedback__author">Jane Smith</h6>
                                            <i className="feedback__role">Client</i>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                    <section className="section--basic section--bg">
                        <div className="grid wide">
                            <h2 className="section--title">Latest News</h2>
                            <div className="row">
                                <div className="col m-6">
                                    <article className="post post-large">
                                        <a href="# " className="post-large__img img--zoom">
                                            <img src="./assets/images/post-1.jpg" alt="post" />
                                        </a>
                                        <div className="post-large__content">
                                            <time className="post__time">August 9, 2021</time>
                                            <h4 className="post__title">
                                                <a href="# ">How to Pipe a Fluffy Frosting Border on a Cake</a>
                                            </h4>
                                        </div>
                                    </article>
                                </div>
                                <div className="col m-6">
                                    <div className="post__wrap">
                                        <article className="post post-small">
                                            <a href="# " className="post-small__img img--zoom">
                                                <img src="./assets/images/post-2.jpg" alt="post" />
                                            </a>
                                            <div className="post-small__content">
                                                <time className="post__time">August 9, 2021</time>
                                                <h4 className="post__title">
                                                    <a href="# ">Recipe of the Day: Pumpkin Spice Latte Cake</a>
                                                </h4>
                                            </div>
                                        </article>
                                        <article className="post post-small">
                                            <a href="# " className="post-small__img img--zoom">
                                                <img src="./assets/images/post-3.jpg" alt="post" />
                                            </a>
                                            <div className="post-small__content">
                                                <time className="post__time">August 9, 2021</time>
                                                <h4 className="post__title">
                                                    <a href="# ">Recipe of the Day: Pumpkin Spice Latte Cake</a>
                                                </h4>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section--custom2 section__partner">
                        <div className="grid wide">
                            <div className="partner__list">
                                <div className="partner__item">
                                    <a href="# " className="partner__img">
                                        <img src="./assets/images/partner-1.png" alt="Partner" />
                                    </a>
                                </div>
                                <div className="partner__item">
                                    <a href="# " className="partner__img">
                                        <img src="./assets/images/partner-2.png" alt="Partner" />
                                    </a>
                                </div>
                                <div className="partner__item">
                                    <a href="# " className="partner__img">
                                        <img src="./assets/images/partner-3.png" alt="Partner" />
                                    </a>
                                </div>
                                <div className="partner__item">
                                    <a href="# " className="partner__img">
                                        <img src="./assets/images/partner-4.png" alt="Partner" />
                                    </a>
                                </div>
                                <div className="partner__item">
                                    <a href="# " className="partner__img">
                                        <img src="./assets/images/partner-5.png" alt="Partner" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </>
        );
    }
}

export default App;
