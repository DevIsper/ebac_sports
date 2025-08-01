import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import ProdutosContainer from './containers/Produtos'

// =============================================================================
// CSS INLINE
// =============================================================================
// ... (Seu CSS permanece o mesmo) ...

const AppStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #f8f8f8;
    color: #333;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
  }

  .button {
    background-color: #007bff;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background-color: #0056b3;
  }

  /* Header Styles */
  .header-container {
    background-color: #282c34;
    color: #fff;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 40px;
  }

  .header-container h1 {
    font-size: 28px;
    margin-left: 24px;
  }

  .header-container div {
    display: flex;
    align-items: center;
    margin-right: 24px;
  }

  .header-container span {
    margin-right: 16px;
    font-weight: bold;
  }

  .header-container img {
    height: 24px;
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    .header-container {
      flex-direction: column;
      text-align: center;
    }

    .header-container h1 {
      margin: 0 0 16px 0;
    }

    .header-container div {
      margin: 0;
      justify-content: center;
      width: 100%;
    }
  }

  /* Produto Styles */
  .produto-item {
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.2s ease-in-out;
  }

  .produto-item:hover {
    transform: translateY(-5px);
  }

  .produto-capa {
    width: 100%;
    height: 180px;
    margin-bottom: 16px;
    overflow: hidden;
    border-radius: 8px;
  }

  .produto-capa img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .produto-titulo {
    font-size: 20px;
    margin-bottom: 8px;
    color: #333;
  }

  .produto-prices {
    font-size: 18px;
    color: #555;
    margin-bottom: 16px;
  }

  .produto-prices strong {
    color: #28a745;
  }

  .btn-comprar {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
    margin-top: 8px;
    transition: background-color 0.3s ease;
  }

  .btn-comprar:hover {
    background-color: #0056b3;
  }

  .btn-favoritos {
    background-color: #ffc107;
  }

  .btn-favoritos:hover {
    background-color: #e0a800;
  }

  .btn-remover-favorito {
    background-color: #dc3545; /* Cor para remover dos favoritos */
  }

  .btn-remover-favorito:hover {
    background-color: #c82333;
  }

  /* Produtos Container Styles */
  .produtos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
    list-style: none;
  }
`
// =============================================================================
// TYPES
// =============================================================================
export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
      .catch((error) => console.error('Erro ao buscar produtos:', error))
  }, [])

  return (
    <>
      <style>{AppStyles}</style>
      <div className="container">
        <Header /> {/* Props removidas */}
        <ProdutosContainer produtos={produtos} /> {/* Props removidas */}
      </div>
    </>
  )
}

export default App
