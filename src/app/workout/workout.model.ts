export class Workout {
 id: string;
 name: string;
 type: string;
 kcal: number;
 duration: number ;

 constructor(id: string, name: string, type: string, kcal: number, duration: number) {
   this.id = id;
   this.name = name;
   this.type = type;
   this.kcal = kcal;
   this.duration = duration;
 }

}
