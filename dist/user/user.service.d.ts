import { User } from './interfaces/user.interface';
export declare class UserService {
    private readonly user;
    create(user: User): void;
    findOne(): User;
}
