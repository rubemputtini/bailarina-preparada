// Bloqueadores de anúncio escondem qualquer <a> que aponte para go.hotmart.com,
// então os botões de compra usam o link do marketplace (que não é escondido).
// No clique, trocamos o href pelo link go.hotmart.com do mesmo produto para manter o
// rastreamento da Hotmart — a navegação para o go não é bloqueada, só o elemento.
// A navegação continua sendo a nativa do link (sem preventDefault/window.open), o que
// respeita target/rel e funciona em navegadores de apps que bloqueiam pop-ups.
const marketplacePath = /^\/[a-z-]+\/marketplace\/produtos\/[^/]+\/([A-Z0-9]+)\/?$/;

export function setupHotmartTracking() {
  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || !(event.target instanceof Element)) return;

    const anchor = event.target.closest("a[href]");
    if (!(anchor instanceof HTMLAnchorElement)) return;

    // O GTM decora o href com ?_gl=... no mousedown; por isso comparamos só o caminho
    // e repassamos a query para o go, que a mantém no redirecionamento.
    let url: URL;
    try {
      url = new URL(anchor.href);
    } catch {
      return;
    }
    const code = url.hostname === "hotmart.com" ? url.pathname.match(marketplacePath)?.[1] : undefined;
    if (!code) return;

    const originalHref = anchor.getAttribute("href")!;
    anchor.href = `https://go.hotmart.com/${code}${url.search}`;
    // Restaura depois que o navegador já usou o href do clique, para o adblock não esconder o botão.
    setTimeout(() => anchor.setAttribute("href", originalHref));
  });
}
