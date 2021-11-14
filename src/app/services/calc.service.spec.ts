import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { LoggerService } from './logger.service';

describe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    const calculator = new CalcService(new LoggerService());
    const result = calculator.add(2, 2);
    expect(result).toBe(4);
  });

  it('should substract two numbers', () => {
    const calculator = new CalcService(new LoggerService());
    const result = calculator.subtract(2, 2);
    expect(result).toBe(0);
  });
});
