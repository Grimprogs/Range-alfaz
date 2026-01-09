import React, { useEffect, useRef, useState } from 'react'

export default function AudioControl(){
  const audioRef = useRef(null)
  const [muted, setMuted] = useState(false)

  useEffect(()=>{
    const a = audioRef.current
    if(!a) return
    a.muted = false
    a.loop = true
    // try to load and play (may be blocked by browser autoplay policies)
    a.load()
    a.play().catch(()=>{})
    const tryPlay = () => { a.play().catch(()=>{}) }
    // attempt play on first user gesture
    ['click','keydown','touchstart'].forEach(ev => document.addEventListener(ev, tryPlay, {once:true}))
    return ()=>{
      ['click','keydown','touchstart'].forEach(ev => document.removeEventListener(ev, tryPlay))
    }
  },[])

  const toggle = () => {
    const a = audioRef.current
    if(!a) return
    const willMute = !muted
    try{
      a.muted = willMute
      if(!willMute) a.play().catch(()=>{})
    }catch(e){}
    setMuted(willMute)
  }

  return (
    <>
      <audio ref={audioRef} id="siteAudio">
        <source src="/assets/site-audio.mp3" type="audio/mpeg" />
        {/* You can replace /assets/site-audio.mp3 with your audio file */}
      </audio>
      <button aria-pressed={!muted} className={`audio-toggle ${muted? 'muted':'playing'}`} onClick={toggle} title={muted? 'Unmute audio':'Mute audio'}>
        {muted ? '🔇' : '🔊'}
      </button>
    </>
  )
}
