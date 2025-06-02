import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { getAllServices, Service } from '@services/serviceApi';

interface Props {
  services: Service[];
}

const ServicesPage: NextPage<Props> = ({ services }) => {
  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Services (Server-side)</h1>
      <ul className="space-y-2">
        {services.map((c) => (
          <li
            key={c.id}
            className="border rounded p-2 flex justify-between items-center"
          >
            <div>
              <strong>{c.name}</strong> ({c.email})
            </div>
            <Link href={`/services/${c.id}`} className="text-blue-600 underline">
              View Details
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="text-blue-600 underline">
        ← Back to Home
      </Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const services = await getAllServices();
    return { props: { services } };
  } catch (err) {
    console.error('Error fetching services:', err);
    return { props: { services: [] } };
  }
};

export default ServicesPage;
