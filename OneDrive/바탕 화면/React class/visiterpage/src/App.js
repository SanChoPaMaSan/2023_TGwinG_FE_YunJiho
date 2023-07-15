import bell from './img/ph_bell-light.svg';
import hamburger from './img/menu-burger.svg';
import message from './img/ri_message-3-line.svg';
import shine from './img/download-removebg-preview 1 (1).png';
import face from './img/Ellipse 103.png';
import share from './img/share.svg';
import download from './img/download.svg';
import logo from './img/FACETICKER 1.png';
import group from './img/Group.svg';
import record from './img/mingcute_face-line.svg';
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
        <button onClick={toggleFooter}>
          <img src={hamburger} className='l1' alt='hamburger' />
        </button>
        <button>
          <img src={logo} className='l12' alt='logo' />
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
            <img src={group} alt='group' />
          </button>
          <button className='l10'>
            <img src={record} alt='record' onClick={toggleModal}/>
          </button>
        </div>
      </div>
      {showFooter && (
        <footer className="FixedFooter">
          <div>
            <button id='' name='gohome' className='l11'>
              <p>나의 프로필</p>
            </button>
          </div>
          <div>
          </div>
        </footer>
      )}
      {showModal && (
        <div className="Modal">
          <div>
            <div>
              <p>닉네임 공간에 흔적을 남기기 전, 로그인하시겠어요?</p>
            </div>
            <button>아니</button>
            <button>응</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
