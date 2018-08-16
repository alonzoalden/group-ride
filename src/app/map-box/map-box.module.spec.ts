import { MapboxModule } from './map-box.module';

describe('MapBoxModule', () => {
  let mapBoxModule: MapboxModule;

  beforeEach(() => {
    mapBoxModule = new MapboxModule();
  });

  it('should create an instance', () => {
    expect(mapBoxModule).toBeTruthy();
  });
});
