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
import ShopPage from './pages/shelter/sheltershop';
import PetDetails from './pages/shelter/petdetails';
import SAboutUsPage from './pages/shelter/shelteraboutus';
import SAdoptionForm from './pages/shelter/shelterform';
import SLogin from './pages/shelter/shelterlogin';
import SRegister from './pages/shelter/sheltersignup';
import LandingPage from './pages/landingpage';
import APetsPage from './pages/adopter/petspage';
import PetsPage from './pages/adopter/petspage';
import ASecondPetPage from './pages/adopter/petsdata';
import AMorePets from './pages/adopter/morepets';
import FavoritePetsPage from './pages/adopter/favourite';
import ResetPassword from './pages/shelter/ResetPassword';
import ResetPasswordad from './pages/adopter/Resetpasswordad';
import AMorePetsTwo from './pages/adopter/morepetstwo';
import AMorePetsThree from './pages/adopter/morepetsthree';
import OnboardingSinglePage from './pages/onboarding';


const router = createBrowserRouter([

  {
    path: '/',
    element: < LandingPage />,
  },
   {
    path: '/onboarding',
    element: < OnboardingSinglePage />,
  },



  // Adopter Routes
  {
    path: '/adopterhome',
    element: < AHomePage />,
  },
  {
    path: '/adopteraboutus',
    element: < AboutUsPage />,
  },
  {
    path: '/adopterform/:petId',
    element: <AdoptionForm />,
  },
  {
    path: '/adopterlogin',
    element: < ALogin />,
  },
  {
    path: '/adoptersignup',
    element: < ARegister />,
  },
  {
    path: '/adoptershop',
    element: < AShop />,
  },
  {
    path: '/adopterprofile',
    element: < ProfilePage />,
  },
  {
    path: '/adoptercart',
    element: < CartPage />,
  },
  {
    path: '/adopterpets',
    element: < PetsPage />,
  },
  {
    path: '/adopterpetstwo',
    element: < ASecondPetPage />,
  },
  {
    path: '/adoptermorepets',
    element: < AMorePets />,
  },
  {
    path: '/adoptermorepetstwo',
    element: < AMorePetsTwo />,
  },
  {
    path: '/adoptermorepetsthree',
    element: < AMorePetsThree />,
  },
  {
    path: '/adopterfav',
    element: < FavoritePetsPage />,
  },
  {
    path: '/resetpassword/:token',
    element: <ResetPassword />,
  },
  {
    path: '/aresetpassword/:token',
    element: <ResetPasswordad />,
  },






  //Shelter Routes
  {
    path: '/shelterhome',
    element: < ShelterHomePage />,
  },
  {
    path: '/sheltershop',
    element: < ShopPage />,
  },
  {
    path: '/shelterpets',
    element: < PetDetails />,
  },
  {
    path: '/shelteraboutus',
    element: < SAboutUsPage />,
  },
  {
    path: '/shelterform/:formId',
    element: <SAdoptionForm />,
  },
  {
    path: '/shelterlogin',
    element: < SLogin />,
  },
  {
    path: '/sheltersignup',
    element: < SRegister />,
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