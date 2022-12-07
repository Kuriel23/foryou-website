import { CDN } from '@discordjs/rest';
import type { APIUser } from 'discord-api-types/v10';

const cdn = new CDN();

export class User {
  public readonly id: APIUser['id'];

  public readonly discriminator: APIUser['discriminator'];

  public readonly username: APIUser['username'];

  private readonly avatar: APIUser['avatar'];

  constructor(private user: APIUser) {
    this.id = user.id;
    this.username = user.username;
    this.discriminator = user.discriminator;
    this.avatar = user.avatar;
  }

  public get tag(): string {
    return `${this.user.username}#${this.user.discriminator}`;
  }

  private get avatarURL(): string | null {
    if (!this.avatar) return null;

    return cdn.avatar(this.id, this.avatar);
  }

  private get defaultAvatarURL(): string {
    return cdn.defaultAvatar(Number(this.user.discriminator) % 5);
  }

  public get displayAvatar(): string {
    return this.avatarURL || this.defaultAvatarURL;
  }
}
