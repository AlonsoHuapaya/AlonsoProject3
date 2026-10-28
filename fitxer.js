/**
 * Clase Producto.
 * Representa un producto mediante su nombre, precio y cantidad.
 * Permite calcular el importe total de las unidades del producto.
 */
class Producto {

  /**
   * Constructor de la clase Producto.
   * Inicializa las propiedades del producto.
   *
   * @param {string} nombre - Nombre del producto.
   * @param {number} precio - Precio por unidad del producto.
   * @param {number} cantidad - Número de unidades del producto.
   */
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;       // Nombre del producto.
    this.precio = precio;       // Precio de una unidad.
    this.cantidad = cantidad;   // Cantidad de unidades.
  }

  /**
   * Calcula el precio total del producto.
   * Multiplica el precio por unidad por la cantidad.
   *
   * @returns {number} Importe total del producto.
   */
  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

/**
 * Representa el carrito de compras y gestiona la lista de productos seleccionados.
 * @class
 */
class Carrito {
  /**
   * Crea una instancia de Carrito con la lista de productos vacía.
   */
  constructor() {
    /** 
     * Colección de productos añadidos al carrito.
     * @type {Array<Object>} 
     */
    this.productos = [];
  }

  /**
   * Añade un nuevo producto a la lista del carrito.
   * @param {Object} producto - Objeto del producto que contiene el método calcularTotal.
   */
  agregarProducto(producto) {
    this.productos.push(producto);
  }

  /**
   * Calcula el importe total de todos los productos presentes en el carrito.
   * @returns {number} La suma acumulada de los totales de cada producto.
   */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

  /**
   * Elimina todos los productos del carrito, dejándolo vacío.
   */
  vaciarCarrito() {
    this.productos = [];
  }
}

class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito();
  }

  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}


const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
