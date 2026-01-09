import React from 'react'

const GUESTS = [
  {name:'Amara Rizvi', role:'Poet', img:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop', bio:'A voice that speaks of forgotten dreams and unspoken truths.'},
  {name:'Rohit Sen', role:'Reader', img:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop', bio:'Words are his sanctuary, and every reading is a homecoming.'},
  {name:'Nisha Kapoor', role:'Singer', img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop', bio:'Her melodies carry the weight of untold stories and ancient echoes.'},
  {name:'Imran Ali', role:'Musician', img:'https://images.unsplash.com/photo-1531123414780-f55f5e6a88f6?q=80&w=800&auto=format&fit=crop', bio:'In his hands, instruments become vessels of emotion and memory.'}
]

export default function Guests(){
  return (
    <section className="guests-section">
      <h3 className="section-heading">Guests &amp; Performers</h3>
      {GUESTS.map((g,i)=> (
        <article key={g.name} className={`guest ${i%2? 'guest-right':'guest-left'}`}>
          <div className="guest-image"><img className="rect" src={g.img} alt={g.name} loading="lazy"/></div>
          <div className="guest-info">
            <h4>{g.name}</h4>
            <p className="role">{g.role}</p>
            <p className="bio">{g.bio}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
