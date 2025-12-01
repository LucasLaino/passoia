import './maquiagens.scss'
import cardLabiosImg from '../../assets/images/card-labios.jpg'
import cardOlhosImg from '../../assets/images/card-olhos.jpg'
import cardRostoImg from '../../assets/images/card-rosto.jpg'
import cardTendenciaImg from '../../assets/images/card-tendencia.jpg'

export default function Maquiagens() {
    return (
        <>
            <article className='categorias-maquiagens'>
                <h2>LOOKS E DICAS DE MAQUIAGEM</h2>

                <section className='categorias'>
                    <img src={cardLabiosImg} alt="card-labios-img" />
                    <img src={cardOlhosImg} alt="card-labios-img" />
                    <img src={cardRostoImg} alt="card-rosto-img" />
                    <img src={cardTendenciaImg} alt="card-tendencia-img" />
                </section>
            </article>
        </>
    )
}