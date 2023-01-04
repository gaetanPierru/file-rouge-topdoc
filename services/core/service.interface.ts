export interface IService<T> {
    findById(id: number): Promise<T | null>;
    findAll(): Promise<T[] | null>;
    create(t: T): Promise<T | null>;
    delete(id: number): Promise<number |boolean>;
    update(t: T, id: number): Promise<number |boolean>;
}

export interface IServiceToken<T> {
    findAll(): Promise<T[] | null>;
    create(t: T): Promise<T | null>;
    update(t: T, id: number): Promise<number |boolean>;
}