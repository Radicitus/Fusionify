import React from 'react';
import logo from './assets/fusion_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://www.facebook.com/fusionuci/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fusion Facebook Page
        </a>
      </header>
    </div>
);
}
document.write( '<head>\n' );
document.write( '<style>\n' );
document.write( '.dropbtn {\n' );
document.write( '  background-color: #4CAF50;\n' );
document.write( '  color: white;\n' );
document.write( '  padding: 16px;\n' );
document.write( '  font-size: 16px;\n' );
document.write( '  border: none;\n' );
document.write( '  cursor: pointer;\n' );
document.write( '}\n' );
document.write( '\n' );
document.write( '.dropbtn:hover, .dropbtn:focus {\n' );
document.write( '  background-color: #3e8e41;\n' );
document.write( '}\n' );
document.write( '\n' );
document.write( '.dropdown {\n' );
document.write( '  position: relative;\n' );
document.write( '  display: inline-block;\n' );
document.write( '}\n' );
document.write( '\n' );
document.write( '.dropdown-content {\n' );
document.write( '  display: none;\n' );
document.write( '  position: absolute;\n' );
document.write( '  background-color: #f9f9f9;\n' );
document.write( '  min-width: 160px;\n' );
document.write( '  overflow: auto;\n' );
document.write( '  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n' );
document.write( '}\n' );
document.write( '\n' );
document.write( '.dropdown-content a {\n' );
document.write( '  color: black;\n' );
document.write( '  padding: 12px 16px;\n' );
document.write( '  text-decoration: none;\n' );
document.write( '  display: block;\n' );
document.write( '}\n' );
document.write( '\n' );
document.write( '.dropdown-content a:hover {background-color: #f1f1f1}\n' );
document.write( '\n' );
document.write( '.show {display:block;}\n' );
document.write( '</style>\n' );
document.write( '</head>\n' );
document.write( '<body>\n' );
document.write( '\n' );
document.write( '<h2>Clickable Dropdown</h2>\n' );
document.write( '<p>Click on the button to open the dropdown menu.</p>\n' );
document.write( '\n' );
document.write( '<div class=\"dropdown\">\n' );
document.write( '  <button id=\"myBtn\" class=\"dropbtn\">Dropdown</button>\n' );
document.write( '  <div id=\"myDropdown\" class=\"dropdown-content\">\n' );
document.write( '    <a href=\"https://www.facebook.com/fusionuci/\">Fusion Facebook Page</a>\n' );
document.write( '    <a href=\"#about\">About</a>\n' );
document.write( '    <a href=\"#contact\">Contact</a>\n' );
document.write( '  </div>\n' );
document.write( '</div>\n' );
document.write( '\n' );
document.write( '<script>\n' );
document.write( '// Get the button, and when the user clicks on it, execute myFunction\n' );
document.write( 'document.getElementById(\"myBtn\").onclick = function() {myFunction()};\n' );
document.write( '\n' );
document.write( '/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */\n' );
document.write( 'function myFunction() {\n' );
document.write( '  document.getElementById(\"myDropdown\").classList.toggle(\"show\");\n' );
document.write( '}\n' );
document.write( '</script>\n' );
document.write( '\n' );
document.write( '</body>\n' );

export default App;
