import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryBoyController } from './delivery-boy.controller';
import { DeliveryBoyService } from './delivery-boy.service';

describe('DeliveryBoyController', () => {
  let deliveryBoyController: DeliveryBoyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryBoyController],
      providers: [DeliveryBoyService],
    }).compile();

    deliveryBoyController = app.get<DeliveryBoyController>(DeliveryBoyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(deliveryBoyController.getHello()).toBe('Hello World!');
    });
  });
});
