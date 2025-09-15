import './Colecoes.css'

import verao from '../../assets/verao.jpg'
import scarpins from '../../assets/scarpins.jpg'
import bolsas from '../../assets/bolsas.jpg'

export default function Colecoes() {
    return (
        <section className="colecoes">
            <div className="titulos">
                <h2>Coleções 2026</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed velit libero, et expedita minima, fugit labore cum maiores repellendus voluptatum error atque laudantium, ea quo. Laborum possimus facere ducimus animi.</p>
                <button className="btn">Comprar agora</button>
            </div>

            <div className="grid-colecoes">
                <div className="item">
                    <img src={bolsas} alt="colecao verao" />
                </div>

                <div className="item grande">
                    <img src={verao} alt="colecao verao" />
                </div>

                <div className="item">
                    <img src={scarpins} alt="colecao verao" />
                </div>
            </div>
        </section>
    )
}