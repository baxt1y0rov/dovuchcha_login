import React from 'react';
import './start.css'
import { borderColor, fontSize, fontWeight, padding } from '@mui/system';

const DovuchchaLogo = () => (
    <img src="./favicon.svg" alt="" width='43'/>
);

const containerStyle = {
  minHeight: '100vh',
  backgroundColor: '#1E1F20',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding:0,
  flexDirection: 'column',
};

const cardStyle = {
  width: '100%',
  maxWidth: '430px',
  backgroundColor: '#0E0E0E',
  borderRadius: '30px',
  padding: '1.8rem',
  marginBottom:10,
};

const inputStyle = {
  width: '100%',
  backgroundColor: 'transparent',
  border: '1px solid #8F918F',
  borderRadius: '10px',
  padding: '0.5rem 0.75rem',
  color: 'white',
  outline: 'none',
};


const linkStyle = {
  color: '#AED98B',
  textDecoration: 'none',
  fontWeight:600,

};
const link2Style = {
    color: '#AED98B',
    textDecoration: 'none',
    fontWeight:500,
    fontSize:14.5,
  };

  const buttonStyle = {
  backgroundColor: '#96CD68',
  color: '#223b0e',
  padding: '0.5rem 1.5rem',
  borderRadius: '20px',
  border: 'none',
  cursor: 'pointer',
  height:40,
  fontWeight:400,
};

const footerStyle = {
  width: '100%',
  maxWidth: '450px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#e8eaed',
  fontSize: '0.75rem',
  marginTop:12,
};

const selectStyle = {
  border:'none',
  backgroundColor: 'transparent',
  color: '#e8eaed',
  outline: 'none',
  fontSize:'0.75rem',
};

export default function GoogleSignIn() {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}className='card'>
        <div style={{marginBottom: '1rem'}}>
          <DovuchchaLogo />
        </div>  
        <div style={{marginBottom: '1.5rem'}}>
          <h1 className='signintext'style={{fontSize: '2em', color: 'white', marginBottom: 1}}>Sign in</h1>
          <p style={{fontSize: '1rem', fontWeight:400,color: '#E5F4D8',marginBlockEnd:40}}>Use your Dovuchcha Account</p>
        </div>
        <div style={{marginInlineEnd:25}}>
          <input className='inputemail'
            style={inputStyle}
            placeholder="Email or phone"
            type="email"
          />
        </div>
        <div style={{marginBottom: 40,marginTop:8}}>
          <a href="#" style={linkStyle} className='forgotem'>Forgot email?</a>
        </div>
        <div style={{marginBottom: 80, fontSize: '0.875rem', color: '#e8eaed'}}>
          Not your computer? Use Guest mode to sign in privately.{' '}
          <a href="#" className='learnmore' style={linkStyle}>Learn more about using Guest mode</a>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <button className='crtacc'><a href="#" style={link2Style}>Create account</a></button>
          <button className='button' style={buttonStyle}>Next</button>
        </div>
      </div>
      <div style={footerStyle}>
        <select style={selectStyle}>
          <option value="en">English (United States)</option>
          <option value="es">Русский</option>
          <option value="fr">O'zbek</option>
        </select>
        <div style={{display: 'flex', gap: '1rem'}}>
          <a href="#" style={{...linkStyle, color: '#F1FCE8'}}>Help</a>
          <a href="#" style={{...linkStyle, color: '#F1FCE8'}}>Privacy</a>
          <a href="#" style={{...linkStyle, color: '#F1FCE8'}}>Terms</a>
        </div>
      </div>
    </div>
  );
}