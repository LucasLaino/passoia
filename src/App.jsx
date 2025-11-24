import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Maquiagens from './components/Maquiagens/Maquiagens'
import Lancamentos from './components/Lancamentos/Lancamentos'
import Novidades from './components/Novidades/Novidades'
import Footer from './components/Footer/Footer'

export default function App() {
    return (
        <>
            <Header />
            <Banner />
            <Maquiagens />
            <Lancamentos />
            <Novidades />
            <Footer />
        </>

    )
}