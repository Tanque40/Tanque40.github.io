import Image from 'next/image'
import { NavBar } from '../../components/NavBar/NavBar'
import Me from '../../public/me.jpeg'

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <section id="tab-about-me" className="slider">
          <h1 className='About-H1'>Bruno Vitte</h1>
          <h2>Sobre mí</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2">
              <span className='text-white'>
                Apasionado por aprender constantemente, gamer de corazón, ENTP si sirve de algo saberlo, me gusta mucho la comida y probar cosas nuevas. Me gusta entender y aprende más sobre las cosas complejas que comprenden este mundo.
              </span>
              <span className="text-white">
                Desde muy pequeño me adentré en los videojuegos, con la llegada a mi casa de la ******************primera *xbox*,** ahí comenzó mi pasión por los juegos electrónicos y las cosas complejas, solo me dieron un control y un juego en inglés, idioma que por supuesto que solo conocía de nombre, tuve que descifrar ese nuevo juego y todo ese mundo por mi cuenta.

                ************************************

                Comencé con **la programación** desde la secundaria, me enseñaron sobre un lenguaje llamado ******QBasic,****** y de ahí comenzó todo, en ese par de años solo cambiamos de lenguajes entre el ya mencionado, ****************************Turbo Pascal, C++**************************** y lo más básico de hacer web’s con ********HTML******** y ************JS,************ nótese el desconocimiento de ********CSS.********

                La preparatoria fue el tiempo en el que **********descubrí mi verdadera pasión********** por ******************************la programación,****************************** esto gracias a que, en mi último año, tuve que hacer y aprender sobre el **desarrollo web** de verdad, saber sobre las cosas que eran las **bases de datos**, el ***********backend**,* el **********frontend**,* ahora sí, **HTML, CSS y JS**. Porque como cereza del pastel no solo era aprender de eso, sino que, yo era el líder de un equipo de trabajo, el proyecto, desarrollar una web para aplicar exámenes con únicamente la infraestructura de la escuela, la cual no era tan buena como se podría imaginar.
              </span>
            </div>
            <div>
              <Image src={Me} className='object-contain' alt='Photo of Bruno Vitte' />
            </div>
          </div>

        </section>
      </main>
    </>
  )
}
