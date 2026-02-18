'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const basePath = '/zhsm';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      style={{
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        padding: '3rem 1rem',
        marginTop: '4rem',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              <img
                src={`${basePath}/logo.png`}
                alt="Zhihe Logo"
                width={50}
                height={50}
                style={{ objectFit: 'contain', marginRight: '0.75rem' }}
              />
              <span
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#ffffff',
                }}
              >
                Zhihe
              </span>
            </div>
            <p style={{ color: '#999', lineHeight: '1.6', marginBottom: '0' }}>
              {t('footer.description')}
            </p>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5
              style={{
                fontWeight: '600',
                marginBottom: '1.5rem',
                color: '#ffffff',
              }}
            >
              {t('nav.contact')}
            </h5>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center">
                <i
                  className="bi bi-telephone"
                  style={{
                    fontSize: '1.25rem',
                    marginRight: '0.75rem',
                    color: '#ff3b30',
                  }}
                ></i>
                <span style={{ color: '#999' }}>15818308513</span>
              </div>
              <div className="d-flex align-items-center">
                <i
                  className="bi bi-envelope"
                  style={{
                    fontSize: '1.25rem',
                    marginRight: '0.75rem',
                    color: '#ff3b30',
                  }}
                ></i>
                <span style={{ color: '#999' }}>info@zhihe.com</span>
              </div>
              <div className="d-flex align-items-start">
                <i
                  className="bi bi-geo-alt"
                  style={{
                    fontSize: '1.25rem',
                    marginRight: '0.75rem',
                    marginTop: '0.25rem',
                    color: '#ff3b30',
                  }}
                ></i>
                <span style={{ color: '#999', lineHeight: '1.6' }}>
                  {t('footer.address')}
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <h5
              style={{
                fontWeight: '600',
                marginBottom: '1.5rem',
                color: '#ffffff',
              }}
            >
              {t('footer.quickLinks')}
            </h5>
            <div className="d-flex flex-column gap-2">
              <a
                href="/industry/modification"
                style={{
                  color: '#999',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ff3b30';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#999';
                }}
              >
                {t('nav.industry')}
              </a>
              <a
                href="/products/black"
                style={{
                  color: '#999',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ff3b30';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#999';
                }}
              >
                {t('nav.products')}
              </a>
              <a
                href="/contact"
                style={{
                  color: '#999',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ff3b30';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#999';
                }}
              >
                {t('nav.contact')}
              </a>
            </div>
          </div>
        </div>
        <hr style={{ borderColor: '#333', marginTop: '2rem', marginBottom: '2rem' }} />
        <div className="text-center">
          <p style={{ color: '#666', marginBottom: '0', fontSize: '0.875rem' }}>
            © 2026 东莞市志和色母科技有限公司. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}