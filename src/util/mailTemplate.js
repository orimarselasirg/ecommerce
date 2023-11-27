const mailTemplate = (name, status, transaction, total) => {
  return `<html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Notificación de Compra</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #333333;
        }
        p {
          color: #555555;
        }
        .confirmation {
          color: #009688;
        }
        .rejection {
          color: #ff3333;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Notificación de Compra</h2>
        <p>Estimado/a ${name},</p>
        <p>Queremos informarle que el pago de su compra ha sido ${status}. A continuación, se proporcionan detalles adicionales:</p>
        
  
        <ul>
          <li><strong>Número de Orden:</strong> ${transaction}</li>
          <li><strong>Fecha de Compra:</strong> ${new Date()}</li>
          <li><strong>Total de la Compra:</strong> ${total}</li>
        </ul>
    
  
        <p class="[confirmation/rejection]">Su compra ha sido ${status}.</p>
    
        <p>Para cualquier pregunta o preocupación, no dude en ponerse en contacto con nuestro equipo de soporte.</p>
    
        <p>Gracias por elegir Byte4bit Ecommerce.<br>¡Esperamos que disfrute de su compra!</p>
      </div>
    </body>
    </html>`;
};

module.exports = { mailTemplate };
