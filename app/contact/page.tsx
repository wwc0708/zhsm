'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: 'calc(100vh - 76px)' }}>
      <div className="container py-5">
        <Link
          href="/"
          className="d-inline-flex align-items-center mb-4 text-decoration-none"
          style={{ color: '#ff3b30', fontWeight: '500' }}
        >
          <i className="bi bi-arrow-left me-2"></i>
          {t('back')}
        </Link>

        <div className="text-center mb-5">
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '1rem',
            }}
          >
            {t('contact.title')}
          </h1>
          <div
            style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#ff3b30',
              margin: '0 auto',
              borderRadius: '2px',
            }}
          ></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div
              className="card border-0 shadow-sm"
              style={{ borderRadius: '20px', overflow: 'hidden' }}
            >
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  background: 'linear-gradient(135deg, #ff3b30 0%, #ff6b5b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <i
                  className="bi bi-envelope-at"
                  style={{ fontSize: '5rem', color: 'rgba(255,255,255,0.8)' }}
                ></i>
              </div>
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-5">
                  <h3
                    style={{
                      fontWeight: '700',
                      color: '#1a1a1a',
                      fontSize: '1.5rem',
                      marginBottom: '1rem',
                    }}
                  >
                    {t('contact.company')}
                  </h3>
                  <div
                    style={{
                      width: '60px',
                      height: '3px',
                      backgroundColor: '#ff3b30',
                      margin: '0 auto',
                      borderRadius: '2px',
                    }}
                  ></div>
                </div>

                <div className="row g-4">
                  <div className="col-12 col-md-6">
                    <div
                      className="d-flex align-items-start p-4 rounded"
                      style={{
                        backgroundColor: '#f8f9fa',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff0f0';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                      }}
                    >
                      <i
                        className="bi bi-telephone-fill me-3"
                        style={{ fontSize: '1.8rem', color: '#ff3b30' }}
                      ></i>
                      <div>
                        <h6
                          className="mb-2"
                          style={{ fontWeight: '600', color: '#1a1a1a' }}
                        >
                          {t('contact.phone').split('：')[0]}
                        </h6>
                        <p
                          className="mb-0"
                          style={{ color: '#666', fontSize: '1.1rem' }}
                        >
                          {t('contact.phone').split('：')[1]}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div
                      className="d-flex align-items-start p-4 rounded"
                      style={{
                        backgroundColor: '#f8f9fa',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff0f0';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                      }}
                    >
                      <i
                        className="bi bi-printer-fill me-3"
                        style={{ fontSize: '1.8rem', color: '#ff3b30' }}
                      ></i>
                      <div>
                        <h6
                          className="mb-2"
                          style={{ fontWeight: '600', color: '#1a1a1a' }}
                        >
                          {t('contact.fax').split('：')[0]}
                        </h6>
                        <p
                          className="mb-0"
                          style={{ color: '#666', fontSize: '1.1rem' }}
                        >
                          {t('contact.fax').split('：')[1]}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div
                      className="d-flex align-items-start p-4 rounded"
                      style={{
                        backgroundColor: '#f8f9fa',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff0f0';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                      }}
                    >
                      <i
                        className="bi bi-envelope-fill me-3"
                        style={{ fontSize: '1.8rem', color: '#ff3b30' }}
                      ></i>
                      <div>
                        <h6
                          className="mb-2"
                          style={{ fontWeight: '600', color: '#1a1a1a' }}
                        >
                          {t('contact.email').split('：')[0]}
                        </h6>
                        <p
                          className="mb-0"
                          style={{ color: '#666', fontSize: '1.1rem' }}
                        >
                          {t('contact.email').split('：')[1]}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div
                      className="d-flex align-items-start p-4 rounded"
                      style={{
                        backgroundColor: '#f8f9fa',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff0f0';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                      }}
                    >
                      <i
                        className="bi bi-geo-alt-fill me-3"
                        style={{ fontSize: '1.8rem', color: '#ff3b30' }}
                      ></i>
                      <div>
                        <h6
                          className="mb-2"
                          style={{ fontWeight: '600', color: '#1a1a1a' }}
                        >
                          {t('contact.address').split('：')[0]}
                        </h6>
                        <p
                          className="mb-0"
                          style={{ color: '#666', fontSize: '1.1rem' }}
                        >
                          {t('contact.address').split('：')[1]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}