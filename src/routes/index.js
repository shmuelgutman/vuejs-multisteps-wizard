/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  {
    path: '/',
    redirect: '/onboarding',
  },
  {
    path: '/onboarding',
    name: 'onboarding',
    component: () => import('@/pages/Onboarding/Index'),
    children: [
      {
        path: 'step1',
        name: 'onboarding.step1',
        component: () => import('@/pages/Onboarding/Step1'),
      },
      {
        path: 'step2',
        name: 'onboarding.step2',
        component: () => import('@/pages/Onboarding/Step2'),
      },
      {
        path: 'step3',
        name: 'onboarding.step3',
        component: () => import('@/pages/Onboarding/Step3'),
      },
    ],
  },
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/pages/Home/Index'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Account
  {
    path: '/account',
    name: 'account.index',
    component: () => import('@/pages/Account/Index'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: () => import('@/pages/Login/Index'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: () => import('@/pages/Register/Index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
