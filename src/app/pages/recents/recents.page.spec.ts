import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecentsPage } from './recents.page';

describe('RecentsPage', () => {
  let component: RecentsPage;
  let fixture: ComponentFixture<RecentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
