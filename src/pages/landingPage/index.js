import './index.scss'
import '../../assets/common.scss'
import { Link } from 'react-router-dom'

export default function Index() {

    return(
        <main className='main-lp'>
            <h1 className='lp-h1'> Rotas clientes </h1>

            <section className='sectionClientes'> 
                <Link to='/robson-volkcane' className='clienteVolkcane'> Volkcane </Link>
            </section>

        </main>
    );
}