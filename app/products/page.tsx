'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const basePath = process.env.NODE_ENV === 'development' ? '' : '/zhsm';

export default function ProductsListPage() {
  const { t } = useLanguage();

  const products = [
    { id: 'black', title: 'products.black', image: 'Black_Masterbatch.png' },
    { id: 'white', title: 'products.white', image: 'White_Masterbatch.png' },
    { id: 'color', title: 'products.color', image: 'Color_Masterbatch.png' },
    { id: 'fill', title: 'products.fill', image: 'Filler_Masterbatch.png' },
    { id: 'function', title: 'products.function', image: 'Functional_Masterbatch.png' },
  ];

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
            {t('nav.products')}
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

        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4">
              <Link
                href={`/products/${product.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="card h-100 border-0"
                  style={{
                    borderRadius: '20px',
                    padding: '2rem',
                    backgroundColor: '#ffffff',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                    e.currentTarget.style.backgroundColor = '#fff0f0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                >
                  <div className="text-center mb-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                      src={`${basePath}/${product.image}`}
                      alt={t(product.title)}
                      style={{ width: '200px', height: '200px', objectFit: 'contain', display: 'block' }}
                    />
                  </div>
                  <h3
                    className="text-center"
                    style={{ fontWeight: '600', color: '#1a1a1a' }}
                  >
                    {t(product.title)}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}