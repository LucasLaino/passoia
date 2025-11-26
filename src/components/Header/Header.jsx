import './header.scss'
import './menu.scss'
import logoPassoia from '../../assets/images/passoia-logo.svg'

export default function Header() {
    return (
        <header className='header'>
            <img src={logoPassoia} alt="Logo Passoia" className='logo-passoia' />

            <nav>
                <input type="checkbox" id="menu-hamburguer" />

                <label for="menu-hamburguer">
                    <div class="menu">
                        <span class="hamburguer"></span>
                    </div>
                </label>

                <ul className='header-nav'>
                    <li>LOOKS</li>
                    <li>LANÇAMENTOS</li>
                    <li>NOVIDADES</li>
                </ul>
            </nav>
        </header>
    )
}