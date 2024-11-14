import React from 'react';
import './Signin.css'
import { borderColor, fontSize, fontWeight, padding } from '@mui/system';
import { Link } from 'react-router-dom';

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
const input2Style = {
    width: '100%',
    backgroundColor: 'transparent',
    border: '1px solid #8F918F',
    borderRadius: '10px',
    padding: '0.5rem 0.75rem',
    color: 'white',
    outline: 'none',
    marginTop:25,
    marginBottom:80,
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
    height:23,
    cursor: 'pointer',
    fontWeight:400,
    textDecoration:'none',
    fontSize:14,
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

export default function BasicAsk() {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}className='card'>
        <div style={{marginBottom: '1rem'}}>
          <DovuchchaLogo />
        </div>  
        <div style={{marginBottom: '1.5rem'}}>
          <h1 className='signintext'style={{fontSize: '2em', color: 'white', marginBottom:0}}>Basic information</h1>
          <p style={{fontSize: '1rem', fontWeight:400,color: '#E5F4D8',marginBlockEnd:40}}>Enter your birthday and gender</p>
        </div>
        <div style={{marginInlineEnd:25}}>
          <input className='inputemail'
            style={inputStyle}
            placeholder="Birthday dd/mm/yy"
            type="date"
          />
          <input className='inputemail'
            style={input2Style}
            placeholder="Gender"
            type="gender"
          />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div className="filler"></div>
          <Link className='button' to='/EmailAsk' style={buttonStyle}>Next</Link>
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