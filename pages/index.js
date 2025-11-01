import { useEffect, useState } from 'react'
import Papa from 'papaparse'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Listings from '../components/Listings'

export default function Home() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    // Try loading public/listings.csv first
    fetch('/listings.csv')
      .then(r => {
        if (!r.ok) throw new Error('No public CSV')
        return r.text()
      })
      .then(text => {
        const parsed = Papa.parse(text, { header: true })
        setListings(parsed.data.filter(Boolean))
      })
      .catch(() => {
        // Fallback: load from localStorage if admin uploaded
        const saved = localStorage.getItem('monument_listings')
        if (saved) {
          try {
            setListings(JSON.parse(saved))
          } catch (e) { console.error(e) }
        }
      })
  }, [])

  return (
    <div>
      <Header />
      <main style={{padding:'1rem', maxWidth:960, margin:'0 auto'}}>
        <h1>Monument Vinyl — Featured Listings</h1>
        <p>Listings are read from <code>/public/listings.csv</code>. To update permanently, replace that file in your repo.</p>
        <Listings items={listings} />
      </main>
      <Footer />
    </div>
  )
}
