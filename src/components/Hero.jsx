import React, { useEffect } from 'react'

export default function Hero(){
  useEffect(()=>{
    const els = typeof document !== 'undefined' ? document.querySelectorAll('.hero .dust-reveal') : []
    els.forEach((el,i)=> setTimeout(()=>el.classList.add('visible'), 400 + i*300))

    if (typeof document === 'undefined') return
    const vid = document.getElementById('heroVideo')
    if (vid){
      const tryPlay = () => { try { vid.play().catch(()=>{}) } catch(e){} }
      tryPlay()
      const events = ['click','keydown','touchstart']
      events.forEach(ev => {
        try {
          document.addEventListener(ev, tryPlay, {once:true})
        } catch (e) {
          // ignore if addEventListener is not available or fails
        }
      })
    }
  },[])

  return (
    <header className="hero">
      <video className="hero-video" id="heroVideo" autoPlay muted loop playsInline>
        <source src="/assets/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1 className="hero-title dust-reveal">RANG-E-ALFAZ</h1>
        <h2 className="hero-subtitle dust-reveal">DARPAN</h2>
        <p className="hero-theme dust-reveal">Identity — Reflection</p>
      </div>
    </header>
  )
}
