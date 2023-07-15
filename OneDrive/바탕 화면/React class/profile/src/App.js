import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [showSecondTextbox, setShowSecondTextbox] = useState(false);
  const [showSecondChooseButton, setSecondChooseButton] = useState(false);
  const [showThirdTextbox, setShowThirdTextbox] = useState(false);
  const [showFourthTextbox, setShowFourthTextbox] = useState(false);
  const [showFifthTextbox, setShowFifthTextbox] = useState(false);
  const [showInputButton, setShowInputButton] = useState(false);
  const [chooseSeason, setChooseSeason] = useState(''); // 선택한 계절을 저장하는 상태
  const [chooseImport, setChooseImport] = useState(''); // 우정또는사랑을 저장하는 상태
  const [chooseDay, setChooseDay] = useState('');
  const [showSeasonButtons, setShowSeasonButtons] = useState(true); // 계절 버튼 선택 창을 표시하는 상태

  const handleNameInput = (event) => {
    const nameInput = document.getElementById('name');
    const resultDiv1 = document.getElementById('result1');
    const resultDiv2 = document.getElementById('gauge');

    if (nameInput.value.trim() !== '') {
      resultDiv1.style.display = 'block';
      resultDiv2.style.width='114px';
    }
  };

  const handleSeasonButtonClick = (season) => {
    const resultDiv1 = document.getElementById('result2');
    const resultDiv2 = document.getElementById('gauge');
    const resultDiv3 = document.getElementById('result1-1');
    setChooseSeason(season); // 선택한 계절을 상태에 저장
    setShowThirdTextbox(true); 
    resultDiv1.style.display = 'block';
    resultDiv2.style.width='171px';
    resultDiv3.style.display = 'none';
  };

  const handleShowSeasonButton = (event) => {
    const nameInput = document.getElementById('season');
    const resultDiv = document.getElementById('result1-1');
    resultDiv.style.display = 'block';
  }

  const handleNumberInput = (event) => {
    const nameInput = document.getElementById('number');
    const resultDiv1 = document.getElementById('result3');
    const resultDiv2 = document.getElementById('gauge');
    if (nameInput.value.trim() !== '') {
      resultDiv1.style.display = 'block';
      resultDiv2.style.width='228px';
    }
  };

  const handleDayInput = (event) => {
    const inputValue = event.target.value.trim();
    setShowFifthTextbox(inputValue !== '');
  };

  const handleShowTextbox = (evant) => {
    const nameInput = document.getElementById('day');
    const resultDiv = document.getElementById('result3-1');
    resultDiv.style.display = 'block';
  };

  function NumberEnd() {
    const M1Input = document.getElementById('M1');
    const M2Input = document.getElementById('M2');
    const D1Input = document.getElementById('D1');
    const D2Input = document.getElementById('D2');
    const resultDiv1 = document.getElementById('result4');
    const resultDiv2 = document.getElementById('gauge');
    if (M1Input.value.trim() !== '' && M2Input.value.trim() !== '' && D1Input.value.trim() !== '' && D2Input.value.trim() !== '') {
      resultDiv1.style.display = 'block';
      resultDiv2.style.width='285px';
    };
  };

  const handleShowImport = (evant) => {
    const nameInput = document.getElementById('import');
    const resultDiv = document.getElementById('result4-1');
    resultDiv.style.display = 'block';
  };

  const handleImportButtonClick = (evant) => {
    const resultDiv1 = document.getElementById('result5');
    const resultDiv2 = document.getElementById('gauge');
    const resultDiv3 = document.getElementById('result4-1');
    setChooseImport(evant); // 선택한 계절을 상태에 저장
    setShowThirdTextbox(true); 
    resultDiv1.style.display = 'block';
    resultDiv2.style.width='342px';
    resultDiv3.style.display = 'none';
  };

  return (
    <div className="App">
      <div>
        <div className="l1"></div>
        <div className="l2" id="gauge"></div>
      </div>
      <div className="l3">
        FACETICKER에서 사용할 프로필 포스터 정보를 등록해주세요.
      </div>
      <div style={{border: '1px' , height: '670px' , overflow: 'scroll'}}>
      <div style={{ padding: '30px' }}>
        <input
          type="text"
          id="name"
          name="name"
          minLength="2"
          maxLength="15"
          placeholder="닉네임 (최대 15자)"
          className="l5"
          onInput={handleNameInput}
        />
      </div>
      <div id="result1" style={{ display:'none', padding: '30px' }}>
        <button id="season" name="season" className="l5" onClick={() => handleShowSeasonButton()}>
          <p id="chooseSeason">{chooseSeason || '좋아하는 계절을 선택하세요'}</p>
        </button>
        <div id="result1-1" style={{ display:'none' }} className="l7">
          <button className="l8" id="spring" name="spring" onClick={() => handleSeasonButtonClick('봄')}>
            <p>봄</p>
          </button>
          <button className="l8" id="summer" name="summer" onClick={() => handleSeasonButtonClick('여름')}>
            <p>여름</p>
          </button>
          <button className="l8" id="autumn" name="autumn" onClick={() => handleSeasonButtonClick('가을')}>
            <p>가을</p>
          </button>
          <button className="l8" id="winter" name="winter" onClick={() => handleSeasonButtonClick('겨울')}>
            <p>겨울</p>
          </button>
        </div>
      </div>
      <div id="result2" style={{ display: 'none', padding: '30px' }}>
        <input
          type="number"
          id="number"
          name="number"
          className="l5"
          placeholder="좋아하는 숫자는?"
          onInput={handleNumberInput}
        />
      </div>
      <div id="result3" style={{ display: showFifthTextbox ? 'block' : 'none', padding: '30px' }}>
        <button id="day" name="day" className="l5" onClick={handleShowTextbox}>
          <p id="chooseDay">{chooseDay || '본인에게 의미있는 날은?'}</p>
        </button>
        <div id="result3-1" style={{ display:'none' }} className="l7">
          <div id="result3-2"> 
            <input id="M1" type="number" class="l9" maxLength={1} 
            onInput={(e) => {
              if (e.target.value.length > 1) {
                alert("제대로 된 월수를 입력해 주세요.");
                e.target.value = e.target.value.slice(0, 0);
              } else {
                e.target.value = e.target.value.slice(0, 1);
              }
            }}
            />
            <input id="M2"type="number" class="l9" maxLength={1} 
            onInput={(e) => {
              if (e.target.value.length > 1) {
                alert("제대로 된 월수를 입력해 주세요.");
                e.target.value = e.target.value.slice(0, 0);
              } else {
                e.target.value = e.target.value.slice(0, 1);
              }
            }}
            />
            <p>
              {'월'}
            </p>
          </div>
          <div id="result3-3">
            <input id="D1"type="number" class="l9" maxLength={1} 
              onInput={(e) => {
                if (e.target.value.length > 1) {
                  alert("제대로 된 일수를 입력해 주세요.");
                  e.target.value = e.target.value.slice(0, 0);
                } else {
                  e.target.value = e.target.value.slice(0, 1);
                }
              }}
            />
            <input id="D2"type="number" class="l9" maxLength={1} 
            onInput={(e) => {
              if (e.target.value.length > 1) {
                alert("제대로 된 일수를 입력해 주세요.");
                e.target.value = e.target.value.slice(0, 0);
              } else {
                e.target.value = e.target.value.slice(0, 1);
                NumberEnd()
              }
            }}
            />  
            <p>
              {'일'}
            </p>
          </div>
        </div>
      </div>
      <div id="result4" style={{ display:'none', padding: '30px' }}>
        <button id="import" name="import" className="l5" onClick={handleShowImport}>
          <p id="chooseImport">{chooseImport || '내게 더 중요한 것은?'}</p>
        </button>
        <div id="result4-1" style={{ display:'none' }} className='l7'>
          <div>
            <button id="love" name="love" className='l10' onClick={() => handleImportButtonClick('사랑')}>
              <p className='l11'>
                {"사랑"}
              </p>
            </button>
          </div>
          <div>
            <button id='friend' name="friend" className='l10'  onClick={() => handleImportButtonClick('우정')}>
              <p className='l11'  >
                {"우정"}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="result5" style={{ display: showInputButton ? 'block' : 'none', padding: '30px' }}>
        <button id="set_sticker" name="set_sticker" className="l6">
          스티커 꾸미기
        </button>
      </div>
    </div>
  );
}

export default App;