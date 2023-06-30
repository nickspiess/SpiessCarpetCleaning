import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo.png';
import styles from '../styles/Nav.module.css';
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

const router = useRouter();

const [isOpen, setIsOpen] = useState(false);
const [prevScrollPos, setPrevScrollPos] = useState(0);
const [visible, setVisible] = useState(true);

const navbarRef = useRef(null); // Add a ref for the navbar element



const handleLinkClick = () => {
    setIsOpen(false);
  };

useEffect(() => {
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isTopOfPage = currentScrollPos === 0;
        setVisible(!isTopOfPage);
      };
    
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const handlePhoneClick = () => {
    // Perform phone call action here
    console.log('Calling', '6512169512');
  };
  

  return (
    <nav ref={navbarRef} className={`${styles.navbar} ${styles.nav} ${visible ? '' : styles.hidden}`} id='navbar'>
        <div className={`${styles.navbarContainer}`}>
            <input type="checkbox" 
            name="" 
            className={styles.check} 
            checked={isOpen} onChange={handleMenuToggle} />
            <ul className={`${styles.navLinks} ${styles.menuItems}`}>
                <div className={styles.imgContainer}>
            <Link href='/' className={styles.linkCont} passHref onClick={handleLinkClick}>
                <div className={styles.imgLink}>
                <Image
                    src={logo}
                    alt='Spiess Carpet Logo'
                    className={styles.img}
                />
                </div>
            </Link>
            </div>
            <div className={styles.linkContainer}>
            <li>
                <Link style={{ textDecoration: 'none' }} href='/about' passHref onClick={handleLinkClick}>
                    <div className={styles.link}><strong>About</strong></div>
                </Link>
            </li>
            <li>
                <Link style={{ textDecoration: 'none' }} href='/services' passHref onClick={handleLinkClick}>
                    <div className={styles.link}><strong>Services</strong></div>
                </Link>
            </li>
            <li>
                <Link style={{ textDecoration: 'none' }} href='/contact' passHref onClick={handleLinkClick}>
                    <div className={styles.link}><strong>Contact</strong></div>
                </Link>
            </li>
            <li>
                <Link style={{ textDecoration: 'none' }} href='/testimonials' passHref onClick={handleLinkClick}>
                    <div className={`${styles.link} ${styles.last}`}><strong>Testimonials</strong></div>
                </Link>
            </li>
            <li>
                <Link style={{ textDecoration: 'none' }} href='/quote' passHref onClick={handleLinkClick}>
                <button
                    className={`${styles.btnMd} ${styles.navButton}`}
                    onClick={() => router.push('/quote')}
                >
                    Get a Quote!
                </button>
                </Link>
            </li>
            </div>
        </ul>
        <div className={styles.mobileContainer}>
            <div className={styles.phoneIcon}>
                <a href="tel:6514722736" class="phoneIcon">
                    <FontAwesomeIcon onClick={handlePhoneClick} className={styles.phone} icon={faPhone} size="2xl" />
                </a>
                <p className={styles.phoneCall}>Call Today!</p>
            </div>
            <Link href='/' className={styles.mobileImg} passHref onClick={handleLinkClick}>
                <div className={styles.mobileImgLink}>
                <Image
                    src={logo}
                    alt='Spiess Carpet Logo'
                    className={styles.img}
                />
                </div>
            </Link>
            <div className={styles.hamburgerLines}>
                <span className={`${styles.line} ${styles.line1}`}></span>
                <span className={`${styles.line} ${styles.line2}`}></span>
                <span className={`${styles.line} ${styles.line3}`}></span>
            </div>
            </div>
        </div>
    </nav>

  );
};

export default Navbar;
