import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageAccueilEntreprisePage } from './page-accueil-entreprise.page';

describe('PageAccueilEntreprisePage', () => {
  let component: PageAccueilEntreprisePage;
  let fixture: ComponentFixture<PageAccueilEntreprisePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAccueilEntreprisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageAccueilEntreprisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
