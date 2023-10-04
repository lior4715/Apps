import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
export declare class UsersRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    findUserbyUsername(username: string): Promise<User | undefined>;
}
