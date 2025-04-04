// pages/JobDetails.tsx
import { useParams } from 'react-router-dom';
import { useJobStore } from '../store/jobStore';
import { useThemeStore } from '../store/themeStore';

export default function JobDetails() {
  const { id } = useParams();
  const { getJobById, companies } = useJobStore();
  const { darkMode } = useThemeStore();
  const job = getJobById(id!);
  const company = companies.find(c => c.id === job?.companyId);

  if (!job) {
    return <div className="text-center py-10 text-xl text-gray-500">Job not found</div>;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 border border-blue-300 dark:border-gray-700 backdrop-blur-md">
            <div className="flex items-center gap-5 mb-8">
              {company?.logo && (
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                />
              )}
              <div>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{job.title}</h1>
                <p className="text-lg text-gray-500 dark:text-gray-300">{company?.name}</p>
                <p className="text-sm text-gray-400">{company?.location}</p>
              </div>
            </div>

            {company?.description && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">About the Company</h2>
                <p className="text-gray-600 dark:text-gray-300">{company.description}</p>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Salary</h2>
              <p className="text-gray-600 dark:text-gray-300">{job.salary}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Job Description</h2>
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{job.description}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Requirements</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Work Mode</h2>
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded">
                {job.isRemote ? 'Remote' : 'On-site'}
              </span>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">Posted At</h2>
              <p className="text-gray-600 dark:text-gray-300">
                {new Date(job.postedAt).toLocaleDateString()}
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 shadow-md">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
