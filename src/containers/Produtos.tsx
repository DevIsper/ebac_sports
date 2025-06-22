// src/containers/Produtos/index.tsx
import React from 'react'
import { Produto } from '../App' // Assumindo que Produto é exportado de App
import ProdutoComponent from '../components/Produto' // Importa o componente Produto

type ProdutosContainerProps = {
  produtos: Produto[]
  favoritos: Produto[]
  adicionarAoCarrinho: (produto: Produto) => void
  favoritar: (produto: Produto) => void
}

const ProdutosContainer = ({
                             produtos,
                             favoritos,
                             adicionarAoCarrinho,
                             favoritar
                           }: ProdutosContainerProps) => {
  const produtoEstaNosFavoritos = (produto: Produto) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)
    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <ul className="produtos-grid">
      {produtos.map((produto) => (
        <ProdutoComponent
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
          favoritar={favoritar}
          aoComprar={adicionarAoCarrinho}
        />
      ))}
    </ul>
  )
}

export default ProdutosContainer
