export interface IRepository<T> {
    findById(id: number): Promise<T | null>;
    findAll(): Promise<T[]>;
    create(t: T): Promise<T | null>;
    delete(id: number): Promise<number |boolean>;
    update(t: T, id: number): Promise<number |boolean>;
}

export interface ISpecial<T> {
    findById(id: number): Promise<T | null>;
    findAll(): Promise<T[]>;
}

export interface IRepositoryAuth<T> {
    create(t: T): Promise<T | null>;
    update(t: T, id: number): Promise<number |boolean>;
    findAll(): Promise<T[]>;
}