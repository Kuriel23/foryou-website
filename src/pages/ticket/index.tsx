import { SEO } from '@components/atoms/SEO';
import { Ticket } from '@components/organisms/TicketCentral';
import { DefaultLayout } from '@components/templates/DefaultLayout';

export default function TicketPage(): JSX.Element {
  return (
    <>
      <SEO />
      <DefaultLayout>
        <Ticket />
      </DefaultLayout>
    </>
  );
}
