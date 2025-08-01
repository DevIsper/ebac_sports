import React from 'react'
import { Produto } from '../App'
import ProdutoComponent from '../components/Produto'

type ProdutosContainerProps = {
  produtos: Produto[]
}

const ProdutosContainer = ({ produtos }: ProdutosContainerProps) => {
  return (
    <ul className="produtos-grid">
      {produtos.map((produto) => (
        <ProdutoComponent
          key={produto.id}
          produto={produto}
        />
      ))}
    </ul>
  )
}

export default ProdutosContainer
