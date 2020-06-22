import React, { Component } from 'react'

class Peliculas extends Component 
{

      constructor (props)
      {
            super (props);
            this.state = {
                  peliculas : [
                        { titulo: 'El Señor de los Anillos - La comunidad del anillo', image: 'http://google.com/search?tbm=isch&q=El+se%C3%B1or+de+los+anillos:+La+comunidad+del+anillo' },
                        { titulo: 'El Señor de los Anillos - Las dos torres', image: 'https://pics.filmaffinity.com/El_se_or_de_los_anillos_Las_dos_torres-450612576-large.jpg' },
                        { titulo: 'El Señor de los Anillos - El retorno del rey', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cinemascomics.com%2Fla-trilogia-de-el-senor-de-los-anillos-critica-musical-de-el-retorno-del-rey%2F&psig=AOvVaw3OvqvLUMr-WEWx2nXzILEB&ust=1592330010022000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCVmtuxhOoCFQAAAAAdAAAAABAD' }
                  ]
            }
      }

      render()
      {
            return (
                  <section id="content" className="section-peliculas">
                        <h2>Componente películas</h2>
                  </section>
            )
      }

}

export default Peliculas;