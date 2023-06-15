import { ServicesEntreprisesModule } from './services_entreprises.module';

describe('ServicesModule', () => {
  let servicesEntreprisesModule: ServicesEntreprisesModule;

  beforeEach(() => {
    servicesEntreprisesModule = new ServicesEntreprisesModule();
  });

  it('should create an instance', () => {
    expect(servicesEntreprisesModule).toBeTruthy();
  });
});
