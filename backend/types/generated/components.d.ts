import type { Struct, Schema } from '@strapi/strapi';

export interface RoomAlienRoom extends Struct.ComponentSchema {
  collectionName: 'components_room_alien_rooms';
  info: {
    displayName: 'alien room';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'room.alien-room': RoomAlienRoom;
    }
  }
}
