import { Message } from 'discord.js';
export interface DiscordServiceContext {
    [key: string]: Partial<{
        id?: number;
        guid?: string;
        discordNotifyText?: string;
    }>;
}
export interface DiscordServiceOptions {
    debug?: boolean;
    domain?: string;
    id?: string;
    token?: string;
}
export declare class DiscordService {
    private readonly options;
    private readonly hook;
    constructor(options: DiscordServiceOptions);
    emitError(alias: string, logToken: string, httpMethod?: string, httpPath?: string, context?: DiscordServiceContext): Promise<Message | null>;
}
