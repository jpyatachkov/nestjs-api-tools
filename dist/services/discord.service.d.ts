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
    emitError(alias: string, token: string, context?: DiscordServiceContext): Promise<Message | null>;
}
