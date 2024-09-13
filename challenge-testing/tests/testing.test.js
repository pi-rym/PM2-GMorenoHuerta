

const { CarritoDeCompra } = require("./index"); // Importa la clase CarritoDeCompra

let nuevoCarrito;
let producto;
let invalidInputs;
let validInputs;
let productos;

beforeEach(() => {
  nuevoCarrito = new CarritoDeCompra();
  producto = { name: "producto A", price: 10 };
  invalidInputs = [123, "string", true, false, NaN, null, undefined];
  validInputs = { id: 1, name: "Producto", qty: 1, price: 100 };
  productos = [
    { name: "Producto A", price: 10 },
    { name: "Producto B", price: 20 },
    { name: "Producto C", price: 30 },
    { name: "Producto D", price: 40 },
    { name: "Producto E", price: 50 },
  ];
});

const llenadoDelCarrito = () => {
  productos.forEach((producto) => nuevoCarrito.agregarProducto(producto));
};

describe("Clase CarritoDeCompra", () => {
  it("la clase CarritoDeCompra debe: ser una clase", () => {
    expect(typeof CarritoDeCompra).toBe("function");
    expect(CarritoDeCompra).toBeInstanceOf(Function);
  });

  it("la clase CarritoDeCompra debe poder ser instanciada", () => {
    expect(nuevoCarrito).toBeInstanceOf(CarritoDeCompra);
  });

  it("la clase CarritoDeCompra debe tener los siguientes metodos: constructor, agregarProducto, calcularTotal, aplicarDescuento", () => {
    expect(CarritoDeCompra.prototype.constructor).toBeInstanceOf(Function);
    expect(CarritoDeCompra.prototype.agregarProducto).toBeInstanceOf(Function);
    expect(CarritoDeCompra.prototype.calcularTotal).toBeInstanceOf(Function);
    expect(CarritoDeCompra.prototype.aplicarDescuento).toBeInstanceOf(Function);
  });
});

describe("constructor", () => {
  it("Inicializa el carrito como un array vacio", () => {
    expect(nuevoCarrito.productos).toEqual([]);
    expect(nuevoCarrito.productos).toHaveLength(0);
    expect(Array.isArray(nuevoCarrito.productos)).toBe(true);
  });
});

describe("AgregarProducto", () => {
  it("Recibe un objeto representando un producto y lo agrega al carrito.", () => {
    nuevoCarrito.agregarProducto(producto);
    expect(nuevoCarrito.productos).toEqual([producto]);
  });

  it("Si el dato ingresado no es un objeto debe arrojar un error", () => {
    invalidInputs.forEach((input) => {
      expect(() => nuevoCarrito.agregarProducto(input)).toThrow(
        "El producto no es un objeto"
      );
    });
    expect(() => nuevoCarrito.agregarProducto(validInputs)).not.toThrow();
  });

  it("Recibe muchos objetos representando un producto y los agrega al carrito.", () => {
    llenadoDelCarrito();
    expect(nuevoCarrito.productos).toHaveLength(5);
    expect(nuevoCarrito.productos[4]).toEqual({
      name: "Producto E",
      price: 50,
    });
    expect(nuevoCarrito.productos[0].name).toBe("Producto A");
  });
});

describe("calcularTotal", () => {
  it("Calcula correctamente el precio total de todos los productos del carrito", () => {
    llenadoDelCarrito();
    expect(nuevoCarrito.calcularTotal()).toBe(150);
  });
});

describe("aplicarDescuento", () => {
  it("Aplica un descuento al total de la compra según el porcentaje especificado.", () => {
    llenadoDelCarrito();
    expect(nuevoCarrito.aplicarDescuento(0)).toBe(150);
    expect(nuevoCarrito.aplicarDescuento(10)).toBe(135);
    expect(nuevoCarrito.aplicarDescuento(50)).toBe(75);
    expect(nuevoCarrito.aplicarDescuento(100)).toBe(0);
  });
});




