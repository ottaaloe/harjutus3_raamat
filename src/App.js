import { useState } from 'react';
import { RAAMATUD } from './andmed';
import RaamatDetail from './RaamatDetail';

import './App.css';

function App() {
  const [valitudRaamatuId, setValitudRaamatuId] = useState(0);

  const muudaValitudRaamatuId = (id) => {
    console.log(id)
    setValitudRaamatuId(id);
    return;
  }

  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', verticalAlign: 'top', gap: '20', padding:'20px' }}>
          <h1>Raamatud</h1>
          {RAAMATUD.map((raamat) => (
            <div>
              <a className="App-link" key={raamat.id} onClick={() => muudaValitudRaamatuId(raamat.id)} >{raamat.pealkiri}</a>
            </div>
          ))
          }
        </div>
        <div>
        {<RaamatDetail raamat={RAAMATUD[valitudRaamatuId]} />}
        </div>

      </header>
    </div>
  );

}


export default App;
