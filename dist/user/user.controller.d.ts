import { CreateUser } from './dto/create-user.dto';
export declare class UserController {
    findOne(params: any): Promise<string>;
    create(createUser: CreateUser): Promise<string>;
}
