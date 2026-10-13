import { permanentRedirect } from 'next/navigation';

export default function BestTimeToVisitPage({ params }: { params: { slug: string } }) {
  permanentRedirect(`/destinations/${params.slug}`);
}
