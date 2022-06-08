export interface GetCharacterResults {
    results: Character[];
  }
  
  export interface Character {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
  }
  
  export interface Location {
    name: string;
    url: string;
  }
  