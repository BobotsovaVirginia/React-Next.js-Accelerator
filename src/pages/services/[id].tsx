import { getServiceById, Service } from '@services/serviceApi';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';


interface Props {
  service: Service | null;
}

const ServiceDetailPage: NextPage<Props> = ({ service }) => {
  const router = useRouter();
  if (!service) return <p className="p-4">Service not found.</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Service Detail</h1>
      <p><strong>ID:</strong> {service.id}</p>
      <p><strong>Name:</strong> {service.name}</p>
      <button
        className="text-blue-600 underline"
        onClick={() => router.back()}
      >
        ← Back
      </button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;
  try {
    const customer = await getServiceById(id);
    return { props: { customer } };
  } catch (err) {
    console.error('Error fetching service:', err);
    return { props: { customer: null } };
  }
};

export default ServiceDetailPage;
