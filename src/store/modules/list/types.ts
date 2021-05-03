export interface IListItem {
  id: number;
  name: string;
  image: string;
  summary: string;
}

export interface IListState {
  items: IListItem[];
}
