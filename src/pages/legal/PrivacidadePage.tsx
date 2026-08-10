import { PageHead } from "@/components/PageHead";
import { LegalPage } from "@/components/LegalPage";
import { WHATSAPP_URL } from "@/constants/urls";

// TODO: preencher razão social/CNPJ e e-mail de contato oficiais.

export default function PrivacidadePage() {
  return (
    <>
      <PageHead
        title="Política de Privacidade — Bailarina Preparada"
        description="Como a Bailarina Preparada coleta, usa e protege os seus dados pessoais."
        path="/privacidade"
      />
      <LegalPage title="Política de Privacidade" updated="04 de agosto de 2026">
        <section>
          <h2>1. Quem somos</h2>
          <p>
            A Bailarina Preparada, fundada por Isabella Souza, é a controladora
            dos dados pessoais tratados neste site, nos termos da Lei Geral de
            Proteção de Dados (Lei nº 13.709/2018 — LGPD).
          </p>
        </section>

        <section>
          <h2>2. Quais dados coletamos</h2>
          <ul>
            <li>
              <strong>Dados enviados por você:</strong> nome, contato e
              informações compartilhadas voluntariamente ao falar com a equipe
              pelo WhatsApp ou pelo formulário do site (que direciona a
              conversa ao WhatsApp).
            </li>
            <li>
              <strong>Dados de contratação:</strong> ao assinar o Clube, seus
              dados de cadastro e pagamento são coletados e processados pela
              plataforma Hotmart, conforme a política de privacidade dela.
            </li>
            <li>
              <strong>Dados de navegação:</strong> o site pode registrar dados
              técnicos básicos (como endereço IP e tipo de navegador) por meio
              dos servidores e de serviços incorporados, como o player do
              YouTube e as fontes do Google.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Para que usamos os dados</h2>
          <ul>
            <li>responder ao seu contato e prestar os serviços contratados;</li>
            <li>personalizar treinos e acompanhamentos (histórico, objetivos e rotina);</li>
            <li>cumprir obrigações legais e contratuais;</li>
            <li>melhorar o site e a comunicação com as alunas.</li>
          </ul>
        </section>

        <section>
          <h2>4. Compartilhamento</h2>
          <p>
            Não vendemos seus dados. Compartilhamos apenas o necessário com
            prestadores que viabilizam os serviços — como Hotmart (pagamentos),
            Meta/WhatsApp (comunicação) e Google (Meet, YouTube e fontes) —,
            cada um responsável por suas próprias políticas de privacidade.
          </p>
        </section>

        <section>
          <h2>5. Cookies e conteúdos incorporados</h2>
          <p>
            O site não utiliza cookies próprios de rastreamento. Conteúdos
            incorporados de terceiros, como vídeos do YouTube, podem definir
            cookies próprios quando reproduzidos — consulte as políticas dessas
            plataformas para gerenciá-los.
          </p>
        </section>

        <section>
          <h2>6. Seus direitos</h2>
          <p>
            Nos termos da LGPD, você pode solicitar a qualquer momento:
            confirmação do tratamento, acesso, correção, anonimização,
            portabilidade ou exclusão dos seus dados, além de revogar
            consentimentos. Para exercer esses direitos, fale com a nossa
            equipe pelo canal indicado abaixo.
          </p>
        </section>

        <section>
          <h2>7. Retenção e segurança</h2>
          <p>
            Mantemos os dados apenas pelo tempo necessário às finalidades
            descritas ou às obrigações legais, e adotamos medidas técnicas e
            organizacionais razoáveis para protegê-los contra acessos não
            autorizados, perda ou alteração.
          </p>
        </section>

        <section>
          <h2>8. Contato</h2>
          <p>
            Para dúvidas ou solicitações sobre privacidade e dados pessoais,
            fale com a nossa equipe pelo{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mid underline underline-offset-4"
            >
              WhatsApp oficial
            </a>
            .
          </p>
        </section>

        <section>
          <h2>9. Atualizações</h2>
          <p>
            Esta Política pode ser atualizada a qualquer momento. A versão
            vigente estará sempre disponível nesta página, com a data da última
            atualização.
          </p>
        </section>
      </LegalPage>
    </>
  );
}
