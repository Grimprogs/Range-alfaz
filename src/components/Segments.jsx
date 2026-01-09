import React, { useEffect } from 'react'

const SEGMENTS = [
  {key:'masoom', title:'Masoom Rang', sub:'Roots & Wonder', bg:'/assets/masoom.jpg', poem:[
    'In the colours of innocence,',
    'we wrote our first stories—',
    'before the world taught us',
    'what words should mean.'
  ],
  hindi:[
    'मासूमियत के रंगों में,',
    'हमने अपनी पहली कहानियाँ लिखीं—',
    'उससे पहले कि दुनिया ने सिखाया',
    'शब्दों का अर्थ।'
  ]},
  {key:'sheesha', title:'Jab Sheesha Dharakta Hai', sub:'Fragments', bg:'/assets/sheesha.jpeg', poem:[
    'When the mirror cracks,',
    'we see a hundred selves—',
    'shattered by words',
    'that were never ours.'
  ],
  hindi:[
    'जब शीशा दरकता है,',
    'हम सौ चेहरे देखते हैं—',
    'उन शब्दों से टुकड़े हुए',
    'जो कभी हमारे नहीं थे।'
  ]},
  {key:'khoj', title:'Khoj', sub:'Searching', bg:'/assets/khoj.png', poem:[
    'Letters to the self,',
    'questions with no answers,',
    'a journey inward—',
    'through darkness, into light.'
  ],
  hindi:[
    'स्वयं के लिए पत्र,',
    'बिना उत्तर के प्रश्न,',
    'भीतर की यात्रा—',
    'अंधकार में, रौशनी की ओर।'
  ]},
  {key:'sweekar', title:'Sweekar', sub:'Acceptance', bg:'/assets/sweekar.jpg', poem:[
    'In forgiveness, we find wholeness,',
    'in acceptance, we find peace—',
    'the mirror repaired,',
    'the reflection, finally ours.'
  ],
  hindi:[
    'क्षमा में हम पूर्णता पाते हैं,',
    'स्वीकार में हमें शांति मिलती है—',
    'शीशा फिर से जुड़ता है,',
    'प्रतिबिंब अंततः हमारा होता है।'
  ]}
]

export default function Segments(){
  useEffect(()=>{
    const segments = document.querySelectorAll('.segment')
    if(!segments.length) return
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        const el = e.target
        const dusts = el.querySelectorAll('.dust-reveal')
        if(e.isIntersecting){
          el.classList.add('active')
          dusts.forEach((d,idx)=> setTimeout(()=>d.classList.add('visible'), idx*120))
        } else {
          el.classList.remove('active')
          dusts.forEach(d=>d.classList.remove('visible'))
        }
      })
    }, {threshold:0.6})
    segments.forEach(s=>obs.observe(s))
    return ()=>obs.disconnect()
  },[])

  // Parallax background effect for segments
  useEffect(()=>{
    const segs = document.querySelectorAll('.segment')
    if(!segs.length) return
    let ticking = false
    const onScroll = () => {
      if(ticking) return
      ticking = true
      requestAnimationFrame(()=>{
        const vh = window.innerHeight
        segs.forEach(s=>{
          const rect = s.getBoundingClientRect()
          const mid = rect.top + rect.height/2
          // compute a small percentage shift based on distance from center
          const offsetPct = 50 + ((vh/2 - mid) / vh) * 12 // ±12%
          s.style.backgroundPosition = `center ${offsetPct}%`
        })
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, {passive:true})
    window.addEventListener('resize', onScroll)
    return ()=>{ window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  },[])

  return (
    <>
      {SEGMENTS.map((s,i)=> (
        <section key={s.key} className={`segment ${s.key}`} data-segment={s.key} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.12), rgba(0,0,0,0.12)), url(${s.bg})`}}>
          <div className="segment-index" aria-hidden>{i+1}</div>
          <div className="segment-content">
            <h2 className="segment-title dust-reveal">{s.title}</h2>
            <h4 className="segment-sub dust-reveal">{s.sub}</h4>
            <p className="poem dust-reveal">{s.poem.map((l,i)=>(<span key={i}>{l}{i < s.poem.length-1 ? <br/>: null}</span>))}</p>
            {s.hindi ? (
              <p className="poem hindi dust-reveal">{s.hindi.map((l,i)=>(<span key={i}>{l}{i < s.hindi.length-1 ? <br/>: null}</span>))}</p>
            ) : null}
          </div>
        </section>
      ))}

      {/* sticky poem removed per user request */}
    </>
  )
}
