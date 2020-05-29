import { TestBed } from '@angular/core/testing';

import { SelectByPIdService } from './select-by-pid.service';

describe('SelectByPIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectByPIdService = TestBed.get(SelectByPIdService);
    expect(service).toBeTruthy();
  });
});
