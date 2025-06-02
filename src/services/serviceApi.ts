// src/services/serviceApi.ts
// --------------------------------
// This is a temporary mock implementation.
// Once your .NET API is running at [BASE_URL]/services, you can revert
// to the Axios‐based code (commented out at the bottom).

export interface Service {
  id: string;
  name: string;
}

export interface CreateServicePayload {
  name: string;
}

/** 
 * Mock version: Immediately resolves with an array of sample services.
 * Remove this mock block once your real API is up.
 */
export async function getAllServices(): Promise<Service[]> {
  return Promise.resolve([
    { id: '1', name: 'Alpha Service' },
    { id: '2', name: 'Beta Service' }
  ]);
}

export async function getServiceById(id: string): Promise<Service> {
  // In a real API, this would call `/services/${id}`. For now, return a mock.
  return Promise.resolve({ id, name: `Service ${id}` });
}

export async function createService(
  payload: CreateServicePayload
): Promise<Service> {
  // Mock “create” by echoing back the payload as if the server accepted it.
  return Promise.resolve({ id: 'new', name: payload.name });
}

export async function updateService(
  id: string,
  payload: Partial<CreateServicePayload>
): Promise<Service> {
  // Mock “update” by returning the patched object
  return Promise.resolve({ id, 
    name: payload.name ?? `Service ${id}`, 
  });
}

export async function deleteService(id: string): Promise<void> {
  // Mock “delete” by doing nothing
  return Promise.resolve();
}

// -------------- REAL API (comment out the mock above and uncomment below once your backend is ready) --------------
// import api from '@utils/api';
//
// export async function getAllServices(): Promise<Service[]> {
//   const response = await api.get<Service[]>('/services');
//   return response.data;
// }
//
// export async function getServiceById(id: string): Promise<Service> {
//   const response = await api.get<Service>(`/services/${id}`);
//   return response.data;
// }
//
// export async function createService(
//   payload: CreateServicePayload
// ): Promise<Service> {
//   const response = await api.post<Service>('/services', payload);
//   return response.data;
// }
//
// export async function updateService(
//   id: string,
//   payload: Partial<CreateServicePayload>
// ): Promise<Service> {
//   const response = await api.put<Service>(`/services/${id}`, payload);
//   return response.data;
// }
//
// export async function deleteService(id: string): Promise<void> {
//   await api.delete(`/services/${id}`);
// }
