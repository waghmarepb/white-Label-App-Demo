import { IUser } from '../shared/interface/user.interface';

export class User implements IUser {
    name: string;
    email: string;
    address: string;
    password: string;
    dob: string;
    status: string;
}
