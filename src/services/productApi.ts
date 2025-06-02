import api from '@utils/api';

// TypeScript interfaces for request/response shapes:

export interface Product {
  id: string;
  name: string;
  price: number;
  // …any other fields
}

export interface CreateProductPayload {
  name: string;
  price: number;
  // …fields needed when you POST a new product
}

// Export functions that call the .NET endpoints:

/** GET /products */
export async function getAllProducts(): Promise<Product[]> {
  const response = await api.get<Product[]>('/products');
  return response.data;
}

/** GET /products/{id} */
export async function getProductById(id: string): Promise<Product> {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data;
}

/** POST /products */
export async function createProduct(
  payload: CreateProductPayload
): Promise<Product> {
  const response = await api.post<Product>('/products', payload);
  return response.data;
}

/** PUT /products/{id} */
export async function updateProduct(
  id: string,
  payload: Partial<CreateProductPayload>
): Promise<Product> {
  const response = await api.put<Product>(`/products/${id}`, payload);
  return response.data;
}

/** DELETE /products/{id} */
export async function deleteProduct(id: string): Promise<void> {
  await api.delete(`/products/${id}`);
}
