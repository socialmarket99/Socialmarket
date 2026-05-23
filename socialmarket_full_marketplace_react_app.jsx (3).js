// SOCIALMARKET FULL MARKETPLACE APP
// Firebase backend ready structure added
// Features:
// - Login/Register UI
// - Listing upload system
// - Seller dashboard
// - Boost ads section
// - Marketplace homepage
// - Firebase ready structure
//
// INSTALL:
// npm install firebase react-router-dom
//
// FIREBASE SETUP:
// Create Firebase project from https://firebase.google.com
// Enable Authentication, Firestore Database, and Storage.
// Replace the config below with your Firebase credentials.

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

export default function SocialMarketApp() {
  const listings = [
    {
      id: 1,
      title: 'YouTube Gaming Channel',
      followers: '120K Subscribers',
      price: '$850',
      category: 'YouTube',
      status: 'Featured',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'TikTok Viral Page',
      followers: '80K Followers',
      price: '$420',
      category: 'TikTok',
      status: 'Hot',
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Instagram Travel Account',
      followers: '55K Followers',
      price: '$300',
      category: 'Instagram',
      status: 'Verified',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800 sticky top-0 bg-black z-50">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="SocialMarket Logo"
            className="w-12 h-12 rounded-2xl"
          />
          <div>
            <h1 className="text-3xl font-bold text-blue-500">SocialMarket</h1>
            <p className="text-xs text-gray-500">Digital Marketplace</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-gray-300">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#listings" className="hover:text-blue-400">Listings</a>
          <a href="#pricing" className="hover:text-blue-400">Pricing</a>
          <a href="#dashboard" className="hover:text-blue-400">Dashboard</a>
        </div>

        <div className="flex gap-4">
          <button className="bg-gray-800 px-4 py-2 rounded-xl hover:bg-gray-700">
            Login
          </button>
          <button className="bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-500">
            Sell Account
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-gray-950 to-black">
        <h2 className="text-6xl font-extrabold mb-6 leading-tight">
          Buy & Sell <span className="text-blue-500">Digital Assets</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
          SocialMarket is a secure marketplace for YouTube channels, TikTok pages,
          Instagram accounts, Facebook pages, and online businesses.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-600 px-8 py-4 rounded-2xl text-lg hover:bg-blue-500 shadow-lg shadow-blue-500/30">
            Browse Accounts
          </button>

          <button className="bg-gray-800 px-8 py-4 rounded-2xl text-lg hover:bg-gray-700">
            Start Selling
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 py-14">
        <div className="bg-gray-900 rounded-3xl p-6 text-center border border-gray-800">
          <h3 className="text-4xl font-bold text-blue-500">10K+</h3>
          <p className="text-gray-400 mt-2">Users</p>
        </div>

        <div className="bg-gray-900 rounded-3xl p-6 text-center border border-gray-800">
          <h3 className="text-4xl font-bold text-blue-500">3K+</h3>
          <p className="text-gray-400 mt-2">Listings</p>
        </div>

        <div className="bg-gray-900 rounded-3xl p-6 text-center border border-gray-800">
          <h3 className="text-4xl font-bold text-blue-500">$50K+</h3>
          <p className="text-gray-400 mt-2">Transactions</p>
        </div>

        <div className="bg-gray-900 rounded-3xl p-6 text-center border border-gray-800">
          <h3 className="text-4xl font-bold text-blue-500">99%</h3>
          <p className="text-gray-400 mt-2">Trusted Sellers</p>
        </div>
      </section>

      {/* Search + Categories */}
      <section className="px-8 py-10">
        <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800 flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Search accounts, pages, channels..."
            className="bg-black border border-gray-700 rounded-2xl px-5 py-4 w-full md:w-96"
          />

          <div className="flex flex-wrap gap-3">
            <button className="bg-blue-600 px-5 py-3 rounded-xl">YouTube</button>
            <button className="bg-gray-800 px-5 py-3 rounded-xl">TikTok</button>
            <button className="bg-gray-800 px-5 py-3 rounded-xl">Instagram</button>
            <button className="bg-gray-800 px-5 py-3 rounded-xl">Facebook</button>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section id="listings" className="px-8 py-16">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <h2 className="text-4xl font-bold">Featured Listings</h2>

          <button className="bg-blue-600 px-6 py-3 rounded-2xl hover:bg-blue-500">
            Post New Listing
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listings.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:scale-105 transition duration-300 shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="bg-blue-600 text-sm px-3 py-1 rounded-full">
                    {item.category}
                  </span>

                  <span className="text-xs bg-green-600 px-3 py-1 rounded-full">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mt-5">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.followers}</p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-3xl font-bold text-green-400">
                    {item.price}
                  </span>

                  <button className="bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-500">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seller Dashboard */}
      <section id="dashboard" className="px-8 py-16 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-12">Seller Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Total Earnings</h3>
            <p className="text-5xl font-bold text-green-400">$12,540</p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Active Listings</h3>
            <p className="text-5xl font-bold text-blue-400">24</p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Messages</h3>
            <p className="text-5xl font-bold text-yellow-400">18</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-14">Boost & Ads Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 text-center">
            <h3 className="text-2xl font-bold">Starter</h3>
            <p className="text-gray-400 mt-3">Basic Listing</p>
            <p className="text-5xl font-bold mt-6 text-blue-500">$5</p>
            <button className="mt-8 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500 w-full">
              Choose Plan
            </button>
          </div>

          <div className="bg-blue-600 rounded-3xl p-8 text-center shadow-2xl shadow-blue-500/20 scale-105">
            <h3 className="text-2xl font-bold">Premium</h3>
            <p className="mt-3">Featured Top Ad</p>
            <p className="text-5xl font-bold mt-6">$25</p>
            <button className="mt-8 bg-black px-6 py-3 rounded-xl hover:bg-gray-900 w-full">
              Best Value
            </button>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 text-center">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="text-gray-400 mt-3">Unlimited Promotions</p>
            <p className="text-5xl font-bold mt-6 text-blue-500">$99</p>
            <button className="mt-8 bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500 w-full">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-16 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-12">Marketplace Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Secure Payments</h3>
            <p className="text-gray-400">Integrated escrow payment protection system.</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Admin Approval</h3>
            <p className="text-gray-400">Listings are reviewed before going live.</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Real-time Chat</h3>
            <p className="text-gray-400">Buyers and sellers can communicate instantly.</p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Boost Ads</h3>
            <p className="text-gray-400">Promote listings to the homepage top section.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-10 py-10 text-center text-gray-500">
        <h2 className="text-2xl font-bold text-blue-500 mb-3">SocialMarket</h2>
        <p>Buy & Sell Digital Assets Securely</p>
        <p className="mt-3">© 2026 SocialMarket. All rights reserved.</p>
      </footer>
    </div>
  );
}
