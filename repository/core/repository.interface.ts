export interface IRepository<T> {
    findById(id: number): Promise<T | null>;
    findAll(): Promise<T[]>;
    create(t: T): Promise<T | null>;
    delete(id: number): Promise<number |boolean>;
    update(t: T, id: number): Promise<number |boolean>;
}