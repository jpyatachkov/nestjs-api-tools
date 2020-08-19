export interface CacheServiceOptions {
    ttl: number;
    useClones: boolean;
}
export declare class CacheService {
    private readonly options;
    private readonly cache;
    constructor(options: CacheServiceOptions);
    has(key: string): boolean;
    get(key: string): any;
    set(key: string, value: any, ttl?: number): boolean;
}
