import { permanentRedirect } from 'next/navigation';

export default function PlacesToVisitPage({ params }: { params: { slug: string } }) {
  permanentRedirect(`/destinations/${params.slug}`);
}
