import { FerrailleModule } from './ferraille.module';

describe('FerrailleModule', () => {
  let ferrailleModule: FerrailleModule;

  beforeEach(() => {
    ferrailleModule = new FerrailleModule();
  });

  it('should create an instance', () => {
    expect(ferrailleModule).toBeTruthy();
  });
});
