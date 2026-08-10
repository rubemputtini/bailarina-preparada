import { PageHead } from "@/components/PageHead";
import { LegalPage } from "@/components/LegalPage";
import { WHATSAPP_URL } from "@/constants/urls";

// TODO: preencher razão social/CNPJ e e-mail de contato oficiais.

export default function TermosPage() {
  return (
    <>
      <PageHead
        title="Termos de Uso — Bailarina Preparada"
        description="Termos de uso do site e dos serviços da Bailarina Preparada."
        path="/termos"
      />
      <LegalPage title="Termos de Uso" updated="04 de agosto de 2026">
        <section>
          <h2>1. Aceitação</h2>
          <p>
            Ao acessar este site e utilizar os serviços da Bailarina Preparada,
            você concorda com estes Termos de Uso. Se não concordar com alguma
            condição, recomendamos que não utilize o site ou os serviços.
          </p>
        </section>

        <section>
          <h2>2. Sobre os serviços</h2>
          <p>
            A Bailarina Preparada oferece serviços de preparação física
            voltados a bailarinas, incluindo o Clube Bailarina Preparada
            (assinatura), consultoria online, aulas particulares, treinamentos
            avulsos, formação profissional e workshops. Este site tem caráter
            informativo e de apresentação dos serviços; a contratação é
            concluída pelos canais indicados em cada página, como o WhatsApp
            oficial e a plataforma Hotmart.
          </p>
        </section>

        <section>
          <h2>3. Contratação, pagamentos e cancelamento</h2>
          <p>
            Os pagamentos do Clube Bailarina Preparada são processados pela
            plataforma Hotmart, que possui termos e políticas próprios. O Clube
            oferece garantia incondicional de 7 dias a partir da compra, com
            reembolso integral mediante solicitação. Os demais serviços são
            contratados diretamente com a nossa equipe, com condições
            (valores, agenda e duração) combinadas no momento da contratação.
          </p>
        </section>

        <section>
          <h2>4. Saúde e segurança</h2>
          <p>
            Os treinos e orientações têm finalidade de condicionamento físico e
            não substituem avaliação, diagnóstico ou tratamento médico. Antes
            de iniciar qualquer programa de exercícios, consulte um médico —
            especialmente em caso de lesão, gestação ou condição de saúde
            preexistente. Ao praticar os treinos, você declara estar apta à
            atividade física e assume a responsabilidade de respeitar os
            limites do seu corpo.
          </p>
        </section>

        <section>
          <h2>5. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo produzido pela Bailarina Preparada — marca, textos,
            fotos, vídeos, treinos, materiais didáticos e metodologia — é
            protegido por direitos autorais e de propriedade industrial. É
            proibida a reprodução, distribuição, compartilhamento de acesso ou
            uso comercial sem autorização prévia e expressa.
          </p>
        </section>

        <section>
          <h2>6. Uso adequado</h2>
          <p>Ao utilizar o site e os serviços, você se compromete a:</p>
          <ul>
            <li>fornecer informações verdadeiras ao entrar em contato ou contratar;</li>
            <li>não compartilhar logins, conteúdos ou materiais de acesso restrito;</li>
            <li>não utilizar o site para fins ilícitos ou que prejudiquem terceiros.</li>
          </ul>
        </section>

        <section>
          <h2>7. Serviços de terceiros</h2>
          <p>
            O site contém links e integrações com serviços de terceiros — como
            Hotmart, WhatsApp, YouTube, Instagram e Google Meet — que possuem
            termos e políticas próprios, pelos quais a Bailarina Preparada não
            se responsabiliza.
          </p>
        </section>

        <section>
          <h2>8. Alterações</h2>
          <p>
            Estes Termos podem ser atualizados a qualquer momento para refletir
            mudanças nos serviços ou na legislação. A versão vigente estará
            sempre disponível nesta página, com a data da última atualização.
          </p>
        </section>

        <section>
          <h2>9. Contato e legislação</h2>
          <p>
            Em caso de dúvidas sobre estes Termos, fale com a nossa equipe pelo{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mid underline underline-offset-4"
            >
              WhatsApp oficial
            </a>
            . Estes Termos são regidos pelas leis da República Federativa do
            Brasil.
          </p>
        </section>
      </LegalPage>
    </>
  );
}
