import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => (
  <div style={{ background: '#D0D0D5', minHeight: '100vh', color:'1B1B32' }}>
    <Head>
      <title>My Personal Website</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    &emsp; &emsp; &emsp;
    <h1 style={{ color: '#1B1B32', textAlign: 'center', marginTop: '1rem', marginLeft:'2rem' }}>Meilin Lyu</h1>
    <h2 style={{ color: '#1B1B32', marginTop: '3rem', marginLeft:'2rem' }}>Coding Projects</h2>
    <ul style={{ color: '#1B1B32', marginTop: '1rem' }}>
      <li style = {{ marginTop: '1rem', marginLeft:'2.5rem' }}>
        <Link href="/Project1">&nbsp; ^__^ &nbsp;&lt; Lunch Connect &gt;<br></br>
        &nbsp;&nbsp;(oo)\____ <br></br>
        &nbsp;(__)\ &emsp;&emsp;&nbsp;)\/\ <br></br>
        &emsp;&emsp;||----w | <br></br>
        &emsp;&emsp;||     &emsp;&emsp;||
        </Link>
      </li>
      <li style={{ marginTop: '1rem', marginLeft:'2.5rem' }}>Project 2</li>
      <li style={{ marginTop: '1rem' , marginLeft:'2.5rem'}}>Project 3</li>
    </ul>
    <h2 style={{ color: '#1B1B32', marginTop: '2rem', marginLeft:'2rem'}}>Thoughts</h2>
    <p style={{ color: '#1B1B32', marginLeft:'2rem' , marginTop: '0.5rem'}}>Here are some of my recent thoughts:</p>
    <ul style={{ color: '#1B1B32' }}>
      <li style={{ marginTop: '1rem' , marginLeft:'2.5rem'}}>Thought 1</li>
      <li style={{ marginTop: '1rem' , marginLeft:'2.5rem'}}>Thought 2</li>
      <li style={{ marginTop: '1rem' , marginLeft:'2.5rem'}}>Thought 3</li>
    </ul>
    <h2 style={{ color: '#1B1B32' , marginTop: '2rem', marginLeft:'2rem'}}>Artworks</h2>
    <p style={{ color: '#1B1B32', marginLeft:'2rem' , marginTop: '0.5rem'}}>Check out some of my artworks:</p>
    <ul style={{ color: '#1B1B32' }}>
      <li style={{ marginTop: '1rem', marginLeft:'2.5rem' }}></li>
      <li style={{ marginTop: '1rem' , marginLeft:'2.5rem'}}>Artwork 2</li>
      <li style={{ marginTop: '1rem' , marginLeft:'2.5rem'}}>Artwork 3</li>
    </ul>
    <p style={{ color: '#1B1B32', textAlign:'center', marginLeft:'2rem' , marginTop: '3rem'}}>Contact Me:</p>
  </div>
);

export default Home;
