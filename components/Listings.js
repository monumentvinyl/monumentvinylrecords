export default function Listings({items}) {
  if (!items || items.length === 0) return <p>No listings found.</p>
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:16}}>
      {items.map((it, idx) => (
        <div key={idx} style={{border:'1px solid #eee', padding:12, borderRadius:8, background:'#fff'}}>
          <div style={{height:160, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden'}}>
            {it.PictureURL ? <img src={it.PictureURL} alt={it.Title} style={{maxHeight:'100%', maxWidth:'100%'}} /> : <div style={{color:'#999'}}>No image</div>}
          </div>
          <h3 style={{fontSize:16, margin:'8px 0'}}>{it.Title}</h3>
          <p style={{fontSize:13, color:'#444'}}>{it.Description}</p>
          <p style={{fontSize:12, color:'#666'}}><strong>Category:</strong> {it.Category}</p>
          {it['URL to eBay listing'] ? <p><a href={it['URL to eBay listing']} target="_blank" rel="noreferrer">View on eBay</a></p> : null}
        </div>
      ))}
    </div>
  )
}
