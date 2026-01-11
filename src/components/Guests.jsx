import React from 'react'

const GUESTS = [
  {name:'?', role:'To Be Announced', img:'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5d5c3"/%3E%3Ctext x="50%25" y="50%25" font-size="200" text-anchor="middle" dominant-baseline="middle" fill="%238b7355" font-family="serif"%3E%3F%3C/text%3E%3C/svg%3E', bio:'Stay tuned for our special guest.'},
  {name:'?', role:'To Be Announced', img:'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5d5c3"/%3E%3Ctext x="50%25" y="50%25" font-size="200" text-anchor="middle" dominant-baseline="middle" fill="%238b7355" font-family="serif"%3E%3F%3C/text%3E%3C/svg%3E', bio:'Stay tuned for our special guest.'},
  {name:'?', role:'To Be Announced', img:'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5d5c3"/%3E%3Ctext x="50%25" y="50%25" font-size="200" text-anchor="middle" dominant-baseline="middle" fill="%238b7355" font-family="serif"%3E%3F%3C/text%3E%3C/svg%3E', bio:'Stay tuned for our special guest.'},
  {name:'?', role:'To Be Announced', img:'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23e5d5c3"/%3E%3Ctext x="50%25" y="50%25" font-size="200" text-anchor="middle" dominant-baseline="middle" fill="%238b7355" font-family="serif"%3E%3F%3C/text%3E%3C/svg%3E', bio:'Stay tuned for our special guest.'}
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
