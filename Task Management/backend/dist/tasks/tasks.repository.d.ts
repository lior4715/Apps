import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import { User } from 'src/auth/user.entity';
export declare class TaskRepository {
    private readonly taskRepository;
    [x: string]: any;
    constructor(taskRepository: Repository<Task>);
    getTasks(filterDto: GetTaskFilterDto): Promise<Task[]>;
    createTask({ title, description }: CreateTaskDto, user: User): Promise<Task>;
    deleteTask(id: string): Promise<void>;
}
