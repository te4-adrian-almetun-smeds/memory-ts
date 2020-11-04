class Cards {
  private _img: String;
  private _template: HTMLTemplateElement | null = document.querySelector('template.card');
  private _uuid: string;
  private _state: string;
  private _matched: boolean;

  public get img(): String {
    return this._img;
  }
  public get uuid(): string {
    return this._uuid;
  }

  public get state(): string {
    return this._state
  }

  constructor(str: String) {
    this._img = str;
    this._uuid = this.uuidv4();
    this._state = 'down';
    this._matched = false;
  }

  render() {
    if (this._template) {
      let cloned: Element = this._template.content.cloneNode(true) as Element;
      let card = cloned.querySelector('.card');

      if (card) {
        card.setAttribute('data-uuid', this._uuid);
      }
      return cloned;

    } else {
      throw new Error('Invalid template');
    }
  }

  match() {
    this._matched = true
  }


  canBeFlipped() {
    return this._matched === false && this._state === 'down'
  }

  flipp(target: Element) {
    let sel = target.querySelector("img")
    if (sel) {
      switch (this._state) {
        case 'up':
          this._state = 'down';
          sel.src = "/app/img/back.png"
          break;
        case 'down':
          this._state = 'up';
          sel.src = `/app/img/${this._img}`
          break;
      }
    } else {
      throw new Error('Invalid element selected')
    }
  }

  uuidv4() {
    let dt = new Date().getTime()

    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0
      dt = Math.floor(dt / 16)
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })

    return uuid
  }

}
export {
  Cards
}
