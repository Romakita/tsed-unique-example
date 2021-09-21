import {Model, ObjectID, Unique} from "@tsed/mongoose";
import {Email, Groups, Required} from "@tsed/schema";

@Model()
export class User {
  @ObjectID("id")
  @Groups('!creation')
  _id: string;

  @Unique()
  @Required()
  @Email()
  email: string;
}
