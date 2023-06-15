import { FonctionnementModule } from './fonctionnement.module';

describe('FonctionnementModule', () => {
  let fonctionnementModule: FonctionnementModule;

  beforeEach(() => {
    fonctionnementModule = new FonctionnementModule();
  });

  it('should create an instance', () => {
    expect(fonctionnementModule).toBeTruthy();
  });
});