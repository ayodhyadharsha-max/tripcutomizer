import { permanentRedirect } from 'next/navigation';

export default function HowToReachPage({ params }: { params: { slug: string } }) {
  permanentRedirect(`/destinations/${params.slug}`);
}
