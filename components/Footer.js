export default function Footer(){
  return (
    <footer style={{background:'#faf9f7', padding:20, borderTop:'1px solid #eee', marginTop:40}}>
      <div style={{maxWidth:960, margin:'0 auto', textAlign:'center'}}>
        <p style={{margin:6}}>Follow us:
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" style={{marginLeft:8}}>YouTube</a> |
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" style={{marginLeft:8}}>Instagram</a> |
          <a href="https://x.com/" target="_blank" rel="noreferrer" style={{marginLeft:8}}>X</a>
        </p>
        <p style={{margin:6, color:'#666'}}>© Monument Vinyl</p>
      </div>
    </footer>
  )
}
