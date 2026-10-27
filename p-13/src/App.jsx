
import { useState } from 'react';

function App() {
  const [router, setRouter] = useState('HashRouter');
  const [page, setPage] = useState('Home');

  const changeRouter = (value) => {
    setRouter(value);
    setPage('Home');
  };

  return (
    <div>
      <h1>React Router Demonstration</h1>

      <button onClick={() => changeRouter('HashRouter')}>
        HashRouter
      </button>{' '}

      <button onClick={() => changeRouter('MemoryRouter')}>
        MemoryRouter
      </button>{' '}

      <button onClick={() => changeRouter('StaticRouter')}>
        StaticRouter
      </button>

      <hr />

      <h2>{router}</h2>

      <button onClick={() => setPage('Home')}>Home</button>{' '}
      <button onClick={() => setPage('About')}>About</button>{' '}
      <button onClick={() => setPage('Contact')}>Contact</button>

      <hr />

      <h3>{page} Page</h3>

      {router === 'HashRouter' && (
        <p>URL Example: http://localhost:5173/#/{page.toLowerCase()}</p>
      )}

      {router === 'MemoryRouter' && (
        <p>Navigation is stored in memory, not in the URL.</p>
      )}

      {router === 'StaticRouter' && (
        <p>Static routing is mainly used for server-side rendering.</p>
      )}

      <p>
        Current Router: {router}
      </p>
    </div>
  );
}

export default App;
