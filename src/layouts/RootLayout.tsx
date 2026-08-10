import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";
import { WhatsAppButton } from "../components/layout/WhatsAppButton";

export default function RootLayout() {
  // key entra nas deps para o scroll re-executar ao reclicar o mesmo link de âncora
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      // getElementById não lança com hashes que não são seletores CSS válidos (ex.: /#access_token=x)
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
