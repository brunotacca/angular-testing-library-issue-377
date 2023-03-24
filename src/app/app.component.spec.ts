import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from "@angular/router/testing";
import {routes} from "./router/app-router.module";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import { NavbarComponent } from './navbar/navbar.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let appComponent: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        SignUpComponent,
        HomeComponent,
        LoginComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.nativeElement;
    fixture.detectChanges();
  });

  describe('Routing', () => {

    const linkTestsCases = [
      {path: '/', title: 'Home'},
      {path: '/signup', title: 'Sign Up'},
      {path: '/login', title: 'Login'},
    ];
    linkTestsCases.forEach(({path, title}) => {
      it(`should display a link with title ${title} to ${path}`, async () => {
        const linkElement = appComponent.querySelector(`a[title="${title}"]`) as HTMLAnchorElement;
        expect(linkElement.pathname).toEqual(path);
      });
    });

  });

});
