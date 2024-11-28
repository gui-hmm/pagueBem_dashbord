export interface IIndice {
  "identificador": number,
  "devedor_id": number,
  "desvio_padrao": number,
  "quantidade_pagamentos": number,
  "indice_regularidade": number
}

export interface IIndiceRegResponse {
  indices: IIndice[] | undefined,
  "total_contas": number,
  "media_desvio_padrao": number,
  "media_indice_regularidade": number
}