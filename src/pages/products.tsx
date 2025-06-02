import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { getAllProducts, Product } from '@services/productApi';

interface Props {
  products: Product[];
}

const ProductsPage: NextPage<Props> = ({ products }) => {
  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Products (Server-side)</h1>
      <ul className="space-y-2">
        {products.map((p) => (
          <li
            key={p.id}
            className="border rounded p-2 flex justify-between items-center"
          >
            <div>
              <strong>{p.name}</strong> — ${p.price.toFixed(2)}
            </div>
            <Link href={`/products/${p.id}`} className="text-blue-600 underline">
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
    const products = await getAllProducts();
    return { props: { products } };
  } catch (err) {
    console.error('Error fetching products:', err);
    return { props: { products: [] } };
  }
};

export default ProductsPage;
