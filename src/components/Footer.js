import logo from '../assets/hizotipoBlack.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section logo-section">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <address>
                        Avenida siempre viva, Sitny<br />
                        Springfield, USA
                    </address>
                    <p>Relatos de papel © | 2024 Todos los derechos reservados</p>
                </div>
                <div className="footer-section">
                    <h4>Menú Principal</h4>
                    <ul>
                        <li><a href="#novedades">Novedades</a></li>
                        <li><a href="#mas-vendidos">Más vendidos</a></li>
                        <li><a href="#recomendaciones">Recomendaciones</a></li>
                        <li><a href="#costos-envio">Costos de envío</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="#sucursales">Sucursales</a></li>
                        <li><a href="#quienes-somos">Quiénes somos</a></li>
                        <li><a href="#contactanos">Contáctanos</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Descubre</h4>
                    <ul>
                        <li><a href="#manual-compra">Manual de compra</a></li>
                        <li><a href="#faq">Preguntas frecuentes</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
