


import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/tech.scss';

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger:"#main",
        start: '38% 50%',
        end: '100% 50%',
        scrub: 5,
        pin: true,
        markers: true,
      },
    });

    tl.to('.tech-text', {
      top: '-7%',
    }, 'a')
      .to('#card-one', {
        top: '35%',
      }, 'a')
      .to('#card-two', {
        top: '130%',
      }, 'a')
      .to('#card-two', {
        top: '42%',
      }, 'b')
      .to('#card-one', {
        width: '65%',
        height: '65vh',
      }, 'b')
      .to('#card-three', {
        top: '130%',
      }, 'b')
      .to('#card-three', {
        top: '50%',
      }, 'c')
      .to('#card-two', {
        width: '70%',
        height: '70vh',
      }, 'c')
  }, []);

  return (
    <div id="main">
        <div class="text">
            <div class="text-img"></div>
            <h1>Create new feature at <br/>Gravity Coding</h1>
            <p>Subscribe our channel for latest features of awwwards website. Check out other videos <br/>for learning             web development with great UI design and animation based.</p>
        </div>
        <div class="cards" id="card-one"></div>
        <div class="cards" id="card-two"></div>
        <div class="cards" id="card-three"></div>
    </div>
  );
};

export default Tech;
