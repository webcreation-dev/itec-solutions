// Declare module for Bootstrap JS to avoid TypeScript errors
declare module "bootstrap/dist/js/bootstrap.bundle.min";

// Globals exposed by client-side dynamic imports for the throwable physics plugin.
interface Window {
  gsap: typeof import("gsap").gsap;
  Matter: typeof import("matter-js");
}
// Type declarations for side-effect style imports (CSS/SCSS) used by external libraries
// This prevents TypeScript errors when importing styles like Atropos, Swiper, and global SCSS files
declare module 'atropos/css';
declare module "swiper/css/bundle";
declare module "*.scss";