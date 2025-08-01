import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Produto } from '../../App'
import { paraReal } from '../../utils'
import { adicionarAoCarrinho } from '../../store/slices/carrinhoSlice'
import { favoritar } from '../../store/slices/favoritosSlice'
import { RootState } from '../../store'

type ProdutoComponentProps = {
  produto: Produto
}

const ProdutoComponent = ({ produto }: ProdutoComponentProps) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favoritos.items)
  const estaNosFavoritos = favoritos.some((item) => item.id === produto.id)

  const handleAdicionarAoCarrinho = () => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const handleFavoritar = () => {
    dispatch(favoritar(produto))
  }

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
        onClick={handleFavoritar}
        type="button"
        className={`btn-comprar ${
          estaNosFavoritos ? 'btn-remover-favorito' : 'btn-favoritos'
        }`}
      >
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </button>
      <button onClick={handleAdicionarAoCarrinho} type="button" className="btn-comprar">
        Adicionar ao carrinho
      </button>
    </div>
  )
}

export default ProdutoComponent
