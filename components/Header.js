export default function Header(){
  return (
    <header style={{background:'#f5f0e6', padding:20, borderBottom:'1px solid #ddd'}}>
      <div style={{display:'flex', alignItems:'center', gap:16, maxWidth:960, margin:'0 auto'}}>
        <img src="/logo_MonumentRecords.jpg" alt="Monument Records" style={{height:72}} />
        <div>
          <h2 style={{margin:0}}>Monument Vinyl</h2>
          <nav style={{marginTop:6}}>
            <a href="/" style={{marginRight:12}}>Home</a>
            <a href="https://www.ebay.com/usr/monumentvinylrecords" style={{marginRight:12}}>eBay Store</a>
            <a href=" www.youtube.com/@MonumentVinylRecords" target="_blank" rel="noreferrer" style={{marginRight:12}}>YouTube</a>
            <a href="https://www.instagram.com/monumentvinylrecords/" target="_blank" rel="noreferrer" style={{marginRight:12}}>Instagram</a>
            <a href="https://x.com/MonumentVinyl" target="_blank" rel="noreferrer">X</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
