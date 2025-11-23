import './lancamentos.scss';
import kitLipTint from '../../assets/images/kit-lip-tint.svg';
import kitBatomImg from '../../assets/images/kit-batom.svg';
import kitBatomLiquidoImg from '../../assets/images/kit-batom-liquido.svg';
import CardProdutosLancamento from '../CardProdutosLancamento/CardProdutosLancamento';

export default function Lancamentos() {
    return (
        <>
            <article className='lancamentos'>
                <h2>APROVEITE OS LANÇAMENTOS</h2>

                <section className="produtos-lancamento">
                    <ul>
                        <li><img src={kitLipTint} alt="kit lip tint" className='produto-img' /></li>
                        <li><img src={kitBatomLiquidoImg} alt="kit batom liquido" className='produto-img' /></li>
                        <li><img src={kitBatomImg} alt="kit batom" className='produto-img' /></li>
                    </ul>

                    <CardProdutosLancamento />
                </section>
            </article>
        </>
    )
}