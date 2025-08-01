import React from 'react'
import { useSelector } from 'react-redux'
import { paraReal } from '../../utils'
import { RootState } from '../../store'

const cesta = '/cesta.png'

const Header = () => {
  const itensNoCarrinho = useSelector((state: RootState) => state.carrinho.items)
  const favoritos = useSelector((state: RootState) => state.favoritos.items)

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <header className="header-container">
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Cesta de compras" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </header>
  )
}

export default Header
