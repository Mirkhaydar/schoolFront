"use client";

import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Эффект для отслеживания скролла страницы
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Переключение мобильного меню
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Логотип с анимированным эффектом */}
      <div className={styles.logo}>
        <Link href="/">
          <span className={styles.logoMain}>TurkeyEdu</span>
          <span className={styles.logoTagline}>Образование в Турции</span>
        </Link>
      </div>

      {/* Мобильная кнопка меню */}
      <div className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
        <MenuOutlined />
      </div>

      <div className={`${styles.navContainer} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link href="/" passHref legacyBehavior>
                <a className={styles.navLink}>Главная</a>
              </Link>
            </li>
            <li>
              <Link href="#advantages" passHref legacyBehavior>
                <a className={styles.navLink}>Преимущества</a>
              </Link>
            </li>
            <li>
              <Link href="#universities" passHref legacyBehavior>
                <a className={styles.navLink}>Университеты</a>
              </Link>
            </li>
            <li>
              <Link href="#how-we-help" passHref legacyBehavior>
                <a className={styles.navLink}>Наш подход</a>
              </Link>
            </li>
            <li>
              <Link href="#faq" passHref legacyBehavior>
                <a className={styles.navLink}>Вопросы</a>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Кнопка призыва к действию в шапке */}
        <div className={styles.headerCta}>
          <Button 
            type="primary" 
            shape="round" 
            className={styles.ctaButton}
          >
            Бесплатная консультация
          </Button>
        </div>
      </div>
    </header>
  );
};

