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
        padding: '2rem 1rem 1rem',
        marginTop: '3rem',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <div className="d-flex align-items-center mb-2">
              <img
                src={`${basePath}/logo.png`}
                alt="Zhihe Logo"
                width={120}
                height={40}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p style={{ color: '#999', lineHeight: '1.5', marginBottom: '0', fontSize: '0.875rem' }}>
              {t('footer.description')}
            </p>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h6
              style={{
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#ffffff',
                fontSize: '1rem',
              }}
            >
              {t('nav.contact')}
            </h6>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex align-items-center">
                <i
                  className="bi bi-telephone"
                  style={{
                    fontSize: '1rem',
                    marginRight: '0.5rem',
                    color: '#ff3b30',
                  }}
                ></i>
                <span style={{ color: '#999', fontSize: '0.875rem' }}>15818308513</span>
              </div>
              <div className="d-flex align-items-center">
                <i
                  className="bi bi-envelope"
                  style={{
                    fontSize: '1rem',
                    marginRight: '0.5rem',
                    color: '#ff3b30',
                  }}
                ></i>
                <span style={{ color: '#999', fontSize: '0.875rem' }}>2523880190@qq.com</span>
              </div>
              <div className="d-flex align-items-start">
                <i
                  className="bi bi-geo-alt"
                  style={{
                    fontSize: '1rem',
                    marginRight: '0.5rem',
                    marginTop: '0.125rem',
                    color: '#ff3b30',
                  }}
                ></i>
                <span style={{ color: '#999', lineHeight: '1.5', fontSize: '0.875rem' }}>
                  {t('footer.address')}
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h6
              style={{
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#ffffff',
                fontSize: '1rem',
              }}
            >
              {t('footer.quickLinks')}
            </h6>
            <div className="d-flex flex-column gap-1">
              <a
                href="/industry/modification"
                style={{
                  color: '#999',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '0.875rem',
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
                  fontSize: '0.875rem',
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
                  fontSize: '0.875rem',
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
        <hr style={{ borderColor: '#333', marginTop: '1.5rem', marginBottom: '1rem' }} />
        <div className="text-center">
          <p style={{ color: '#666', marginBottom: '0', fontSize: '0.75rem' }}>
            © 2026 东莞市志和色母科技有限公司. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}