import './Produtos.css'

import bolsa from '../../assets/bolsa.png'
import note from '../../assets/portaNotebook.png'
import sandalia1 from '../../assets/sandalia1.png'
import sandalia2 from '../../assets/sandalia2.png'
import tamanco from '../../assets/tamanco.png'
import tenis from '../../assets/tenis.png'

export default function Produtos() {
    return (
        <section className="produtos">
            <div className="titulos">
                <h2>Novidades</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident nemo nesciunt inventore magnam odio repudiandae pariatur possimus veniam illo ab.
                </p>

                <div className="produtos_grid">
                    <div className="card">
                        <div className="card-image">
                            <img src={sandalia1} alt="sandalia"/>
                            <span className="badge-venda">Mais vendido</span>
                        </div>

                        <div className="card-info">
                            <h3>Sandalia de couro</h3>
                            <p className="preco">R$ 349,90</p>
                            <button className="btn">Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={sandalia2} alt="sandalia"/>
                        </div>

                        <div className="card-info">
                            <h3>Sandalia</h3>
                            <p className="preco">R$ 229,90</p>
                            <button className="btn">Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={tamanco} alt="tamanco"/>
                            <span className="badge-desconto">-10%</span>
                        </div>

                        <div className="card-info">
                            <h3>Tamanco couro couro</h3>
                            <p className="preco">R$ 369,90</p>
                            <button className="btn">Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={bolsa} alt="bolsa"/>
                        </div>

                        <div className="card-info">
                            <h3>Bolsa shopper</h3>
                            <p className="preco">R$ 269,90</p>
                            <button className="btn">Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={note} alt="note"/>
                            <span className="badge-desconto">-10%</span>
                        </div>

                        <div className="card-info">
                            <h3>Porta notebook</h3>
                            <p className="preco">R$ 269,90</p>
                            <button className="btn">Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={tenis} alt="tenis"/>
                            <span className="badge-venda">Mais vendido</span>
                        </div>

                        <div className="card-info">
                            <h3>Tênis couro</h3>
                            <p className="preco">R$ 169,90</p>
                            <button className="btn">Comprar agora</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}