export default function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          maxWidth: 560,
          width: '100%',
          background: '#ffffff',
          border: '1px solid #e2e6eb',
          borderRadius: 12,
          padding: 32,
        }}
      >
        <h1 style={{ margin: 0, fontSize: 28, lineHeight: 1.2 }}>Nnnnn</h1>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: '#4a5764' }}>
          This project is running in an Alloy dev sandbox via Docker Compose. The
          Vite dev server is serving this page on port 3000.
        </p>
        <ul
          style={{
            margin: 0,
            paddingLeft: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            fontSize: 15,
            color: '#4a5764',
          }}
        >
          <li>React 18 + Vite dev server with hot module reload</li>
          <li>Started by <code>docker-compose.alloy.yaml</code></li>
          <li>Edit <code>src/App.jsx</code> to start building</li>
        </ul>
      </section>
    </main>
  )
}
