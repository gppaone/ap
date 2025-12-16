<script>
    // This imports the global CSS file which includes Tailwind's styles
    import '../app.css';
    import '@fortawesome/fontawesome-free/css/all.min.css';
    import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
    import { base } from '$app/paths';
  </script>
  
  <header class="flex bg-gray-800 text-white p-4 shadow-lg">
    <h1>AP Provision App</h1>
    <nav class="flex space-x-6 mx-10">
      <a href="{base}/" class="hover:text-cyan-400 transition duration-150">Dashboard</a>
      <a href="{base}/project-view" class="hover:text-cyan-400 transition duration-150">Project View</a>
      <a href="{base}/new-project" class="hover:text-cyan-400 transition duration-150">New Project</a>
    </nav>
  </header>
  
  <main class="px-5 py-5 items-center justify-center">
    <slot />
  </main>
