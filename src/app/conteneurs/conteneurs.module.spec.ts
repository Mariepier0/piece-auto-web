import { ConteneursModule } from './conteneurs.module';

describe('ConteneursModule', () => {
  let conteneursModule: ConteneursModule;

  beforeEach(() => {
    conteneursModule = new ConteneursModule();
  });

  it('should create an instance', () => {
    expect(conteneursModule).toBeTruthy();
  });
});
