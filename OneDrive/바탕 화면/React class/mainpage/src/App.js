import logo from './logo.svg';
import bell from './img/ph_bell-light.svg';
import hamburger from './img/menu-burger.svg';
import message from './img/ri_message-3-line.svg';
import shine from './img/download-removebg-preview 1 (1).png';
import face from './img/Ellipse 103.png';
import share from './img/share.svg';
import download from './img/download.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showFooter, setShowFooter] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleFooter = () => {
    setShowFooter(!showFooter);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <div>
        <button>
          <img src={bell} className='l1' alt='bell' />
        </button>
        <button onClick={toggleFooter}>
          <img src={hamburger} className='l1' alt='hamburger' />
        </button>
        <button>
          <img src={message} className='l1' alt='message' />
        </button>
      </div>
      <div className='l2'>
        <div style={{ position: 'absolute', left: '25px', top: '150px' }} name='사진'>
          <img src={face} alt='face' />
        </div>
        <div style={{ position: 'relative' }}>
          <img src={shine} alt='shine' />
          <p id='' className='l3'>이런 귀한 곳에 누추한 분들이..! 어서 오세유</p>
        </div>
        <div style={{ width: '390px', height: '100px' }}>
          <div style={{ float: 'left' }} name='이름'>
            <p id='' className='l4'>홍길동</p>
          </div>
          <div style={{ float: 'left' }} name='숫자'>
            <p id='' className='l5'>#28</p>
          </div>
          <div style={{ float: 'left' }} name='날짜'>
            <p id='' className='l6'>0628</p>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div name='사자성어'>
            <p id='' className='l7'>오매불망</p>
          </div>
          <div name='한자'>
            <p id='' className='l8'>寤寐不忘</p>
          </div>
          <div name='뜻'>
            <p id='' className='l9'>자나깨나 잊지 못함</p>
          </div>
        </div>
        <div>
          <button className='l10'>
            <img src={share} alt='share' />
          </button>
          <button className='l10'>
            <img src={download} alt='download' />
          </button>
        </div>
      </div>
      {showFooter && (
        <footer className="FixedFooter">
          <div>
            <button id='' name='cancel' className='l11'>
              <p>취소</p>
            </button>
          </div>
          <div>
            <button id='' name='resetting' className='l11' onClick={toggleModal}>
              <p>프로필 재설정</p>
            </button>
          </div>
        </footer>
      )}
      {showModal && (
        <div className="Modal">
          <div>
            <button>상태메시지 수정</button>
            <button>포스터 정보 수정</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
