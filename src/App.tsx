import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/adopter/home';
import AboutUsPage from './pages/adopter/aboutus';
import AdoptionForm from './pages/adopter/adoptionform';
import Login from './pages/adopter/login';
import ALogin from './pages/adopter/login';
import ARegister from './pages/adopter/signup';
import AShop from './pages/adopter/shop';
import ProfilePage from './pages/adopter/profile';
import CartPage from './pages/adopter/cart';
import AHomePage from './pages/adopter/home';
import ShelterHomePage from './pages/shelter/shelterhome';

const router = createBrowserRouter([
  // Adopter Routes
  {
    path: '/adopterhome',
    element: < AHomePage/>,
  },
  {
    path: '/adopteraboutus',
    element: < AboutUsPage/>,
  },
  {
    path: '/adoptionform',
    element: < AdoptionForm/>,
  },
  {
    path: '/adopterlogin',
    element: < ALogin/>,
  },
  {
    path: '/adoptersignup',
    element: < ARegister/>,
  },
  {
    path: '/adoptershop',
    element: < AShop/>,
  },
  {
    path: '/adopterprofile',
    element: < ProfilePage/>,
  },
  {
    path: '/adoptercart',
    element: < CartPage/>,
  },
  //Shelter Routes
  {
    path: '/shelterhome',
    element: < ShelterHomePage/>,
  },
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />

    </>
  );
}

export default App;