export interface Cripto {
  id: number;
  symbol: string;
  name: string;
  category: string;
  blockchain?: string;
  marketCapitalization: string;
  currentPrice?: number;
  useCase?: string;
}
