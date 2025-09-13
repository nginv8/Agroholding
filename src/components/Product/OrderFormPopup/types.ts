import type { FieldError, RegisterOptions } from 'react-hook-form';

export interface Product {
  title?: string;
  itemCode?: string | null;
  id?: string | number;
}

export interface OrderFormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  itemCode: string;
}

export interface OrderFormPopupProps {
  product?: Product;
  buttonClassName?: string;
  buttonSize?: 'sm' | 'lg' | 'default' | 'icon';
  buttonVariant?: 'default' | 'outline' | 'secondary' | 'destructive' | 'ghost' | 'link';
  triggerContent?: React.ReactNode;
}

export interface FormFieldProps {
  label: string;
  error?: FieldError;
  required?: boolean;
  children: React.ReactNode;
}

export interface SuccessMessageProps {
  message: string;
  onClose: () => void;
}

export interface FormActionsProps {
  onClose: () => void;
  isSubmitting: boolean;
}

export interface ErrorMessageProps {
  message: string;
}

export type SubmitStatus = 'error' | 'success' | null;

export interface FormValidationRules {
  name: RegisterOptions<OrderFormData, 'name'>;
  email: RegisterOptions<OrderFormData, 'email'>;
  phone: RegisterOptions<OrderFormData, 'phone'>;
}

export interface PreparedFormData extends OrderFormData {
  productId?: string | number;
  productTitle?: string;
}
