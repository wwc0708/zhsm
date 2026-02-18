'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function FunctionPage() {
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
            {t('products.function')}
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

        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-10">
            <div
              className="card border-0 shadow-sm"
              style={{ borderRadius: '20px', overflow: 'hidden' }}
            >
              <div
                style={{
                  width: '100%',
                  height: '300px',
                  position: 'relative',
                }}
              >
                <Image
                  src="/images/Functional_Masterbatch.png"
                  alt="Functional Masterbatch"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="card-body p-4 p-md-5">
                <h3
                  className="mb-4"
                  style={{ fontWeight: '600', color: '#1a1a1a' }}
                >
                  {t('concept.intro')}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    color: '#666',
                    lineHeight: '1.8',
                    fontSize: '1.1rem',
                  }}
                >
                  {t('products.function.intro')}
                </p>
                <p
                  className="mb-4"
                  style={{
                    color: '#666',
                    lineHeight: '1.8',
                    fontSize: '1.1rem',
                  }}
                >
                  {t('products.function.types')}
                </p>
                <div
                  className="p-4 rounded"
                  style={{ backgroundColor: '#fff0f0', borderLeft: '4px solid #ff3b30' }}
                >
                  <h5 style={{ fontWeight: '600', color: '#1a1a1a', marginBottom: '1rem' }}>
                    消泡母粒
                  </h5>
                  <p
                    style={{
                      color: '#666',
                      lineHeight: '1.8',
                      fontSize: '1.1rem',
                      marginBottom: '0',
                    }}
                  >
                    {t('products.function.defoamer')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div
              className="card border-0 shadow-sm"
              style={{ borderRadius: '20px', overflow: 'hidden' }}
            >
              <div className="card-body p-4 p-md-5">
                <h3
                  className="mb-4"
                  style={{ fontWeight: '600', color: '#1a1a1a' }}
                >
                  {t('product.cases')}
                </h3>
                <div className="row g-4">
                  <div className="col-12 col-md-4">
                    <div
                      style={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: '16px',
                        padding: '2rem',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff0f0';
                        e.currentTarget.style.transform = 'translateY(-5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div style={{ width: '120px', height: '120px', position: 'relative', marginBottom: '1rem' }}>
                        <Image
                          src="/images/Garbage_Bags.png"
                          alt="Garbage Bags"
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <p
                        style={{
                          color: '#1a1a1a',
                          fontWeight: '500',
                          marginBottom: '0',
                        }}
                      >
                        {t('case.garbage.bag')}
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div
                      style={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: '16px',
                        padding: '2rem',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff0f0';
                        e.currentTarget.style.transform = 'translateY(-5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div style={{ width: '120px', height: '120px', position: 'relative', marginBottom: '1rem' }}>
                        <Image
                          src="/images/Engineering_Waterproof_Films.png"
                          alt="Engineering Waterproof Films"
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <p
                        style={{
                          color: '#1a1a1a',
                          fontWeight: '500',
                          marginBottom: '0',
                        }}
                      >
                        {t('case.waterproof.film')}
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div
                      style={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: '16px',
                        padding: '2rem',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff0f0';
                        e.currentTarget.style.transform = 'translateY(-5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div style={{ width: '120px', height: '120px', position: 'relative', marginBottom: '1rem' }}>
                        <Image
                          src="/images/Eletronic_Packaging.png"
                          alt="Electronic Packaging"
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <p
                        style={{
                          color: '#1a1a1a',
                          fontWeight: '500',
                          marginBottom: '0',
                        }}
                      >
                        {t('case.electronic.packaging')}
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
  );
}