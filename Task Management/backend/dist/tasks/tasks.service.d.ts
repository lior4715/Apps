import { TaskStatus } from './task-status';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './tasks.repository';
import { Task } from './task.entity';
import { User } from 'src/auth/user.entity';
export declare class TasksService {
    private readonly tasksRepository;
    constructor(tasksRepository: TaskRepository);
    getTasks(filterDto: GetTaskFilterDto): Promise<Task[]>;
    getTaskById(id: string, user: User): Promise<Task>;
    deleteTask(id: string): Promise<void>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    updateTaskStatus(id: string, status: TaskStatus, user: User): Promise<Task>;
}
