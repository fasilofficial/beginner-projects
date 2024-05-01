const insert = document.getElementById('insert')
// const key = document.querySelectorAll('.key');



window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="keys">
    ${event.key === ' ' ? 'Space' : event.key} 
    <small>event.key</small>
  </div>

  <div class="keys">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="keys">
    ${event.code}
    <small>event.code</small>
  </div>
  `
 switch (event.keyCode) {
  case 8:
    document.getElementById('8').classList.add('test');
    break;
  case 9:
    document.getElementById('9').classList.add('test');
    break;
  case 13:
    if(event.code === 'Enter') {
      document.getElementById('13-left').classList.add('test');
      break;
    } else {
      document.getElementById('13-right').classList.add('test');
      break;
    }
  case 16:
    if(event.code === 'ShiftLeft') {
      document.getElementById('16-left').classList.add('test');
      break;
    } else {
      document.getElementById('16-right').classList.add('test');
      break;
    }
  case 17:
    if(event.code === 'ControlLeft') {
        document.getElementById('17-left').classList.add('test');
        break;
    } else {
      document.getElementById('17-right').classList.add('test');
      break;
    }
  case 18:
    if(event.code === 'AltLeft') {
        document.getElementById('18-left').classList.add('test');
        break;
    } else {
      document.getElementById('18-right').classList.add('test');
      break;
    }
  case 20:
    document.getElementById('20').classList.add('test');
    break;
  case 32:
    document.getElementById('32').classList.add('test');
    break;
  case 35:
    document.getElementById('35').classList.add('test');
    break;
  case 37:
    document.getElementById('37').classList.add('test');
    break;
  case 38:
    document.querySelector('.up').classList.add('test');
    break;
  case 39:
    document.getElementById('39').classList.add('test');
    break;
  case 40:
    document.querySelector('.down').classList.add('test');
    break;
  case 45:
    if(event.code === 'Insert') {
        document.getElementById('45-left').classList.add('test');
        break;
    } else {
      document.getElementById('96').classList.add('test');
      break;
    }
  case 46:
    if(event.code === 'Delete') {
        document.getElementById('46-left').classList.add('test');
        break;
    } else {
      document.getElementById('110').classList.add('test');
      break;
    }
  case 48:
    document.getElementById('48').classList.add('test');
    break;
  case 49:
    document.getElementById('49').classList.add('test');
    break;
  case 50:
    document.getElementById('50').classList.add('test');
    break;
  case 51:
    document.getElementById('51').classList.add('test');
    break;
  case 52:
    document.getElementById('52').classList.add('test');
    break;
  case 53:
    document.getElementById('53').classList.add('test');
    break;
  case 54:
    document.getElementById('54').classList.add('test');
    break;
  case 55:
    document.getElementById('55').classList.add('test');
    break;
  case 56:
    document.getElementById('56').classList.add('test');
    break;
  case 57:
    document.getElementById('57').classList.add('test');
    break;
  case 65:
    document.getElementById('65').classList.add('test');
    break;
  case 66:
    document.getElementById('66').classList.add('test');
    break;
  case 67:
    document.getElementById('67').classList.add('test');
    break;
  case 68:
    document.getElementById('68').classList.add('test');
    break;
  case 69:
    document.getElementById('69').classList.add('test');
    break;
  case 70:
    document.getElementById('70').classList.add('test');
    break;
  case 71:
    document.getElementById('71').classList.add('test');
    break;
  case 72:
    document.getElementById('72').classList.add('test');
    break;
  case 73:
    document.getElementById('73').classList.add('test');
    break;
  case 74:
    document.getElementById('74').classList.add('test');
    break;
  case 75:
    document.getElementById('75').classList.add('test');
    break;
  case 76:
    document.getElementById('76').classList.add('test');
    break;
  case 77:
    document.getElementById('77').classList.add('test');
    break;
  case 78:
    document.getElementById('78').classList.add('test');
    break;
  case 79:
    document.getElementById('79').classList.add('test');
    break;
  case 80:
    document.getElementById('80').classList.add('test');
    break;
  case 81:
    document.getElementById('81').classList.add('test');
    break;
  case 82:
    document.getElementById('82').classList.add('test');
    break;
  case 83:
    document.getElementById('83').classList.add('test');
    break;
  case 84:
    document.getElementById('84').classList.add('test');
    break;
  case 85:
    document.getElementById('85').classList.add('test');
    break;
  case 86:
    document.getElementById('86').classList.add('test');
    break;
  case 87:
    document.getElementById('87').classList.add('test');
    break;
  case 88:
    document.getElementById('88').classList.add('test');
    break;
  case 89:
    document.getElementById('89').classList.add('test');
    break;
  case 90:
    document.getElementById('90').classList.add('test');
    break;
  case 91:
    document.getElementById('91').classList.add('test');
    break;
  case 96:
    document.getElementById('96').classList.add('test');
    break;
  case 97:
    document.getElementById('97').classList.add('test');
    break;
  case 98:
    document.getElementById('98').classList.add('test');
    break;
  case 99:
    document.getElementById('99').classList.add('test');
    break;
  case 100:
    document.getElementById('100').classList.add('test');
    break;
  case 101:
    document.getElementById('101').classList.add('test');
    break;
  case 102:
    document.getElementById('102').classList.add('test');
    break;
  case 103:
    document.getElementById('103').classList.add('test');
    break;
  case 104:
    document.getElementById('104').classList.add('test');
    break;
  case 105:
    document.getElementById('105').classList.add('test');
    break;
  case 106:
    document.getElementById('106').classList.add('test');
    break;
  case 107:
    document.getElementById('107').classList.add('test');
    break;
  case 109:
    document.getElementById('109').classList.add('test');
    break;
  case 111:
    document.getElementById('111').classList.add('test');
    break;
  case 110:
    document.getElementById('110').classList.add('test');
    break;
  case 112:
    document.getElementById('112').classList.add('test');
    break;
  case 113:
    document.getElementById('113').classList.add('test');
    break;
  case 114:
    document.getElementById('114').classList.add('test');
    break;
  case 115:
    document.getElementById('115').classList.add('test');
    break;
  case 116:
    document.getElementById('116').classList.add('test');
    break;
  case 117:
    document.getElementById('117').classList.add('test');
    break;
  case 118:
    document.getElementById('118').classList.add('test');
    break;
  case 119:
    document.getElementById('119').classList.add('test');
    break;
  case 120:
    document.getElementById('120').classList.add('test');
    break;
  case 121:
    document.getElementById('121').classList.add('test');
    break;
  case 122:
    document.getElementById('122').classList.add('test');
    break;
  case 123:
    document.getElementById('123').classList.add('test');
    break;
  case 144:
    document.getElementById('144').classList.add('test');
    break;
  case 176:
    document.getElementById('176').classList.add('test');
    break;
  case 177:
    document.getElementById('177').classList.add('test');
    break;
  case 179:
    document.getElementById('179').classList.add('test');
    break;  
  case 186:
    document.getElementById('186').classList.add('test');
    break;
  case 187:
    document.getElementById('187').classList.add('test');
    break;
  case 188:
    document.getElementById('188').classList.add('test');
    break;
  case 189:
    document.getElementById('189').classList.add('test');
    break;  
  case 190:
    document.getElementById('190').classList.add('test');
    break;  
  case 191:
    document.getElementById('191').classList.add('test');
    break;  
  case 27:
    document.getElementById('27').classList.add('test');
    break;
  case 192:
    document.getElementById('192').classList.add('test');
    break;
  case 219:
    document.getElementById('219').classList.add('test');
    break;
  case 220:
    document.getElementById('220').classList.add('test');
    break;
  case 221:
    document.getElementById('221').classList.add('test');
    break;
  case 222:
    document.getElementById('222').classList.add('test');
  default:
    break;
 }
})

window.addEventListener('resize', ()=> {
  var viewport_width = document.documentElement.clientWidth;
  if(viewport_width < 600) {
    document.querySelector('div.container').style.display = 'none';
    document.querySelector('#insert').style.display = 'none';
    alert("You have to use a laptop or computer to access this webpage.")
  }
  else {
    document.querySelector('body').display = 'inline-block';
  }
})
