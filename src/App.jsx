export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#000',
        color: 'white',
        padding: '40px',
        fontFamily: 'Arial'
      }}
    >
      <h1 style={{ color: '#3b82f6', fontSize: '50px' }}>
        SocialMarket
      </h1>

      <p style={{ color: '#aaa', marginBottom: '40px' }}>
        Buy & Sell Digital Assets Securely
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
          gap: '20px'
        }}
      >
        <div
          style={{
            background: '#111',
            padding: '20px',
            borderRadius: '20px'
          }}
        >
          <h2>YouTube Gaming Channel</h2>
          <p>120K Subscribers</p>
          <h3 style={{ color: '#22c55e' }}>$850</h3>
        </div>

        <div
          style={{
            background: '#111',
            padding: '20px',
            borderRadius: '20px'
          }}
        >
          <h2>TikTok Viral Page</h2>
          <p>80K Followers</p>
          <h3 style={{ color: '#22c55e' }}>$420</h3>
        </div>

        <div
          style={{
            background: '#111',
            padding: '20px',
            borderRadius: '20px'
          }}
        >
          <h2>Instagram Travel Account</h2>
          <p>55K Followers</p>
          <h3 style={{ color: '#22c55e' }}>$300</h3>
        </div>
      </div>
    </div>
  )
}
