import { CDN } from '@discordjs/rest';
import type { APIUser, UserFlags } from 'discord-api-types/v10';
import { UserFlagsBitField } from 'discord.js';

const cdn = new CDN();

export interface IUserInfo {
  id: string;
  discriminator: string;
  username: string;
  tag: string;
  avatar: string;
  mfaEnabled?: boolean;
  publicFlags?: string[];
}

export class UserInfo {
  id: string;

  discriminator: string;

  username: string;

  avatar: string;

  private publicFlags?: UserFlags;

  constructor(user: APIUser) {
    this.id = user.id;
    this.username = user.username;
    this.discriminator = user.discriminator;
    this.avatar = user.avatar as string;
    this.publicFlags = user.public_flags;
  }

  get tag(): string {
    return `${this.username}#${this.discriminator}`;
  }

  private get avatarURL(): string | null {
    if (!this.avatar) return null;

    return cdn.avatar(this.id, this.avatar, { size: 256 });
  }

  private get defaultAvatarURL(): string {
    return cdn.defaultAvatar(Number(this.discriminator) % 5);
  }

  get displayAvatar(): string {
    return this.avatarURL || this.defaultAvatarURL;
  }

  private get publicFlagsToArray(): string[] {
    const bitField = new UserFlagsBitField(this.publicFlags);

    return bitField.toArray();
  }

  toObject(): IUserInfo {
    return {
      id: this.id,
      username: this.username,
      discriminator: this.discriminator,
      tag: this.tag,
      avatar: this.displayAvatar,
      publicFlags: this.publicFlagsToArray,
    };
  }
}
