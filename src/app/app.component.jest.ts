import {render, screen} from "@testing-library/angular";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {routes} from "./router/app-router.module";
import {LoginComponent} from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";

const setup = async (path: string) => {
  const { navigate } = await render(AppComponent, {
    declarations: [ AppComponent, NavbarComponent, HomeComponent, SignUpComponent, LoginComponent],
    imports: [],
    routes: routes
  });
  await navigate(path);
}

describe('Routing', () => {

  it.each`
    path                | title
    ${'/'}              | ${'Home'}
    ${'/signup'}        | ${'Sign Up'}
    ${'/login'}         | ${'Login'}
  `('should display a link with title $title to $path', async ({path, title}) => {
    await setup(path);
    const link = screen.getByRole('link', {name: title});
    // const link = screen.getByTitle(title);
    expect(link).toBeInTheDocument();
    // expect(link.href).toContain(path);
  });

});
