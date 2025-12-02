import './footer.scss'
import bandeiraMastercard from '../../assets/images/mastercard.svg';
import bandeiraVisa from '../../assets/images/visa.svg';
import pix from '../../assets/images/pix.svg';
import boleto from '../../assets/images/boleto.svg';
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer>
            <section className="atendimento">
                <h4>ATENDIMENTO</h4>

                <ul className='menu-atendimento'>
                    <li>Fale Conosco</li>
                    <li>Perguntas Frequentes</li>
                    <li>Meus Pedidos</li>
                    <li>Nossas Lojas</li>
                </ul>
            </section>

            <section className="pagamento">
                <h4>FORMAS DE PAGAMENTO</h4>

                <ul className='formas-de-pagamento'>
                    <li>
                        <img src={bandeiraMastercard} alt='Bandeira Mastercard' />
                        <img src={bandeiraVisa} alt="Bandeira Visa" />
                    </li>
                    <li>
                        <img src={pix} alt="Ícone Pix" />
                        <img src={boleto} alt="Ícone Boleto" />
                    </li>
                </ul>
            </section>

            <section className="redes-sociais">
                <h4>SIGA-NOS NAS REDES SOCIAIS</h4>

                <ul>
                    <li><a href="https://www.facebook.com/"><FaFacebook size={24} /></a></li>
                    <li><a href="https://www.instagram.com/"><FaInstagram size={24} /></a></li>
                    <li><a href="https://www.youtube.com/?hl=pt&gl=BR"><FaYoutube size={24} /></a></li>
                    <li><a href="https://x.com/?lang=pt"><FaXTwitter size={24} /></a></li>
                </ul>
            </section>
        </footer>
    )
}