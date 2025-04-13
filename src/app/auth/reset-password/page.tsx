import { Suspense } from 'react';
import ResetPasswordForm from './ResetPasswordForm';

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading reset form...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}
