import './index.scss';
import '../../assets/common.scss';

import naipePaus from '../../assets/images/naipe-paus.svg';
import logoInsta from '../../assets/images/logo-instagram.svg';

import naipeEspadas from '../../assets/images/naipe-espadas.svg';
import logoWhats from '../../assets/images/logo-whatsapp.svg';

import naipeOuros from '../../assets/images/naipe-ouros.svg';
import logoInternet from '../../assets/images/logo-internet.svg';

import naipeCopas from '../../assets/images/naipe-copas.svg';

export default function Index() {

    return (
        <main className="mainVolkcane">
            <section className='background'>
                <h1 className='h1-volkcane'>Volkcane</h1>
                <p className='p-volkcane'> Mágico e Palestrante</p>

                <p className='p-clique'> Clique no card que deseja! </p>

                <p> Teste commit </p>

                <section className='cards'>

                    <div className='card'>
                        <div className='div-naipe-cima'>
                            <img src={naipePaus} alt='' className='naipe-cima' />
                        </div>
                        <img src={logoInsta} alt='' className='logo' />
                        <p className='p'>@robsonvolkcane </p>
                        <div className='div-naipe-baixo'>
                            <img src={naipePaus} alt='' className='naipe-Baixo' />
                        </div>
                    </div>

                    <div className='card'>
                        <div className='div-naipe-cima'>
                            <img src={naipeEspadas} alt='' className='naipecima' />
                        </div>
                        <img src={logoWhats} alt='' className='logo' />
                        <p className='p'> (11) 988749207 </p>
                        <div className='div-naipe-baixo'>
                            <img src={naipeEspadas} alt='' className='naipe-Baixo' />
                        </div>
                    </div>

                    <div className='card'>
                        <div className='div-naipe-cima'>
                            <img src={naipeOuros} alt='' className='naipe-cima' />
                        </div>
                        <img src={logoInternet} alt='' className='logo' />
                        <p className='p-site'> www.robsonvolkcane.com </p>
                        <div className='div-naipeOuros-baixo'>
                            <p className='p-especificacao'> Palestrante </p> 
                            <img src={naipeOuros} alt='' className='naipe-Baixo' />
                        </div>
                    </div>

                    <div className='card'>
                        <div className='div-naipe-cima'>
                            <img src={naipeCopas} alt='' className='naipe-cima' />
                        </div>
                        <img src={logoInternet} alt='' className='logo' />
                        <p className='p'> www.volkcane.com </p>
                        <div className='div-naipeOuros-baixo'>
                            <p className='p-especificacao'> Mágico </p> 
                            <img src={naipeCopas} alt='' className='naipe-Baixo' />
                        </div>
                    </div>


                </section>
            </section>


        </main>
    );
}