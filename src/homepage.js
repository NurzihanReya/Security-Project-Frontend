import React from 'react';
import Container from 'react-bootstrap/Container';
import AppHeader from './components/navbar';
import HomeCarousel from './components/carousel';
import SectionCard from './components/homepageCards';

export default function Home() {
  return (
    <>
        <AppHeader></AppHeader>
        <HomeCarousel></HomeCarousel>

        <Container>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='my-4'>
          <h2>StudentRoom - Browse Categories</h2>
          </div>
          <SectionCard></SectionCard>
        </Container>       
    </>
  );
}