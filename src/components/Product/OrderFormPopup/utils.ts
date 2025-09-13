import type { OrderFormData, PreparedFormData, Product } from './types';

export const cleanPhoneNumber = (phone?: string): string | undefined => {
  return phone ? phone.replace(/\s/g, '') : phone;
};

export const prepareFormData = (data: OrderFormData, product?: Product): PreparedFormData => ({
  ...data,
  phone: cleanPhoneNumber(data.phone),
  productId: product?.id,
  productTitle: product?.title,
});

export const submitOrderForm = async (
  data: PreparedFormData,
  apiEndpoint: string
): Promise<Response> => {
  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'Failed to submit order');
  }

  return response;
};
