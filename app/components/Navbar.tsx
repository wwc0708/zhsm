'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavDropdown,
  Container,
  Image,
  Offcanvas
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Hide Bootstrap's default dropdown toggle arrow and ensure consistent height
const styles = `
  .dropdown-toggle::after {
    display: none !important;
  }
  @media (min-width: 992px) {
    .nav-link,
    .nav-dropdown-custom.dropdown-toggle,
    .nav-item .dropdown-toggle {
      height: 42px !important;
      display: flex !important;
      align-items: center !important;
      padding: 0.5rem 1rem !important;
      box-sizing: border-box !important;
      line-height: 1 !important;
    }
    .nav-dropdown-custom .dropdown-toggle {
      height: 42px !important;
      display: flex !important;
      align-items: center !important;
      padding: 0.5rem 1rem !important;
      box-sizing: border-box !important;
      line-height: 1 !important;
    }
  }
`;

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <style>{styles}</style>
    <BootstrapNavbar
      expand="lg"
      className="navbar-custom sticky-top"
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '2px solid #ff3b30',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        padding: '0.5rem 0',
      }}
    >
      <Container fluid="lg">
        <Link href="/" className="navbar-brand d-flex align-items-center" style={{ textDecoration: 'none' }}>
          <Image
            src="/zhsm/logo.png"
            alt="Zhihe Logo"
            width={50}
            height={50}
            className="me-2"
            style={{ objectFit: 'contain' }}
          />
          <span
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1a1a1a',
              letterSpacing: '-0.5px',
            }}
          >
            Zhihe
          </span>
        </Link>

        <BootstrapNavbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={handleShow}
          style={{
            border: 'none',
            padding: '0.5rem',
          }}
        >
          <i className="bi bi-list" style={{ fontSize: '1.8rem', color: '#1a1a1a' }}></i>
        </BootstrapNavbar.Toggle>

        <BootstrapNavbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
          style={{ backgroundColor: '#ffffff' }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" style={{ color: '#1a1a1a', fontWeight: '600' }}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link
                href="/"
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={handleClose}
                style={{
                  color: isActive('/') ? '#ff3b30' : '#1a1a1a',
                  fontWeight: isActive('/') ? '600' : '400',
                  padding: '0.5rem 1rem',
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  transition: 'all 0.3s ease',
                }}
              >
                {t('nav.home')}
              </Link>

              <NavDropdown
                title={
                  <span
                    style={{
                      color: pathname?.startsWith('/industry') ? '#ff3b30' : '#1a1a1a',
                      fontWeight: pathname?.startsWith('/industry') ? '600' : '400',
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      lineHeight: '1.5',
                    }}
                  >
                    {t('nav.industry')}
                    <i
                      className="bi bi-caret-down-fill"
                      style={{
                        fontSize: '0.7rem',
                        marginLeft: '0.25rem',
                        color: pathname?.startsWith('/industry') ? '#ff3b30' : '#1a1a1a',
                      }}
                    ></i>
                  </span>
                }
                id="industry-dropdown"
                drop="end"
                menuRole="none"
                className="nav-dropdown-custom"
                style={{ padding: '0.75rem 1rem' }}
              >
                <Link
                  href="/industry/modification"
                  className="dropdown-item"
                  onClick={handleClose}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    color: '#1a1a1a',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff0f0';
                    e.currentTarget.style.color = '#ff3b30';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#1a1a1a';
                  }}
                >
                  {t('industry.modification')}
                </Link>
                <Link
                  href="/industry/blowing"
                  className="dropdown-item"
                  onClick={handleClose}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    color: '#1a1a1a',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff0f0';
                    e.currentTarget.style.color = '#ff3b30';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#1a1a1a';
                  }}
                >
                  {t('industry.blowing')}
                </Link>
                <Link
                  href="/industry/sheet"
                  className="dropdown-item"
                  onClick={handleClose}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    color: '#1a1a1a',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff0f0';
                    e.currentTarget.style.color = '#ff3b30';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#1a1a1a';
                  }}
                >
                  {t('industry.sheet')}
                </Link>
                <Link
                  href="/industry/casting"
                  className="dropdown-item"
                  onClick={handleClose}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    color: '#1a1a1a',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff0f0';
                    e.currentTarget.style.color = '#ff3b30';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#1a1a1a';
                  }}
                >
                  {t('industry.casting')}
                </Link>
                <Link
                  href="/industry/pipe"
                  className="dropdown-item"
                  onClick={handleClose}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    color: '#1a1a1a',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff0f0';
                    e.currentTarget.style.color = '#ff3b30';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#1a1a1a';
                  }}
                >
                  {t('industry.pipe')}
                </Link>
              </NavDropdown>

              <NavDropdown
                title={
                  <span
                    style={{
                      color: pathname?.startsWith('/products') ? '#ff3b30' : '#1a1a1a',
                      fontWeight: pathname?.startsWith('/products') ? '600' : '400',
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      lineHeight: '1.5',
                    }}
                  >
                    {t('nav.products')}
                    <i
                      className="bi bi-caret-down-fill"
                      style={{
                        fontSize: '0.7rem',
                        marginLeft: '0.25rem',
                        color: pathname?.startsWith('/products') ? '#ff3b30' : '#1a1a1a',
                      }}
                    ></i>
                  </span>
                }
                id="products-dropdown"
                drop="end"
                menuRole="none"
                className="nav-dropdown-custom"
                style={{ padding: '0.75rem 1rem' }}
              >
                <Link
                  href="/products/black"
                  className="dropdown-item"
                  onClick={handleClose}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    color: '#1a1a1a',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff0f0';
                    e.currentTarget.style.color = '#ff3b30';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#1a1a1a';
                  }}
                >
                  {t('products.black')}
                </Link>
                <Link
                  href="/products/white"
                  className="dropdown-item"
                  onClick={handleClose}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    color: '#1a1a1a',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff0f0';
                    e.currentTarget.style.color = '#ff3b30';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#1a1a1a';
                  }}
                >
                  {t('products.white')}
                </Link>
                <Link
                  href="/products/color"
                  className="dropdown-item"
                  onClick={handleClose}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    color: '#1a1a1a',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff0f0';
                    e.currentTarget.style.color = '#ff3b30';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#1a1a1a';
                  }}
                >
                  {t('products.color')}
                </Link>
                <Link
                  href="/products/fill"
                  className="dropdown-item"
                  onClick={handleClose}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    color: '#1a1a1a',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff0f0';
                    e.currentTarget.style.color = '#ff3b30';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#1a1a1a';
                  }}
                >
                  {t('products.fill')}
                </Link>
                <Link
                  href="/products/function"
                  className="dropdown-item"
                  onClick={handleClose}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    color: '#1a1a1a',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff0f0';
                    e.currentTarget.style.color = '#ff3b30';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#1a1a1a';
                  }}
                >
                  {t('products.function')}
                </Link>
              </NavDropdown>

              <Link
                href="/contact"
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={handleClose}
                style={{
                  color: isActive('/contact') ? '#ff3b30' : '#1a1a1a',
                  fontWeight: isActive('/contact') ? '600' : '400',
                  padding: '0.5rem 1rem',
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  transition: 'all 0.3s ease',
                }}
              >
                {t('nav.contact')}
              </Link>

              <NavDropdown
                title={
                  <span
                    style={{
                      color: '#1a1a1a',
                      fontWeight: '400',
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      lineHeight: '1.5',
                    }}
                  >
                    <i className="bi bi-globe"></i>
                    {language === 'zh' ? '中文' : language === 'en' ? 'EN' : 'VN'}
                    <i
                      className="bi bi-caret-down-fill"
                      style={{
                        fontSize: '0.7rem',
                        marginLeft: '0.25rem',
                        color: '#1a1a1a',
                      }}
                    ></i>
                  </span>
                }
                id="language-dropdown"
                drop="end"
                menuRole="none"
                className="nav-dropdown-custom"
                style={{ padding: '0.75rem 1rem' }}
              >
                <NavDropdown.Item
                  onClick={() => setLanguage('zh')}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    color: language === 'zh' ? '#ff3b30' : '#1a1a1a',
                    fontWeight: language === 'zh' ? '600' : '400',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (language !== 'zh') {
                      e.currentTarget.style.backgroundColor = '#fff0f0';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (language !== 'zh') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  中文
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setLanguage('en')}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    color: language === 'en' ? '#ff3b30' : '#1a1a1a',
                    fontWeight: language === 'en' ? '600' : '400',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (language !== 'en') {
                      e.currentTarget.style.backgroundColor = '#fff0f0';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (language !== 'en') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  English
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setLanguage('vi')}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    color: language === 'vi' ? '#ff3b30' : '#1a1a1a',
                    fontWeight: language === 'vi' ? '600' : '400',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (language !== 'vi') {
                      e.currentTarget.style.backgroundColor = '#fff0f0';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (language !== 'vi') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  Tiếng Việt
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </BootstrapNavbar.Offcanvas>
      </Container>
    </BootstrapNavbar>
    </>
  );
}