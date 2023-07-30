export interface MealsMain {
  meals: Meal[];
}

export interface Meal {
  idIngredient: string;
  strIngredient: string;
  strDescription: null | string;
  strType: null | string;
}

export interface ImageMain {
  id: string;
  url: string;
  width: number;
  height: number;
  color: string;
  preview: Preview;
  origin: Origin;
}
export interface Origin {
  title: string;
  website: Website;
}

export interface Website {
  name: string;
  domain: string;
  url: string;
}

export interface Preview {
  url: string;
  width: number;
  height: number;
}
