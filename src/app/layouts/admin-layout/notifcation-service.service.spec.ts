import { TestBed } from '@angular/core/testing';

import { NotifcationServiceService } from './notifcation-service.service';

describe('NotifcationServiceService', () => {
  let service: NotifcationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifcationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
