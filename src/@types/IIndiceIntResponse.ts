export interface IConta {
  "conta_id": number,
  "devedor_id": number,
  "media_lead": number,
  "indice_interacao": number
}

export interface IIndiceIntResponse {
  contas: IConta[] | undefined,
  "total_contas": number,
  "media_geral": number
}