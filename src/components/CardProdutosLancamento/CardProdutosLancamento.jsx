import { useState } from 'react';
import './cardProdutosLancamento.scss'
import avalicaoEstrelas from '../../assets/images/estrelas-avaliacao.svg'
import batomAzul from '../../assets/images/batom-azul.jpg';
import batomVermelho from '../../assets/images/batom-vermelho.jpg';
import batomBordo from '../../assets/images/batom-bordo.jpg';
import batomBege from '../../assets/images/batom-bege.jpg';

export default function CardProdutosLancamento() {
    const [cor, setCor] = useState(batomAzul);

    return (
        <section className='card-produtos-lancamento'>
            <img src={cor} alt="Imagem testador de batom" className='imagem-produto'/>

            <article className='infos-produto'>
                <img src={avalicaoEstrelas} alt="Avaliação em estrelas" />
                <h3>Matte Premium</h3>
                <p>Cores Disponíveis</p>

                <span className='botoes'>
                    <button className='btn-trocar-cor batom-azul' onClick={() => setCor(batomAzul)}></button>
                    <button className='btn-trocar-cor batom-vermelho' onClick={() => setCor(batomVermelho)}></button>
                    <button className='btn-trocar-cor batom-bordo' onClick={() => setCor(batomBordo)}></button>
                    <button className='btn-trocar-cor batom-bege' onClick={() => setCor(batomBege)}></button>
                </span>

                <h4>Descrição</h4>
                <p className='descricao-produto'>O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.</p>
            </article>
        </section>
    )
}