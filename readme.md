
# E-commerce CAR-STORE

CarStore es un e-commerce especializado en productos para automóviles, ofreciendo una amplia gama de artículos para mejorar, mantener y personalizar tu vehículo. Desde accesorios esenciales hasta partes de repuesto y productos de cuidado del automóvil, CarStore es tu tienda en línea de confianza para todo lo relacionado con tu coche. Utiliza Vite.js, React, y Firebase Firestore para el catalogo de productos, la gestión del carrito de compras y el almacenamiento de datos de pedidos.

## Características
- **Cartelera de productos**: Muestra todos los productos disponibles
- **Visualización del Carrito**: Muestra un resumen de los productos en el carrito.
- **Formulario de Cliente**: Permite al usuario ingresar sus datos personales.
- **Confirmación de Compra**: Al confirmar la compra, se guarda un pedido en Firebase Firestore y se muestra un mensaje de éxito con el ID del pedido.
- **Interfaz de Usuario**: Diseño moderno y receptivo con colores personalizados.

## Tecnologías Utilizadas

- [Vite.js](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-router-dom](https://reactrouter.com/en/main)


  *Uso*

  *Agregar productos al carrito desde la página de productos.

  *Ir a la página de checkout para ver el resumen del carrito y completar el formulario de cliente.

  *Confirmar la compra: Al confirmar, se guardará un pedido en Firestore y se mostrará un mensaje de éxito con el ID del pedido.

  *Estructura del Proyecto*
  
  css
  Copiar código
  vite-project/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── CartContext.js
  │   │   └── CheckoutPage.js
  │   ├── firebaseConfig.js
  │   ├── App.js
  │   └── main.js
  ├── index.html
  ├── package.json
  └── README.md


  *Personalización*

  *Colores y Estilos: Puedes modificar los colores y estilos en los archivos CSS/Tailwind.
  

  *Licencia*
  copyright agusdesi04

  Autor: AgusDesi04