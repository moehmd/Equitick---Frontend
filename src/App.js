import { Row } from 'react-bootstrap';
import Search from './components/search/Search'
import Trades from './components/trades/Trades';

function App() {
  return (
    <main>
    <>
      <Row>
        <Search />
      </Row>
      <Row>
        <Trades />
      </Row>
    </>
  </main>
  );
}

export default App;
