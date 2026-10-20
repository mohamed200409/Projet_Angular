import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../app.routes';

import { UserForm } from './user-form';

describe('UserForm', () => {
  let component: UserForm;
  let fixture: ComponentFixture<UserForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log the entered values when Valider is clicked without exposing the password', async () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    try {
    const fill = (id: string, value: string) => {
      const input = fixture.nativeElement.querySelector(`[formControlName="${id}"]`) as HTMLInputElement;
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    };
    fill('username', 'ons');
    fill('email', 'ons@example.com');
    fill('password', 'test-password');
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();
    await fixture.whenStable();
    expect(log).toHaveBeenCalledExactlyOnceWith('Form submitted:', {
      username: 'ons',
      email: 'ons@example.com',
      passwordEntered: true,
    });
    } finally {
      log.mockRestore();
    }
  });
});

describe('User form route', () => {
  it('should display the form at /add', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/add', UserForm);

    expect(harness.routeNativeElement?.querySelectorAll('input').length).toBe(3);
  });
});
