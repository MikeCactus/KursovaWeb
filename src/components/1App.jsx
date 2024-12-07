import { useState } from 'react';
import { News } from './News';
import { RightBlock } from './3Right-block';
import { Navpanel2 } from './4nnav_panel2';
import { Events } from './6Events';
import { CitiesBlock } from './7Cities';
import { FAQ } from './FAQ';  // Імпортуємо новий компонент FAQ
import "../css/1App.css";

function App() {
  const [activateModal, setActivateModal] = useState({ in: false, another: false, up: false });
  const [admin, setAdmin] = useState({ name: null, phone: null, eIN: null, eUP: null, pIn: null, pUp: null });
  const [addList, setAddList] = useState(null);
  const [search, setSearch] = useState(null);
  const [isFaqPage, setIsFaqPage] = useState(false); // Стан для переключення на сторінку FAQ

  return (
    <>
      <div className="darkMode" id="portal">
        <News />
        <button 
          onClick={() => setIsFaqPage(!isFaqPage)} 
          style={{ height: '60px', fontSize: '14px', padding: '10px 20px' }}
        >
          {isFaqPage ? 'На головну' : 'Перейти до FAQ'} {/* Змінюємо текст кнопки */}
        </button>
        {isFaqPage ? (
          <FAQ />  // Якщо isFaqPage = true, рендеримо сторінку FAQ
        ) : (
          <RightBlock>
            <Navpanel2 admin={admin} setAdmin={setAdmin} activateModal={activateModal} setActivateModal={setActivateModal} />
            <div>
              <Events search={search} setSearch={setSearch} addList={addList} setAddList={setAddList} admin={admin} setAdmin={setAdmin} activateEvent={activateModal} setActivateModal={setActivateModal} />
              <CitiesBlock search={search} setSearch={setSearch} />
            </div>
          </RightBlock>
        )}
      </div>
    </>
  );
}

export default App;
