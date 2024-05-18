/* eslint-disable react/prop-types */

import { Pago } from './Pago'

export function Mes({ mes, pagos }) {

  return (
    <div className='mes'>
      <h2>{mes}</h2>
      <ul>
        {pagos.map((pago) => (
          (pago.mensual || pago.meses?.includes(mes)) && (
            <Pago key={pago.nombre} pago={pago} mes={mes} />
          )
        ))}
      </ul>
    </div>
  )
}
