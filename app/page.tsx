export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Customer Journey Form
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Welcome to the Arma Karma coding challenge.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm text-gray-700 dark:text-gray-200">
            <strong>Your task:</strong> Build a customer journey form that
            collects user information, submits to an API, and displays a success
            confirmation.
          </p>
        </div>
        <div className="space-y-2 text-gray-600 dark:text-gray-400">
          <p>✅ Check the README.md for full requirements</p>
          <p>✅ Start by building your form here in this page</p>
          <p>✅ Remember to validate and handle errors</p>
          <p>✅ Don&apos;t forget next level UI/UX</p>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            Good luck! Show us what you can do. 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
