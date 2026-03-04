'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Navbar as BootstrapNavbar,
  Nav,
  Dropdown,
  Container,
  Image,
  Offcanvas
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Hide Bootstrap's default dropdown toggle arrow
const styles = `
  .dropdown-toggle::after {
    display: none !important;
  }
`;

// Mobile Menu Dropdown Component
function MobileMenuDropdown({ title, items, onItemClick, mainHref }: { title: string; items: { label: string; href: string }[]; onItemClick: () => void; mainHref: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            padding: '0.75rem 0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            color: '#1a1a1a',
            fontSize: '1rem',
          }}
        >
          <Link
            href={mainHref}
            onClick={(e) => {
              e.stopPropagation();
              onItemClick();
            }}
            style={{
              color: '#1a1a1a',
              textDecoration: 'none',
              fontWeight: '500',
            }}
          >
            {title}
          </Link>
          <i
            className={`bi ${isOpen ? 'bi-caret-up-fill' : 'bi-caret-down-fill'}`}
            style={{
              fontSize: '0.7rem',
              marginLeft: '0.5rem',
              color: '#1a1a1a',
            }}
          ></i>
        </div>
        {isOpen && (
          <div style={{ paddingLeft: '1rem' }}>
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={onItemClick}
                style={{
                  display: 'block',
                  padding: '0.5rem 0',
                  color: '#666',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

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
            src={process.env.NODE_ENV === 'development' ? '/logo.png' : '/zhsm/logo.png'}
            alt="Zhihe Logo"
            width={150}
            height={50}
            className="me-2"
            style={{ objectFit: 'contain' }}
          />
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
            <Nav className="justify-content-end flex-grow-1 pe-3 d-none d-lg-flex">
              <Link
                href="/"
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={handleClose}
                style={{
                  color: isActive('/') ? '#ff3b30' : '#1a1a1a',
                  fontWeight: isActive('/') ? '600' : '400',
                  padding: '0.5rem 1rem',
                  fontSize: '1rem',
                  lineHeight: '1',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                {t('nav.home')}
              </Link>

              <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', position: 'relative' }}>
                <Link
                  href="/industry"
                  onClick={handleClose}
                  style={{
                    color: pathname?.startsWith('/industry') ? '#ff3b30' : '#1a1a1a',
                    fontWeight: pathname?.startsWith('/industry') ? '600' : '400',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    marginRight: '0.5rem',
                  }}
                >
                  {t('nav.industry')}
                </Link>
                <Dropdown drop="down">
                  <Dropdown.Toggle
                    as="span"
                    variant="link"
                    id="industry-dropdown"
                    style={{
                      color: pathname?.startsWith('/industry') ? '#ff3b30' : '#1a1a1a',
                      textDecoration: 'none',
                      padding: '0',
                      cursor: 'pointer',
                    }}
                  >
                    <i
                      className="bi bi-caret-down-fill"
                      style={{
                        fontSize: '0.7rem',
                        color: pathname?.startsWith('/industry') ? '#ff3b30' : '#1a1a1a',
                      }}
                    ></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} href="/industry/modification" onClick={handleClose}>
                      {t('industry.modification')}
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href="/industry/blowing" onClick={handleClose}>
                      {t('industry.blowing')}
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href="/industry/sheet" onClick={handleClose}>
                      {t('industry.sheet')}
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href="/industry/casting" onClick={handleClose}>
                      {t('industry.casting')}
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href="/industry/pipe" onClick={handleClose}>
                      {t('industry.pipe')}
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href="/industry/injection" onClick={handleClose}>
                      {t('industry.injection')}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', position: 'relative' }}>
                <Link
                  href="/products"
                  onClick={handleClose}
                  style={{
                    color: pathname?.startsWith('/products') ? '#ff3b30' : '#1a1a1a',
                    fontWeight: pathname?.startsWith('/products') ? '600' : '400',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    marginRight: '0.5rem',
                  }}
                >
                  {t('nav.products')}
                </Link>
                <Dropdown drop="down">
                  <Dropdown.Toggle
                    as="span"
                    variant="link"
                    id="products-dropdown"
                    style={{
                      color: pathname?.startsWith('/products') ? '#ff3b30' : '#1a1a1a',
                      textDecoration: 'none',
                      padding: '0',
                      cursor: 'pointer',
                    }}
                  >
                    <i
                      className="bi bi-caret-down-fill"
                      style={{
                        fontSize: '0.7rem',
                        color: pathname?.startsWith('/products') ? '#ff3b30' : '#1a1a1a',
                      }}
                    ></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} href="/products/black" onClick={handleClose}>
                      {t('products.black')}
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href="/products/white" onClick={handleClose}>
                      {t('products.white')}
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href="/products/color" onClick={handleClose}>
                      {t('products.color')}
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href="/products/fill" onClick={handleClose}>
                      {t('products.fill')}
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} href="/products/function" onClick={handleClose}>
                      {t('products.function')}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <Link
                href="/contact"
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={handleClose}
                style={{
                  color: isActive('/contact') ? '#ff3b30' : '#1a1a1a',
                  fontWeight: isActive('/contact') ? '600' : '400',
                  padding: '0.5rem 1rem',
                  fontSize: '1rem',
                  lineHeight: '1',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                {t('nav.contact')}
              </Link>

              <Dropdown drop="down">
                <Dropdown.Toggle
                  as="span"
                  variant="link"
                  id="language-dropdown"
                  style={{
                    color: '#1a1a1a',
                    textDecoration: 'none',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <i className="bi bi-globe"></i>
                  <span style={{ marginLeft: '0.25rem' }}>{language === 'zh' ? '中文' : language === 'en' ? 'EN' : 'VN'}</span>
                  <i
                    className="bi bi-caret-down-fill"
                    style={{
                      fontSize: '0.7rem',
                      marginLeft: '0.25rem',
                      color: '#1a1a1a',
                    }}
                  ></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setLanguage('zh')} style={{ color: language === 'zh' ? '#ff3b30' : '#1a1a1a', fontWeight: language === 'zh' ? '600' : '400' }}>
                    中文
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setLanguage('en')} style={{ color: language === 'en' ? '#ff3b30' : '#1a1a1a', fontWeight: language === 'en' ? '600' : '400' }}>
                    English
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setLanguage('vi')} style={{ color: language === 'vi' ? '#ff3b30' : '#1a1a1a', fontWeight: language === 'vi' ? '600' : '400' }}>
                    Tiếng Việt
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>

            {/* Mobile Navigation */}
            <Nav className="d-lg-none flex-column">
              <Link
                href="/"
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={handleClose}
                style={{
                  color: isActive('/') ? '#ff3b30' : '#1a1a1a',
                  fontWeight: isActive('/') ? '600' : '400',
                  padding: '0.75rem 0',
                  fontSize: '1rem',
                }}
              >
                {t('nav.home')}
              </Link>

              <MobileMenuDropdown
                title={t('nav.industry')}
                items={[
                  { label: t('industry.modification'), href: '/industry/modification' },
                  { label: t('industry.blowing'), href: '/industry/blowing' },
                  { label: t('industry.sheet'), href: '/industry/sheet' },
                  { label: t('industry.casting'), href: '/industry/casting' },
                  { label: t('industry.pipe'), href: '/industry/pipe' },
                  { label: t('industry.injection'), href: '/industry/injection' },
                ]}
                onItemClick={handleClose}
                mainHref="/industry"
              />

              <MobileMenuDropdown
                title={t('nav.products')}
                items={[
                  { label: t('products.black'), href: '/products/black' },
                  { label: t('products.white'), href: '/products/white' },
                  { label: t('products.color'), href: '/products/color' },
                  { label: t('products.fill'), href: '/products/fill' },
                  { label: t('products.function'), href: '/products/function' },
                ]}
                onItemClick={handleClose}
                mainHref="/products"
              />

              <Link
                href="/contact"
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={handleClose}
                style={{
                  color: isActive('/contact') ? '#ff3b30' : '#1a1a1a',
                  fontWeight: isActive('/contact') ? '600' : '400',
                  padding: '0.75rem 0',
                  fontSize: '1rem',
                }}
              >
                {t('nav.contact')}
              </Link>

              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
                <div
                  onClick={() => setLanguage('zh')}
                  style={{
                    padding: '0.75rem 0',
                    cursor: 'pointer',
                    color: language === 'zh' ? '#ff3b30' : '#1a1a1a',
                    fontWeight: language === 'zh' ? '600' : '400',
                  }}
                >
                  中文
                </div>
                <div
                  onClick={() => setLanguage('en')}
                  style={{
                    padding: '0.75rem 0',
                    cursor: 'pointer',
                    color: language === 'en' ? '#ff3b30' : '#1a1a1a',
                    fontWeight: language === 'en' ? '600' : '400',
                  }}
                >
                  English
                </div>
                <div
                  onClick={() => setLanguage('vi')}
                  style={{
                    padding: '0.75rem 0',
                    cursor: 'pointer',
                    color: language === 'vi' ? '#ff3b30' : '#1a1a1a',
                    fontWeight: language === 'vi' ? '600' : '400',
                  }}
                >
                  Tiếng Việt
                </div>
              </div>
            </Nav>
          </Offcanvas.Body>
        </BootstrapNavbar.Offcanvas>
      </Container>
    </BootstrapNavbar>
    </>
  );
}