import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Produto } from '../../App';

type CarrinhoState = {
  items: Produto[];
};

const initialState: CarrinhoState = {
  items: [],
};

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload;
      if (!state.items.find((item) => item.id === produto.id)) {
        state.items.push(produto);
      } else {
        alert('Item já adicionado ao carrinho!'); // Mensagem de alerta movida para o slice
      }
    },
  },
});

export const { adicionarAoCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
