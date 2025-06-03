import type { NextPage } from 'next';
import Link from 'next/link';
import SampleCard from '@components/SampleCard/SampleCard';
import { useAuth } from '@hooks/useAuth';
import { useAppContext } from '@context/AppContext';
import PrimaryButton from '@components/Button/Button';
import { useEffect, useState } from 'react';
import { getAllServices, Service } from '@services/serviceApi';

const Home: NextPage = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const { user, setUser } = useAppContext();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getAllServices()
      .then((data) => setServices(data))
      .catch((err) => {
        console.error(err);
        setError('Failed to load services');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleMockLogin = () => setUser({ id: '1', name: 'Jane Doe' });
  const handleMockLogout = () => setUser(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-4 space-y-6">
      <h1 className="text-3xl font-bold">Welcome to the Accelerator!</h1>

      {/* Azure AD Auth */}
      {isAuthenticated ? (
        <div className="space-x-2">
          <span className="text-green-600">Authenticated via Azure AD</span>
          <PrimaryButton label="Logout" onClick={logout} />
        </div>
      ) : (
        <div className="space-x-2">
          <span className="text-red-600">Not authenticated</span>
          <PrimaryButton label="Login with Azure AD" onClick={login} />
        </div>
      )}

      {/* Mock App-level user */}
      <div className="space-x-2">
        {user ? (
          <>
            <span>Mock user: {user.name}</span>
            <PrimaryButton label="Mock Logout" onClick={handleMockLogout} />
          </>
        ) : (
          <PrimaryButton label="Mock Login" onClick={handleMockLogin} />
        )}
      </div>

      {/* Navigation Links */}
      <div className="space-x-4">
        <Link href="/services" className="text-blue-600 underline">
          Go to Services (Server-side)
        </Link>
        <Link href="/products" className="text-blue-600 underline">
          Go to Products (Server-side)
        </Link>
      </div>

      {/* Client‐side fetch of services */}
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-2">Services (Client-side)</h2>
        {loading && <p>Loading customers…</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && (
          <ul className="space-y-2">
            {services.map((c) => (
              <li
                key={c.id}
                className="border rounded p-2 flex justify-between items-center"
              >
                <div>
                  <strong>{c.name}</strong>
                </div>
                <Link href={`/services/${c.id}`} className="text-blue-600 underline">
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Static sample card component */}
      {user && <SampleCard title="Hello World" description="This is a sample card." />}
    </div>
  );
};

export default Home;
