import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Subscriber from './subscriber.entity';
import { SubscribersService } from './services/subscribers.service';
import { SubscribersController } from './controllers/subscribers.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Subscriber])],
    providers: [SubscribersService],
    exports: [],
    controllers: [SubscribersController],
})
export class SubscribersModule { }