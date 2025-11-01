import { useState } from 'react'
import Papa from 'papaparse'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Listings from '../components/Listings'

export default function Admin() {
  const [key, setKey] = useState('')
  const [authorized, setAuthorized] = useState(false)
  const [items, setItems] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('monument_listings') : null
    return saved ? JSON.parse(saved) : []
  })

  const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY || 'vinyl2025'

  function checkKey(e) {
    e.preventDefault()
    if (key === ADMIN_KEY) {
      setAuthorized(true)
    } else {
      alert('Invalid key')
    }
  }

  function handleFile(e) {
    const file = e.target.files[0]
    if (!file) return
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const data = results.data.filter(Boolean)
        setItems(data)
        localStorage.setItem('monument_listings', JSON.stringify(data))
        alert('CSV parsed and stored to browser localStorage. To publish permanently, add the CSV to your repo / public folder.')
      }
    })
  }

  return (
    <div>
      <Header />
      <main style={{padding:'1rem', maxWidth:960, margin:'0 auto'}}>
        <h1>Admin - Upload Listings CSV</h1>
        {!authorized ? (
          <form onSubmit={checkKey}>
            <label>Enter admin key: <input value={key} onChange={e=>setKey(e.target.value)} /></label>
            <button type="submit">Unlock</button>
            <p style={{marginTop:8}}>Default/dev key: <code>vinyl2025</code> (set NEXT_PUBLIC_ADMIN_KEY in Vercel to override)</p>
          </form>
        ) : (
          <>
            <p>Upload a CSV with headers: Action,ItemID,Category,Title,Description,PictureURL,URL to eBay listing</p>
            <input type="file" accept=".csv" onChange={handleFile} />
            <p style={{color:'#666'}}>Uploaded CSV is stored to your browser localStorage for preview. To make changes live, replace <code>/public/listings.csv</code> in your repo.</p>
            <Listings items={items} />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
