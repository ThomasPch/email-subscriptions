import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import CreateSubscriberDto from '../dto/createSubscriber.dto';
import { SubscribersService } from '../services/subscribers.service';

@Controller('subscribers')
export class SubscribersController {
    constructor (
        private readonly subscribersService: SubscribersService,
    ) { }

    // @MessagePattern({ cmd: 'add-subscriber' })
    // addSubscriber(subscriber: CreateSubscriberDto) {
    //     return this.subscribersService.addSubscriber(subscriber);
    // }

    // Aside from using the @MessagePattern(), we can also implement event-based communication.
    // This is fitting for cases in which we don’t want to wait for a response. We can do so in the case of creating new subscribers.
    @EventPattern({ cmd: 'add-subscriber' })
    addSubscriber(subscriber: CreateSubscriberDto) {
        return this.subscribersService.addSubscriber(subscriber);
    }

    @MessagePattern({ cmd: 'get-all-subscribers' })
    getAllSubscribers() {
        return this.subscribersService.getAllSubscribers();
    }

}