import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className='head_text text-center'>Descubre y Comparte
        <span className="orange_gradient text-center"> Sugerencias Impulsadas por IA</span>
      </h1>

      <p className='desc text-center'>
        Promptopia es una herramienta de creación de sugerencias impulsada por IA de código abierto para el mundo moderno, diseñada para descubrir, crear y compartir sugerencias creativas.
      </p>

      <Feed />
    </section>
  )
}

export default Home
