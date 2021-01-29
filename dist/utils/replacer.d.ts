export declare function createJsonReplacer(fieldNamesToExclude: string[]): (key: string, val: string | any) => any | undefined;
export declare function replacer(obj: Record<string, any>, keysToExclude: string[]): Record<string, any>;
