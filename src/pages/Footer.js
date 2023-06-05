import Link from 'next/link';
import styles from '../styles/Footer.module.scss';
import { router } from "next/router";
import Contact from '../../public/images/contact.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.firstContainer}>
                        <div className={styles.contactContainer}>
                            <Image className={styles.contactImg} src={Contact} width={32} height={32} alt='cash' />
                            <Link className={styles.contactLink}href="/contact"><h3 className={styles.contactHeader}><strong>Contact Us!</strong></h3></Link>
                            <p className={styles.contactInfo}>
                                (651)472-2736<br/>
                                sales@spiesscarpet.com</p>
                        </div>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.waves}>
                            <div className={styles.wave} id={styles.wave1}></div>
                            <div className={styles.wave} id={styles.wave2}></div>
                            <div className={styles.wave} id={styles.wave3}></div>
                            <div className={styles.wave} id={styles.wave4}></div>
                        </div>
                    <div className={styles.topContainer}>
                        <ul className={styles.menu}>
                            <li className={styles.menu__item}>
                                <Link className={styles.menu__link} href="/about"><p className={styles.link}><strong>About</strong></p></Link>
                            </li>
                            <li className={styles.menu__item}>
                                <Link className={styles.menu__link} href="/services"><p className={styles.link}><strong>Services</strong></p></Link>
                            </li>
                            <li className={styles.menu__item}>
                                <Link className={styles.menu__link} href="/contact"><p className={styles.link}><strong>Contact</strong></p></Link>
                            </li>
                            <li className={styles.menu__item}>
                                <Link className={styles.menu__link} href="/testimonials"><p className={styles.link}><strong>Testimonials</strong></p></Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.bottomContainer}>
                        <p style={{ opacity: 0.75 }}>&copy;2023 Nick Spiess | All Rights Reserved</p>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <Link style={{ textDecoration: 'none' }} href='/quote' passHref>
                        <button
                            className={`${styles.btnMd} ${styles.navButton}`}
                            onClick={() => router.push('/quote')}
                        >
                            <strong>Get a Free Quote!</strong>
                        </button>
                    </Link>
                </div>
                </div>
            </footer>


            <footer className={styles.mobileFooter}>
                <div className={styles.container}>
                    <div className={styles.infoContainer}>
                        <div className={styles.waves}>
                            <div className={styles.wave} id={styles.wave1}></div>
                            <div className={styles.wave} id={styles.wave2}></div>
                            <div className={styles.wave} id={styles.wave3}></div>
                            <div className={styles.wave} id={styles.wave4}></div>
                        </div>
                        <div className={styles.topContainer}>
                            <ul className={styles.menu}>
                                <li className={styles.menu__item}>
                                    <Link className={styles.menu__link} href="/about"><p className={styles.link}><strong>About</strong></p></Link>
                                </li>
                                <li className={styles.menu__item}>
                                    <Link className={styles.menu__link} href="/services"><p className={styles.link}><strong>Services</strong></p></Link>
                                </li>
                                <li className={styles.menu__item}>
                                    <Link className={styles.menu__link} href="/contact"><p className={styles.link}><strong>Contact</strong></p></Link>
                                </li>
                                <li className={styles.menu__item}>
                                    <Link className={styles.menu__link} href="/testimonials"><p className={styles.link}><strong>Testimonials</strong></p></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Link style={{ textDecoration: 'none' }} href='/quote' passHref>
                            <button
                                className={`${styles.btnMd} ${styles.navButton}`}
                                onClick={() => router.push('/quote')}
                            >
                                <strong>Get a Free Quote!</strong>
                            </button>
                        </Link>
                    </div>
                    <div className={styles.bottomContainer}>
                            <p style={{ color: 'white', }}>&copy;2023 Nick Spiess | All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;