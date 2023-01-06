export interface IService<T> {
    findById(id: number): Promise<T | null>;
    findAll(): Promise<T[] | null>;
    create(t: T): Promise<T | null>;
    delete(id: number): Promise<number |boolean>;
    update(t: T, id: number): Promise<number |boolean>;
}

export interface IServiceToken<T, D> {
    findAll(): Promise<T[]>;
    create(t: Omit<T, 'id'>): Promise<T | null>;
    update(t: Partial<T>, id: number): Promise<number |boolean>;
    findUsers(): Promise<D[]>; 
}