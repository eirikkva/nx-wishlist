import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { WishSchema, WishlistSchema } from '@wishlist/data';

import { WishController } from './wish/wish.controller';
import { WishlistService } from './wishlist.service';

import { WishlistController } from './wishlist.controller';
import { WishService } from './wish/wish.service';
import { AuthzModule } from '../authz/authz.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Wishlist', schema: WishlistSchema },
      { name: 'Wish', schema: WishSchema }
    ]),
    AuthzModule
  ],
  controllers: [WishlistController, WishController],
  providers: [WishlistService, WishService]
})
export class WishlistModule {}
