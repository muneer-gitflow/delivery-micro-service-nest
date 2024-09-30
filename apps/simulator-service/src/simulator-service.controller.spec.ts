import { Test, TestingModule } from '@nestjs/testing';
import { SimulatorServiceController } from './simulator-service.controller';
import { SimulatorServiceService } from './simulator-service.service';

describe('SimulatorServiceController', () => {
  let simulatorServiceController: SimulatorServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SimulatorServiceController],
      providers: [SimulatorServiceService],
    }).compile();

    simulatorServiceController = app.get<SimulatorServiceController>(SimulatorServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(simulatorServiceController.getHello()).toBe('Hello World!');
    });
  });
});
