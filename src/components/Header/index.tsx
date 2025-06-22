// src/components/Header/index.tsx
import React from 'react'
import { Produto } from '../../App' // Assumindo que Produto é exportado de App
import { paraReal } from '../../utils' // Importa de utils
// Placeholder para cesta.png
const cesta = '../../assets/cesta.png'

type HeaderProps = {
  itensNoCarrinho: Produto[]
  favoritos: Produto[]
}

const Header = ({ itensNoCarrinho, favoritos }: HeaderProps) => {
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
