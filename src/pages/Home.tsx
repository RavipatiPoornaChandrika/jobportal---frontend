// pages/Home.tsx

import { useNavigate } from 'react-router-dom';
import { useJobStore } from '../store/jobStore';
import { useThemeStore } from '../store/themeStore';
import CompanyList from '../components/CompanyList';
import { Company } from '../types/types'; // ✅ Add this import

const Home = () => {
  const { jobs, companies } = useJobStore();
  const { darkMode } = useThemeStore();
  const navigate = useNavigate();

  // 🔽 List of company IDs to show in Top Companies
  const topCompanyIds = ['1', '2', '7','8','10']; // Replace with actual company IDs you want to display
  const topCompanies: Company[] = companies.filter((c) => topCompanyIds.includes(c.id));

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white py-20 text-center shadow-md">
          <h1 className="text-4xl font-extrabold mb-4">Find Your Dream Role</h1>
          <p className="text-lg">Explore top career opportunities curated just for you</p>
        </div>

        {/* Job Cards */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Career Opportunities</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {jobs.map(job => {
              const company = companies.find(c => c.id === job.companyId);

              return (
                <div
                  key={job.id}
                  className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{job.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{company?.name}</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">{job.location}</p>
                  <button
                    onClick={() => navigate(`/jobs/${job.id}`)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Explore Role
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Companies Section */}
        <div className="container mx-auto px-4 pb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Top Companies</h2>
          <CompanyList companies={topCompanies} /> {/* ✅ Pass only top companies */}
        </div>
      </div>
    </div>
  );
};

export default Home;
