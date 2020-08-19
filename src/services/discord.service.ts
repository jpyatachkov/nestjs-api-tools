import {Inject, Injectable} from '@nestjs/common';
import {Message, MessageEmbed, WebhookClient} from 'discord.js';

import {DISCORD_SERVICE_OPTIONS} from '@/constants';

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

@Injectable()
export class DiscordService {

  private readonly hook: WebhookClient;

  public constructor(
    @Inject(DISCORD_SERVICE_OPTIONS)
    private readonly options: DiscordServiceOptions,
  ) {
    if (options?.id && options?.token) {
      this.hook = new WebhookClient(
        options.id,
        options.token,
      );
    }
  }

  public async emitError(
    alias: string,
    token: string,
    context: DiscordServiceContext = {},
  ): Promise<Message | null> {
    if (!this.hook) {
      return null;
    }

    const errorMessage = new MessageEmbed()
      .setColor(this.options.debug ? '#0000FF' : '#FF0000')
      .setTitle(`ERROR: ${alias}${this.options.debug ? ' (DEBUG)' : ''}`)
      .addField('LOG TOKEN', `\`${token}\``)
      .setAuthor(this.options.domain || 'DEBUG')
      .setTimestamp();

    for (const [key, value] of Object.entries(context)) {
      errorMessage.addField(
        `${key}`,
        value.discordNotifyText
          ? `text: \`${value.discordNotifyText}\``
          : `id: \`${value.id}\` guid: \`${value.guid}\``,
      );
    }

    return this.hook.send(errorMessage);
  }
}
