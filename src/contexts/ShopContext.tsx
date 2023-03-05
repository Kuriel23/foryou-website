/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
let valorSelecionado = '';

export const setValorSelecionado = (novoValor: string): void => {
  valorSelecionado = novoValor;
};

export { valorSelecionado };

let category = '';

export const setCategory = (novoValor: string): void => {
  category = novoValor;
};

export { category };

let search = '';

export const setSearch = (novoValor: string): void => {
  search = novoValor;
};

export { search };
