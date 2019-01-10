import { LeadModule } from './lead.module';

describe('LeadModule', () => {
  let leadModule: LeadModule;

  beforeEach(() => {
    leadModule = new LeadModule();
  });

  it('should create an instance', () => {
    expect(leadModule).toBeTruthy();
  });
});
