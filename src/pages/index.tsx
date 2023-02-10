import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import back1 from "../../public/back1.png"

const Home = () => (
  <div style={{ backgroundImage: back1.src, backgroundSize: 'cover',backgroundRepeat: 'no-repeat', minHeight: '100vh', backgroundPosition: 'center center',height: '100vh',width: '100vw'}}>
    <Head>
      <title>My Personal Website</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    &emsp; &emsp; &emsp;
    <p style={{color: '#65360F', textAlign: 'center', marginLeft: '2rem'}}>╔═══════════════╗</p>
    <h1 style={{ color: '#1B1B32', textAlign: 'center', marginTop: '0.15rem', marginLeft:'2rem' }}>Meilin Lyu</h1>
    <p style={{textAlign: 'center', marginLeft: '2rem'}}>╚═══════════════╝</p>
    
    <p style={{ color: '#1B1B32', textAlign:'center', marginLeft:'2rem' , marginTop: '1rem'}}><a href="https://github.com/lyumeilin01">GitHub&emsp;</a><a href="https://drive.google.com/file/d/1zPz7qIbTikRlbft04QKyjBY-CJuXFlak/view?usp=share_link">&emsp;CV</a></p>
    <ul style={{ color: '#4A2511', marginTop: '20rem' }}>
      <p style = {{ marginTop: '1rem', marginLeft:'28rem' }}>
        <Link href="/Project1">&nbsp; <b><b>^__^ &nbsp;&lt; School work &gt;<br></br>
        &nbsp;&nbsp;(oo)\____ <br></br>
        &nbsp;(__)\ &emsp;&emsp;&nbsp;)\/\/\/ <br></br>
        &emsp;&emsp;||----w | <br></br>
        &emsp;&emsp;||     &emsp;&emsp;|| </b></b>

        </Link>
      </p>
    </ul>
    
    
    <ul style={{ color: '#4A2511' }}>

      <p style = {{ color: '#4A2511' , marginTop: '-10rem', marginLeft:'37rem' }}>
        <Link href="/Project1">&nbsp; <strong>*___* &nbsp;&lt; Projects &gt;<br></br>
        &nbsp;&nbsp;(@@)\____ <br></br>
        &nbsp;(_u__)\ &emsp;&emsp;&nbsp;&nbsp;)\/\ <br></br>
        &emsp;&nbsp;||--------w | <br></br>
        &emsp;&nbsp;||     &emsp;&emsp;&emsp;||</strong>
        </Link>
      </p>
      <p style = {{ color: '#4A2511' , marginTop: '-1rem', marginLeft:'43rem' }}>
        <Link href="/Project1">&nbsp; <strong>^__^ &nbsp;&lt; Current work &gt;<br></br>
        &nbsp;&nbsp;(^^)\____ <br></br>
        &nbsp;( U )\ &emsp;&emsp;&nbsp;)\/\ <br></br>
        &emsp;&emsp;||----w | <br></br>
        &emsp;&emsp;||     &emsp;&emsp;||</strong>
        </Link>
      </p>
    </ul>

  </div>



);  

export default Home;
