
// tests/index.js

class CarritoDeCompra {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    if (
      typeof producto !== "object" ||
      producto === null ||
      Array.isArray(producto)
    ) {
      throw new Error("El producto no es un objeto");
    } else {
      this.productos.push(producto);
    }
  }

  calcularTotal() {
    return this.productos.reduce((acum, producto) => acum + producto.price, 0);
  }

  aplicarDescuento(descuento) {
    const precioTotal = this.calcularTotal();
    const precioConDescuento = precioTotal - (precioTotal * descuento) / 100;
    return precioConDescuento;
  }
}

module.exports = {
  CarritoDeCompra,
};




