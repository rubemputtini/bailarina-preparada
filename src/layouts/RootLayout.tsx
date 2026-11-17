import { Outlet, useLocation, useMatch } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";
import { WhatsAppButton } from "../components/layout/WhatsAppButton";
import { type BlackFridayOutletContext, useBlackFridayActive } from "../hooks/useBlackFriday";

export default function RootLayout() {
  // key entra nas deps para o scroll re-executar ao reclicar o mesmo link de âncora
  const { pathname, hash, key } = useLocation();
  // Durante a Black Friday o /clube vira uma landing com cabeçalho e rodapé próprios.
  // Calculado só aqui e repassado à página, para layout e página virarem juntos.
  // useMatch segue as mesmas regras do roteador (aceita "/clube/" e "/Clube").
  const blackFriday = useBlackFridayActive();
  const onClube = useMatch("/clube") !== null;
  const bareLayout = blackFriday && onClube;
  const outletContext: BlackFridayOutletContext = { blackFriday };

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
      {!bareLayout && <SiteHeader />}
      <Outlet context={outletContext} />
      {!bareLayout && (
        <>
          <SiteFooter />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}
