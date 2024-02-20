import Pago from './Pago';

export const Mes = ({ mes, pagos }) => {
    return (
        <div className='mes'>
            <h2>{mes}</h2>
            <ul>
                {pagos.map((pago, index) => (
                    (pago.mensual || pago.meses?.includes(mes)) && (
                        <Pago key={index} pago={pago} />
                    )
                ))}
            </ul>
        </div>
    );
};

export default Mes;