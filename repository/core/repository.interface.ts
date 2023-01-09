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

export interface IRepositoryAuth<T, D> {
    create(t: T): Promise<T | null>;
    update(t: T, id: number): Promise<number |boolean>;
    findToken(token:string): Promise<T | null>;
    findUser(email: string): Promise<D | null>;
    findUserToken(id: number): Promise<D | null>; 
}

export interface IRepositoryPlanning<T> {
    findById(id: number): Promise<T | null>;
    create(t: Omit<T, 'id'>): Promise<T | null>;
    update(t: Partial<T>, id: number): Promise<number |boolean>;
    delete(id: number): Promise<number |boolean>;
}