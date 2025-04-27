export default function NotFound() {
  return (
    <main className="h-full flex flex-col items-center justify-center  text-secondary-800 px-4 md:px-0">
      <h1 className="title-800 font-bold mb-4">404</h1>
      <p className="title-500 mb-6 font-semibold">Oops! Page not found.
</p>
      <p className="text-300 text-secondary-800 mb-8 text-center max-w-md">
      The page you are looking for does not exist or has been moved.
      Check the URL.
      </p>
    </main>
  );
}
