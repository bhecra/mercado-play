export class MultimediaItem {
  public id: string = '';
  public title: string = '';
  public description: string = '';
  public category: string = '';
  public duration: string = '';
  public restriction: string = '';
  public type: string = '';
  public url: string;
  public data: string;

  constructor(init: Partial<MultimediaItem> = {}) {
    Object.keys(init).forEach((key) => {
      if (Object.keys(this).includes(key)) this[key] = init[key];
    });
  }
}
