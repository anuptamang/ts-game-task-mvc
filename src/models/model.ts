import { StateProps } from 'src/types/types'
import SHAPES from '../data/shapes.json'
import { getUniqueCompareResult, shuffle } from '../utils'

class Model {
  state: StateProps

  constructor() {
    this.state = {
      data: SHAPES,
      initialData: [],
      counter: 0,
      favColors: ['blue', 'green', 'yellow', 'purple', 'orange', 'red'],
      size: ['small', 'medium', 'large'],
    }
  }

  _updateCounter() {
    return (this.state.counter = this.state.initialData.length)
  }

  addItem() {
    const itemToAdd = getUniqueCompareResult(
      this.state.data,
      this.state.initialData
    )

    let newItem = shuffle(itemToAdd).pop() as unknown as { id: string, figure: string }

    let fav = [...shuffle(this.state.favColors)]
    let size = [...shuffle(this.state.size)]

    newItem.figure = `${newItem.figure} ${shuffle(fav).pop()} ${shuffle(
      size
    ).pop()}`

    this.state.initialData = [...this.state.initialData, newItem]
    this._updateCounter()

    return newItem
  }

  removeItem() {
    const popData = this.state.initialData.pop()

    this.state.initialData = this.state.initialData?.filter(
      (data) => data.id !== popData?.id
    )
    this._updateCounter()

    return popData
  }

  stopGame() {
    this.state.counter = 0
    this.state.initialData = []
    return this.state
  }

  updateOnMoveUp(item) {
    this.state.initialData = this.state.initialData?.filter(
      (data) => data.id !== item?.id
    )
    this._updateCounter()
  }
}

export default Model
