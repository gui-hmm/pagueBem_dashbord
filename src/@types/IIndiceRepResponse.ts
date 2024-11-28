export interface IIndice {
  "conta_id": number,
  "devedor_id": number,
  "i_pag": number,
  "i_reg": number,
  "i_int": number,
  "i_rep": number
}

export interface IIndiceRepResponse {
  indices: IIndice[] | undefined,
  "total_contas": number,
  "media_reputacao": number
}