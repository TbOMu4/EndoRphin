import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Procedure from "./pages/Procedure/Procedure";
import Header from "./components/Header/Header";
import MainLayout from "./components/MainLayout/MainLayout";
import { About, Services, Contacts, PriceList, Home } from "./pages/index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/price-list" element={<PriceList />} />
            <Route path="/services/:slug" element={<Procedure />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <MainLayout>
//           <Routes>
//             <Route index element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/contacts" element={<Contacts />} />
//             <Route path="/price-list" element={<PriceList />} />
//             <Route path="/services/:slug" element={<Procedure />} />
//           </Routes>
//         </MainLayout>
//       </BrowserRouter>
//     </>
//   );
// }

export default App;
