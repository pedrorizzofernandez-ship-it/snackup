import { useState } from 'react'

export default function SnackShop() {
  const [cartCount, setCartCount] = useState(0)
  const [message, setMessage] = useState('')
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove)
    setCartItems(updatedCart)
    setCartCount(updatedCart.length)
  }

  const getTotal = () => {
    return cartItems.length * 1200
  }

  const payNow = () => {
    if (cartItems.length === 0) {
      alert('Tu carrito está vacío 😢')
      return
    }

    alert('Pago realizado con éxito ✅')
    setCartItems([])
    setCartCount(0)
    setMessage('Gracias por tu compra 🔥')
  }
  const products = [
    {
      name: 'Tita',
      price: '$1200',
      image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Powerade',
      price: '$2500',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Barrita de cereal',
      price: '$900',
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-3xl font-bold tracking-wide">SnackUp</h1>
        <button
          onClick={() => setShowCart(!showCart)}
          className="bg-white text-black px-5 py-2 rounded-2xl font-semibold hover:scale-105 transition"
        >
          Ver carrito ({cartCount})
        </button>
      </header>

      <section className="px-8 py-16 text-center">
        <h2 className="text-6xl font-black mb-6 leading-tight">
          Tu kiosco online <br />
          moderno ⚡
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
          Comprá snacks, bebidas y golosinas desde una página con estilo premium.
        </p>

        <button
          onClick={() => {
            const section = document.getElementById('productos')
            section?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="bg-blue-500 px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition shadow-2xl"
        >
          Comprar ahora
        </button>
      </section>

      {showCart && (
        <section className="mx-8 mb-10 bg-white/10 border border-white/10 rounded-3xl p-8">
          <h3 className="text-3xl font-bold mb-4">Carrito 🛒</h3>

          {cartItems.length === 0 ? (
            <p className="text-white/70">Todavía no agregaste productos.</p>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-black/40 rounded-2xl px-4 py-3 flex justify-between items-center"
                >
                  <span>{item}</span>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 px-3 py-1 rounded-xl font-bold hover:scale-105 transition"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <h4 className="text-2xl font-bold">
              Total: ${getTotal()}
            </h4>

            <button
              onClick={payNow}
              className="bg-green-500 text-black px-8 py-4 rounded-2xl font-black hover:scale-105 transition"
            >
              Pagar ahora 💳
            </button>
          </div>
        </section>
      )}

      <section id="productos" className="px-8 pb-16">
        <h3 className="text-4xl font-bold mb-10">Productos 🔥</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                <p className="text-white/70 mb-4">Precio: {product.price}</p>

                <button
                  onClick={() => {
                    setCartCount(cartCount + 1)
                    setCartItems([...cartItems, product.name])
                    setMessage(`${product.name} agregado al carrito 🔥`)
                  }}
                  className="w-full bg-white text-black py-3 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {message && (
        <div className="mx-8 mb-6 bg-green-500 text-black font-bold py-4 rounded-2xl text-center">
          {message}
        </div>
      )}

      <section className="mx-8 mb-16 bg-blue-500 rounded-3xl p-10 text-center shadow-2xl">
        <h3 className="text-4xl font-black mb-4">Ofertas ⚡</h3>
        <p className="text-xl mb-6">2 Powerade + 1 Tita por $4500</p>

        <button
          onClick={() => {
            setCartCount(cartCount + 3)
            setCartItems([...cartItems, '2 Powerade', '1 Tita', 'Combo Oferta'])
            setMessage('Oferta agregada al carrito ⚡')
          }}
          className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
        >
          Aprovechar oferta
        </button>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/50">
        SnackUp © 2026
      </footer>
    </div>
  )
}
