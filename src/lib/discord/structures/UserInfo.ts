import { CDN } from '@discordjs/rest';
import type { APIUser } from 'discord-api-types/v10';

const cdn = new CDN();

export type UserInfoToObject = Pick<
  UserInfo,
  'id' | 'username' | 'discriminator' | 'tag' | 'avatar'
>;

export class UserInfo {
  public readonly id: string;

  public readonly discriminator: string;

  public readonly username: string;

  public readonly avatar: string;

  constructor(user: APIUser) {
    this.id = user.id;
    this.username = user.username;
    this.discriminator = user.discriminator;
    this.avatar = user.avatar as string;
  }

  public get tag(): string {
    return `${this.username}#${this.discriminator}`;
  }

  private get avatarURL(): string | null {
    if (!this.avatar) return null;

    return cdn.avatar(this.id, this.avatar, { size: 256 });
  }

  private get defaultAvatarURL(): string {
    return cdn.defaultAvatar(Number(this.discriminator) % 5);
  }

  public get displayAvatar(): string {
    return this.avatarURL || this.defaultAvatarURL;
  }

  public toObject(): UserInfoToObject {
    return {
      id: this.id,
      username: this.username,
      discriminator: this.discriminator,
      tag: this.tag,
      avatar: this.displayAvatar,
    };
  }
}
