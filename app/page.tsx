'use client';

import React from 'react';
import { useLanguage } from './contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const basePath = '/zhsm';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: 'calc(100vh - 76px)' }}>
      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: '80vh',
          background: 'linear-gradient(135deg, #ffffff 0%, #fff0f0 100%)',
          padding: '2rem 1rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(255,59,48,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            bottom: '-30%',
            left: '-20%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(255,59,48,0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        ></div>

        <div className="container text-center position-relative" style={{ zIndex: 1 }}>
          <div
            style={{
              animation: 'fadeInUp 1s ease-out',
            }}
          >
            <h1
              className="display-4 mb-4"
              style={{
                fontWeight: '700',
                color: '#1a1a1a',
                letterSpacing: '-1px',
                marginBottom: '1.5rem',
              }}
            >
              {t('home.welcome')}
            </h1>
            <p
              className="lead mb-5"
              style={{
                color: '#666',
                fontSize: '1.25rem',
                maxWidth: '600px',
                margin: '0 auto 2.5rem',
                lineHeight: '1.6',
              }}
            >
              {t('home.subtitle')}
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link
                href="/industry/modification"
                className="btn btn-lg"
                style={{
                  backgroundColor: '#ff3b30',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '0.75rem 2.5rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  minWidth: '180px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ff2d20';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(255,59,48,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ff3b30';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {t('nav.industry')}
              </Link>
              <Link
                href="/products/black"
                className="btn btn-lg"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#ff3b30',
                  border: '2px solid #ff3b30',
                  borderRadius: '25px',
                  padding: '0.75rem 2.5rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  minWidth: '180px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff0f0';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(255,59,48,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {t('nav.products')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 1rem', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div
                className="card h-100 border-0"
                style={{
                  borderRadius: '20px',
                  padding: '2rem',
                  backgroundColor: '#f8f9fa',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                  e.currentTarget.style.backgroundColor = '#fff0f0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                }}
              >
                <div className="text-center mb-3">
                  <div style={{ width: '120px', height: '120px', position: 'relative', margin: '0 auto' }}>
                    <Image
                      src={`${basePath}/Industry.png`}
                      alt="Industry"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <h3
                  className="text-center mb-3"
                  style={{ fontWeight: '600', color: '#1a1a1a' }}
                >
                  {t('nav.industry')}
                </h3>
                <p className="text-center" style={{ color: '#666', lineHeight: '1.6' }}>
                  {t('industry.modification')}, {t('industry.blowing')},{' '}
                  {t('industry.sheet')}, {t('industry.casting')},{' '}
                  {t('industry.pipe')}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div
                className="card h-100 border-0"
                style={{
                  borderRadius: '20px',
                  padding: '2rem',
                  backgroundColor: '#f8f9fa',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                  e.currentTarget.style.backgroundColor = '#fff0f0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                }}
              >
                <div className="text-center mb-3">
                  <div style={{ width: '120px', height: '120px', position: 'relative', margin: '0 auto' }}>
                    <Image
                      src={`${basePath}/Products.png`}
                      alt="Products"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <h3
                  className="text-center mb-3"
                  style={{ fontWeight: '600', color: '#1a1a1a' }}
                >
                  {t('nav.products')}
                </h3>
                <p className="text-center" style={{ color: '#666', lineHeight: '1.6' }}>
                  {t('products.black')}, {t('products.white')},{' '}
                  {t('products.color')}, {t('products.fill')},{' '}
                  {t('products.function')}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div
                className="card h-100 border-0"
                style={{
                  borderRadius: '20px',
                  padding: '2rem',
                  backgroundColor: '#f8f9fa',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                  e.currentTarget.style.backgroundColor = '#fff0f0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                }}
              >
                <div className="text-center mb-3">
                  <div style={{ width: '120px', height: '120px', position: 'relative', margin: '0 auto' }}>
                    <Image
                      src={`${basePath}/Contact.png`}
                      alt="Contact"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <h3
                  className="text-center mb-3"
                  style={{ fontWeight: '600', color: '#1a1a1a' }}
                >
                  {t('nav.contact')}
                </h3>
                <p className="text-center" style={{ color: '#666', lineHeight: '1.6' }}>
                  15818308513
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}