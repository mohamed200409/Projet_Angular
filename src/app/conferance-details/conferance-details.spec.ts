import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ConferanceDetails } from './conferance-details';

describe('ConferanceDetails', () => {
  let component: ConferanceDetails;
  let fixture: ComponentFixture<ConferanceDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferanceDetails],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ConferanceDetails);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', '2');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the conference matching the id', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('react');
    expect(text).toContain('2023-02-01');
    expect(text).toContain('sfax');
  });

  it('should display a message when the id does not exist', async () => {
    fixture.componentRef.setInput('id', '99');
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('Conference 99 not found');
  });
});
