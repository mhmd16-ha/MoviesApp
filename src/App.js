import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Trending from './Components/Trending/Trending';
import Movie from './Components/Movie/Movie';
import Actors from './Components/Actors/Actors';
import Search from './Components/Search/Search';

let router=createHashRouter([
  {path:'/',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'trends',element:<Trending/>},
    {path:'movie/:id',element:<Movie/>},
    {path:'actors',element:<Actors/>},
    {path:'search',element:<Search/>}
  ]}])
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider> 
    </QueryClientProvider>
  );
}

export default App;
