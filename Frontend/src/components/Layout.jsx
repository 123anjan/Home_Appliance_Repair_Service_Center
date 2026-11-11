import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ScrollManager from "./ScrollManager";
import EmergencyPopup from "./EmergencyPopup";

export default function Layout() {
  return (
    <div className="bg-white font-sans text-slate-800">
      <ScrollManager />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <EmergencyPopup />
    </div>
  );
}
