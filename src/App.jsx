import React from 'react'
import Hero from './components/Hero'
import Segments from './components/Segments'
import Guests from './components/Guests'
import FinalCTA from './components/FinalCTA'
import AudioControl from './components/AudioControl'

export default function App(){
  return (
    <div>
      <a className="submit-btn submit-btn--left" href="https://docs.google.com/forms/d/e/1FAIpQLSdTDzOjJWSVX6L7drA56p6IOPKQg6GtECuKkJRtUYCWRXgJgA/viewform" title="Submit your poem, song, or story" aria-label="Submit your poem, song, or story" target="_blank" rel="noopener">Submit Poem / Song / Story</a>
      <AudioControl />
      <Hero />
      <main className="scroll-container">
        <div className="segments-intro">
          <p className="segments-note dust-reveal visible">These four are the segments of our event</p>
        </div>
        <Segments />
      </main>
      <Guests />
      <FinalCTA />
      <footer className="site-footer">
        <p>Rang-E-Alfaz © All rights reserved</p>
        <p className="insta">@rang_e_alfaz</p>
      </footer>
    </div>
  )
}
