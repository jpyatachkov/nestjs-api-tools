import {Inject, Injectable} from '@nestjs/common';
import {MessageEmbed, WebhookClient} from 'discord.js';

import {DISCORD_SERVICE_OPTIONS} from '../constants';

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
    logToken: string,
    httpMethod: string = null,
    httpPath: string = null,
    context: DiscordServiceContext = {},
  ): Promise<void> {
    if (!this.hook) {
      return null;
    }

    const title = (httpMethod && httpPath ? `${httpMethod} ${httpPath} ` : '') + `ERROR: ${alias}${this.options.debug ? ' (DEBUG)' : ''}`;

    const errorMessage = new MessageEmbed()
      .setColor(this.options.debug ? '#0000FF' : '#FF0000')
      .setTitle(title)
      .addField('LOG TOKEN', `\`${logToken}\``)
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

    await this.hook.send({embeds: [errorMessage]});
  }
}
