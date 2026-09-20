import coreWebVitals from 'eslint-config-next/core-web-vitals';

/**
 * ESLint 9 flat config.
 *
 * The project previously carried a legacy .eslintrc.json, which ESLint 9
 * ignores — so `npm run lint` could not run at all. eslint-config-next v16
 * ships a native flat config, so it is consumed directly here.
 */
export default [
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },
  ...coreWebVitals,
];
