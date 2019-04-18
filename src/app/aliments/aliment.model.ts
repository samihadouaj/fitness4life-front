export class AlimentModel {
  id: string;
  name: string;
  qty: number;
  cals: number;

  constructor(id: string, name: string, qty: number, cals: number) {
    this.id = id;
    this.name = name;
    this.qty = qty;
    this.cals = cals;
  }
}
