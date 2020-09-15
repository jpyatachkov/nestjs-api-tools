"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordService = void 0;
const common_1 = require("@nestjs/common");
const discord_js_1 = require("discord.js");
const constants_1 = require("@/constants");
let DiscordService = class DiscordService {
    constructor(options) {
        this.options = options;
        if ((options === null || options === void 0 ? void 0 : options.id) && (options === null || options === void 0 ? void 0 : options.token)) {
            this.hook = new discord_js_1.WebhookClient(options.id, options.token);
        }
    }
    async emitError(alias, logToken, httpMethod = null, httpPath = null, context = {}) {
        if (!this.hook) {
            return null;
        }
        const title = httpMethod && httpPath ? `${httpMethod} ${httpPath} ` : '' + `ERROR: ${alias}${this.options.debug ? ' (DEBUG)' : ''}`;
        const errorMessage = new discord_js_1.MessageEmbed()
            .setColor(this.options.debug ? '#0000FF' : '#FF0000')
            .setTitle(title)
            .addField('LOG TOKEN', `\`${logToken}\``)
            .setAuthor(this.options.domain || 'DEBUG')
            .setTimestamp();
        for (const [key, value] of Object.entries(context)) {
            errorMessage.addField(`${key}`, value.discordNotifyText
                ? `text: \`${value.discordNotifyText}\``
                : `id: \`${value.id}\` guid: \`${value.guid}\``);
        }
        return this.hook.send(errorMessage);
    }
};
DiscordService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.DISCORD_SERVICE_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], DiscordService);
exports.DiscordService = DiscordService;
//# sourceMappingURL=discord.service.js.map