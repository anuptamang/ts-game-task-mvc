export interface DataProps {
  filter(arg0: (data: any) => boolean): DataProps;
  pop: any;
  length?: number;
  id?: string;
  figure?: string
  [Symbol.iterator](): any
}[]

export interface StateProps {
  data: DataProps;
  initialData: DataProps;
  counter: number | undefined;
  favColors: string[];
  size: string[]
}

export interface ModelProps {
  state: StateProps;
  addItem: () => void
  removeItem: () => void
  stopGame: () => void
  updateOnMoveUp: (arg) => void
  updateCounter: () => void
}

export interface ViewProps {
  bindToggleStartStop: (callback) => void
  bindAdd: any
  bindRemove: any
}
