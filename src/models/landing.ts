import {Schema, model, Document} from 'mongoose';

export interface ILanding extends Document {
    email: string;
    rut: string;
    phone: string;
  }
const landingScheema = new Schema({
   email: {type: String},
   rut: {type: String},
   phone: {type: String}  
});

export default model<ILanding>('Landing', landingScheema);