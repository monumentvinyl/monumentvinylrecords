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
        <h1>Monument Vinyl Records — Featured Listings</h1>
        <p>Check out featured listings below. We have items available both on our eBay store and through major retailers. Follow the links below.</p>
        <p>If you don't see a specific item that you're looking for, you can contact us via email at monumentvinyl@gmail.com our through our Social Media accounts linked above.</p>
        <Listings items={listings} />
      </main>
      <Footer />
    </div>
  )
}
