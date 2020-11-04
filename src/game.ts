import {
  Cards
} from "./cards"

class Game {
  private _list: String[] = ['10_tiger.png', '11_penguin.png', '12_racoon.png', '1_pig.png', '2_squirrel.png', '3_rabbit.png', '4_frog.png', '5_fox.png', '6_bear.png', '7_monkey.png', '8_panda.png', '9_chick.png', '10_tiger.png', '11_penguin.png', '12_racoon.png', '1_pig.png', '2_squirrel.png', '3_rabbit.png', '4_frog.png', '5_fox.png', '6_bear.png', '7_monkey.png', '8_panda.png', '9_chick.png']
  public numberOfPairs: number;
  private _container: Element;
  private _cards: Cards[];
  private _openCards: Cards[];

  constructor(container: Element) {
    this.numberOfPairs = 0;
    this._container = container;
    this._cards = [];
    this._openCards = [];
  }

  run() {
    this._list.forEach((e: String) => {
      this._cards.push(new Cards(e));
    })
    this.render()
  }
  render() {
    this.shuffle(this._cards).forEach((e) => {
      const element = e.render()
      const card = element.querySelector('div')
      if (card) {
        card.addEventListener('click', (e) => {
          this.pressed(e)
        })
        this._container.append(card)
      }
    })
  }

  shuffle(array: Cards[]) {
    for(let i : number = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    console.log(array)
    return array
  }

  canBeFlipped(card: Cards) {
    if (this._openCards.length === 2) {
      this._openCards.forEach((e) => {
        const temp = document.querySelector(`[data-uuid="${e.uuid}"`)
        console.log(temp)
        if (temp) {
          e.flipp(temp)
        }
      })
      this._openCards = []
    }

    if(this._openCards.length < 2) {
      if (card.canBeFlipped()) {
        return true
      }
      return false
    }
    return false
  }

  match(card: Cards) {
    if (this._openCards.length === 0) {
    } else {
      if (this._openCards[0].img === card.img && this._openCards[0] != card) {
        this._openCards[0].match()
        card.match()
        this._openCards = []
        console.log("pair")
      }
    }
  }

  pressed(e: Event) {
    const target = e.currentTarget as Element
    const card = this._cards.find((element) => element.uuid == target.getAttribute('data-uuid'))
    console.log(card)
    if (card) {
      if (this.canBeFlipped(card)) {
        card.flipp(target)
        this._openCards.push(card)
        this.match(card)
      }
    }
  }
}

export {
  Game
}