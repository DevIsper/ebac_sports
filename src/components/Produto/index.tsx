// src/components/Produto/index.tsx
import React from 'react'
import { Produto } from '../../App' // Assumindo que Produto é exportado de App
import { paraReal } from '../../utils' // Importa de utils

type ProdutoComponentProps = {
  produto: Produto
  aoComprar: (produto: Produto) => void
  favoritar: (produto: Produto) => void
  estaNosFavoritos: boolean
}

const ProdutoComponent = ({
                            produto,
                            aoComprar,
                            favoritar,
                            estaNosFavoritos
                          }: ProdutoComponentProps) => {
  return (
    <div className="produto-item">
      <div className="produto-capa">
        <img src={produto.imagem} alt={produto.nome} />
      </div>
      <h3 className="produto-titulo">{produto.nome}</h3>
      <p className="produto-prices">
        <strong>{paraReal(produto.preco)}</strong>
      </p>
      <button
        onClick={() => favoritar(produto)}
        type="button"
        className={`btn-comprar ${
          estaNosFavoritos ? 'btn-remover-favorito' : 'btn-favoritos'
        }`}
      >
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </button>
      <button
        onClick={() => aoComprar(produto)}
        type="button"
        className="btn-comprar"
      >
        Adicionar ao carrinho
      </button>
    </div>
  )
}

export default ProdutoComponent
