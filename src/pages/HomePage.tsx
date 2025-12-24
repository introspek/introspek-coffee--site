import './HomePage.css'

import roasterImage from '~/assets/roaster.jpg'

export function HomePage() {
  return (
    <main className="home" style={{ backgroundImage: `url(${roasterImage})` }}>
      <div className="homeContent">
        <h1 className="homeLogo">INTROSPEK</h1>
        <p className="homeSubtitle">bold roast. zero compromise.</p>
        <p className="homeComingSoon">Coming soon</p>
      </div>
    </main>
  )
}
