import { loginSchema } from '../validations';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RiLockLine } from 'react-icons/ri';
import { useUserStore } from 'shared/store';

export function Login() {
  const { handleSubmit, register, formState } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const login = useUserStore(state => state.login);

  const handleLogin = data => {
    const validated = loginSchema.safeParse(data);
    if (validated.success) login(validated.data);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-11 px-6 py-9 sm:px-12">
      <RiLockLine className="h-16 w-16 text-cyan-500 sm:h-24 sm:w-24" />
      <h1 className="text-center text-4xl font-extrabold text-slate-500 sm:text-6xl">Login</h1>
      <div className="mx-auto w-full max-w-xl rounded-md border-[#ebeef2] bg-white px-6 py-8 shadow-[0_1px_3px_rgba(96,108,128,0.05)]">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4">
            <label htmlFor="title" className="mb-2 flex flex-col">
              <span className="mb-2 font-bold text-slate-500">Email</span>
              <input
                type="text"
                id="email"
                className="w-full rounded-sm bg-gray-100 px-4 py-2 font-medium text-slate-500 outline-none"
                {...register('email')}
              />
            </label>
            {formState.errors?.email?.message && (
              <p className="text-sm font-semibold text-red-500">{formState.errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="mb-2 flex flex-col">
              <span className="mb-2 font-bold text-slate-500">Password</span>
              <input
                type="password"
                id="password"
                className="w-full rounded-sm bg-gray-100 px-4 py-2 font-medium text-slate-500 outline-none"
                {...register('password')}
              />
            </label>
            {formState.errors?.password?.message && (
              <p className="text-sm font-semibold text-red-500">
                {formState.errors.password.message}
              </p>
            )}
          </div>
          <div className="mt-8 flex sm:justify-end">
            <button
              type="submit"
              className="w-full cursor-pointer rounded-sm bg-cyan-500 px-6 py-2 font-bold text-white sm:w-auto"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
