export interface IConta {
  "conta_id": number,
  "devedor_id": number,
  "media_tempo_pagamento": number,
  "indice_pagamento": number
}

export interface IIndicePagResponse {
  contas: IConta[] | undefined,
  "total_contas": number,
  "media_geral": number
}