import {BodyParams, Controller, Post} from "@tsed/common";
import {Inject} from "@tsed/di";
import {MongooseModel} from "@tsed/mongoose";
import {User} from "../../models/User";
import {Groups, Returns} from "@tsed/schema";

@Controller("/users")
export class UsersController {
  @Inject(User)
  userModel: MongooseModel<User>;

  @Post("/")
  @Returns(201, User)
  save(@BodyParams() @Groups('creation')user: User) {
    const model = new this.userModel(user);
    return model.save()
  }
}
