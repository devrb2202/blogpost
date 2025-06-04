export default defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser()

  if (!user.value) {
    return navigateTo('/login')
  }
 
})
// export default defineNuxtRouteMiddleware((to) => {
//   const user = useSupabaseUser()

//   // If user is not logged in and trying to access protected page
//   if (!user.value && to.path !== '/login') {
//     return navigateTo('/login')
//   }

//   // If user is logged in but trying to access login page
//   if (user.value && to.path === '/login') {
//     return navigateTo('/login/directory') // or your default protected route
//   }
// })


// export default defineNuxtRouteMiddleware((to) => {
//   const user = useSupabaseUser()
//   const protectedRoutes = ['/login/directory', '/login'] // Add all your protected routes
//   const publicRoutes = ['/login', '/'] // Add all public routes

//   // If user is logged in and tries to access login page
//   if (user.value && to.path === '/login') {
//     return navigateTo('/login/directory', { replace: true })
//   }

//   // If user is not logged in and tries to access protected route
//   if (!user.value && protectedRoutes.some(route => to.path.startsWith(route))) {
//     return navigateTo('/login', { replace: true })
//   }
// })