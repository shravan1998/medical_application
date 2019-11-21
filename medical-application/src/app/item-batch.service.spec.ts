import { TestBed } from '@angular/core/testing';

import { ItemBatchService } from './item-batch.service';

describe('ItemBatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemBatchService = TestBed.get(ItemBatchService);
    expect(service).toBeTruthy();
  });
});
