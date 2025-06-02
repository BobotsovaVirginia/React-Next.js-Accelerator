import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { getProductById, Product } from '@services/productApi';

interface Props {
  product: Product | null;
}

const ProductDetailPage: NextPage<Props> = ({ product }) => {
  const router = useRouter();
  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Product Detail</h1>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
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
    const product = await getProductById(id);
    return { props: { product } };
  } catch (err) {
    console.error('Error fetching product:', err);
    return { props: { product: null } };
  }
};

export default ProductDetailPage;
