import React, { Component } from 'react';

class Pruebas extends Component 
{

      contador = 0;

      constructor( props )
      {
            super( props );
            this.state = {
                  contador: 0
            };
      }
      

      sumar = () => { 
            this.setState({
                  contador: this.state.contador + 1
            });
      }

      restar = () => {  
            this.setState({
                  contador: this.state.contador - 1
            });
      }

      render ()
      {
            return (
                  <section id="content">
                        <h2>Pruebas</h2>
                        <hr/>
                        <h3>State</h3>
                        <p>Contador: { this.state.contador }</p>
                        <div id="buttonsContador">
                              <input type="button" value="Sumar" onClick={ this.sumar }/>
                              <input type="button" value="Restar" onClick={ this.restar }/>
                        </div>
                  </section>
            )
      }

}

export default Pruebas;