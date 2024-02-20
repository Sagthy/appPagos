# Aplicación de Gestión de Pagos

Esta aplicación permite a los usuarios gestionar sus pagos mensuales y anuales. Los pagos se pueden marcar como realizados y se pueden establecer fechas de vencimiento para cada uno de ellos.

## Características

- Los pagos se pueden marcar como realizados. Los pagos realizados se muestran en verde, mientras que los pagos pendientes se muestran en rojo.
- Los pagos se pueden ordenar alfabéticamente.
- Los pagos se pueden filtrar por mes.
- Los usuarios pueden navegar entre los meses utilizando los botones "Siguiente" y "Anterior".
- Los usuarios pueden establecer una fecha de vencimiento para cada pago. Si un pago está a tres días o menos de su fecha de vencimiento y aún no se ha realizado, parpadeará para alertar al usuario.
- Los usuarios pueden restablecer todos los pagos y fechas de vencimiento utilizando el botón "Restablecer".
- Todos los pagos y fechas de vencimiento se guardan en el almacenamiento local del navegador, por lo que se mantienen entre las sesiones de navegación.
- Todos los pagos y fechas de vencimiento se restablecen automáticamente el 1 de enero de cada año.

## Cómo usar

1. Marque un pago como realizado haciendo clic en el checkbox correspondiente.
2. Establezca una fecha de vencimiento para un pago haciendo clic en el botón de edición (el icono del lápiz) y seleccionando una fecha en el calendario emergente.
3. Navegue entre los meses utilizando los botones "Siguiente" y "Anterior".
4. Restablezca todos los pagos y fechas de vencimiento haciendo clic en el botón "Restablecer".

## Tecnologías utilizadas

- React
- JavaScript
- HTML
- CSS
- jQuery
- jQuery UI (para el calendario emergente)
