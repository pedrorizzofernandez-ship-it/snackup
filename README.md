import { useState } from 'react'

export default function SnackShop() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const products = [
    {
      name: 'Tita',
      price: 1200,
      image:
        'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Powerade',
      price: 2500,
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Barrita',
      price: 900,
      image:
        'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index)
    setCart(updated)
  }

  const total = cart.reduce((acc, item) => acc + item.price, 0)

  const payNow = () => {
    window.location.href =
      'https://mpago.la/REEMPLAZAR_POR_TU_LINK'
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex justify-between items-center p-6 border-b border-white/10">
        <h1 className="text-4xl font-black">SnackUp ⚡</h1>

        <button
          onClick={() => setShowCart(!showCart)}
          className="bg-white text-black px-5 py-2 rounded-2xl font-bold"
        >
          Carrito ({cart.length})
        </button>
      </header>

      <section className="text-center py-20 px-6">
        <h2 className="text-6xl font-black mb-6">
          Tu kiosco online premium
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto">
          Comprá snacks y bebidas desde una web moderna 🔥
        </p>
      </section>

      {showCart && (
        <section className="mx-6 mb-10 bg-white/10 p-6 rounded-3xl">
          <h3 className="text-3xl font-bold mb-6">
            Carrito 🛒
          </h3>

          {cart.length === 0 ? (
            <p>No hay productos.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-black/40 p-4 rounded-2xl"
                >
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p>${item.price}</p>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 px-3 py-1 rounded-xl"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 flex justify-between items-center">
            <h4 className="text-2xl font-black">
              Total: ${total}
            </h4>

            <button
              onClick={payNow}
              className="bg-green-500 text-black px-6 py-3 rounded-2xl font-black"
            >
              Pagar 💳
            </button>
          </div>
        </section>
      )}

      <section className="grid md:grid-cols-3 gap-8 px-6 pb-20">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-3xl overflow-hidden border border-white/10"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                {product.name}
              </h3>

              <p className="text-white/70 mb-4">
                ${product.price}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="w-full bg-white text-black py-3 rounded-2xl font-bold"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
