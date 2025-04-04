// store/jobStore.ts
import { create } from 'zustand';
import { Job, Company } from '../types/types';

// Mock Companies
const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TCS',
    description: 'A global leader in IT services and consulting',
    logo: '/assets/logos/tcs.png',
    location: 'Mumbai',
    industry: 'Information Technology'
  },
  {
    id: '2',
    name: 'Infosys',
    description: 'Innovative digital services and consulting firm',
    logo: '/assets/logos/infosys.jpg',
    location: 'Bangalore',
    industry: 'IT Consulting'
  },
  {
    id: '3',
    name: 'Wipro',
    description: 'Transforming businesses through technology',
    logo: '/assets/logos/wipro.jpg',
    location: 'Hyderabad',
    industry: 'Technology Services'
  },
  {
    id: '4',
    name: 'Zoho',
    description: 'Builds powerful software for businesses',
    logo: '/assets/logos/zoho.jpg',
    location: 'Chennai',
    industry: 'Software Development'
  },
  {
    id: '5',
    name: 'Mu Sigma',
    description: 'Analytics and decision sciences company',
    logo: '/assets/logos/musigma.jpg',
    location: 'Bangalore',
    industry: 'Data Analytics'
  },
  {
    id: '6',
    name: 'Freshworks',
    description: 'Customer engagement software company',
    logo: '/assets/logos/freshworks.jpg',
    location: 'Chennai',
    industry: 'SaaS'
  },
  {
    id: '7',
    name: 'Mindtree',
    description: 'Digital transformation and technology services',
    logo: '/assets/logos/mindtree.jpg',
    location: 'Pune',
    industry: 'IT Services'
  },
  {
    id: '8',
    name: 'Capgemini India',
    description: 'Consulting, digital transformation and technology services',
    logo: '/assets/logos/capgemini.jpg',
    location: 'Kolkata',
    industry: 'Consulting'
  },
  {
    id: '9',
    name: 'Cognizant',
    description: 'Modernizing business operations with IT solutions',
    logo: '/assets/logos/cognizant.jpg',
    location: 'Coimbatore',
    industry: 'Technology & Services'
  },
  {
    id: '10',
    name: 'HCLTech',
    description: 'Global tech company helping enterprises reimagine their businesses',
    logo: '/assets/logos/hcl.jpg',
    location: 'Noida',
    industry: 'Enterprise IT'
  }
];

// Mock Jobs
const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer (Angular)',
    company: '',
    location: 'Bengaluru',
    salary: '₹10,00,000 - ₹14,00,000',
    description: 'Develop dynamic and responsive web interfaces using Angular and TypeScript.',
    requirements: ['2+ years Angular experience', 'HTML, CSS, JS proficiency', 'RxJS', 'RESTful APIs'],
    postedAt: '2025-04-03',
    isRemote: true,
    companyId: '2'
  },
  {
    id: '2',
    title: 'Java Backend Developer',
    company: '',
    location: 'Hyderabad',
    salary: '₹8,50,000 - ₹12,00,000',
    description: 'Build scalable backend applications using Spring Boot and Java.',
    requirements: ['Java, Spring Boot', 'REST APIs', 'MySQL/PostgreSQL', 'Microservices'],
    postedAt: '2025-04-02',
    isRemote: false,
    companyId: '1'
  },
  {
    id: '3',
    title: 'Cloud DevOps Engineer',
    company: '',
    location: 'Pune',
    salary: '₹12,00,000 - ₹16,00,000',
    description: 'Manage and automate CI/CD pipelines using AWS and Docker.',
    requirements: ['AWS', 'Docker/Kubernetes', 'Terraform', 'CI/CD tools'],
    postedAt: '2025-04-01',
    isRemote: true,
    companyId: '3'
  },
  {
    id: '4',
    title: 'UI/UX Designer',
    company: '',
    location: 'Chennai',
    salary: '₹6,00,000 - ₹9,00,000',
    description: 'Design intuitive interfaces and contribute to user-centered product design.',
    requirements: ['Figma', 'Adobe XD', 'User Research', 'Design Systems'],
    postedAt: '2025-03-30',
    isRemote: false,
    companyId: '4'
  },
  {
    id: '5',
    title: 'Machine Learning Engineer',
    company: '',
    location: 'Bengaluru',
    salary: '₹15,00,000 - ₹20,00,000',
    description: 'Build and deploy ML models for high-scale applications.',
    requirements: ['Python', 'TensorFlow/PyTorch', 'Pandas/NumPy', 'Cloud ML tools'],
    postedAt: '2025-03-28',
    isRemote: true,
    companyId: '5'
  },
  {
    id: '6',
    title: 'Mobile App Developer (Flutter)',
    company: '',
    location: 'Chennai',
    salary: '₹9,00,000 - ₹13,00,000',
    description: 'Build beautiful and fast mobile apps using Flutter.',
    requirements: ['Flutter/Dart', 'Cross-platform Development', 'Mobile UI/UX', 'State Management'],
    postedAt: '2025-03-25',
    isRemote: true,
    companyId: '6'
  },
  {
    id: '7',
    title: 'Full Stack Developer (MERN)',
    company: '',
    location: 'Kochi',
    salary: '₹10,00,000 - ₹14,00,000',
    description: 'Develop full-stack solutions using MongoDB, Express, React, and Node.js.',
    requirements: ['MERN Stack', 'REST APIs', 'Authentication (JWT/OAuth)', 'Git'],
    postedAt: '2025-03-20',
    isRemote: false,
    companyId: '9'
  },
  {
    id: '8',
    title: 'QA Engineer (Automation)',
    company: '',
    location: 'Noida',
    salary: '₹7,00,000 - ₹10,00,000',
    description: 'Create automation test scripts and improve test coverage.',
    requirements: ['Selenium', 'Java/Python', 'TestNG', 'CI/CD Testing'],
    postedAt: '2025-03-18',
    isRemote: false,
    companyId: '8'
  },
  {
    id: '9',
    title: 'Product Manager (Tech)',
    company: '',
    location: 'Noida',
    salary: '₹18,00,000 - ₹25,00,000',
    description: 'Drive product development for digital payments and fintech solutions.',
    requirements: ['Agile/Scrum', 'Product Roadmap', 'Wireframing Tools', 'A/B Testing'],
    postedAt: '2025-03-15',
    isRemote: true,
    companyId: '7'
  },
  {
    id: '10',
    title: 'Cybersecurity Analyst',
    company: '',
    location: 'Pune',
    salary: '₹11,00,000 - ₹15,00,000',
    description: 'Monitor and mitigate security threats across enterprise systems.',
    requirements: ['Network Security', 'Firewalls', 'SIEM', 'Vulnerability Assessment'],
    postedAt: '2025-03-12',
    isRemote: false,
    companyId: '10'
  }
];

// Job state and Zustand store
type JobState = {
  jobs: Job[];
  companies: Company[];
  addJob: (job: Omit<Job, 'id' | 'postedAt'>) => void;
  getJobById: (id: string) => Job | undefined;
  getCompanyJobs: (companyId: string) => Job[]; 
};

export const useJobStore = create<JobState>((set, get) => ({
  jobs: mockJobs.map(job => ({
    ...job,
    company: mockCompanies.find(c => c.id === job.companyId)?.name || 'Unknown'
  })),
  companies: mockCompanies,
  addJob: (job) => {
    const newJob = {
      ...job,
      id: Math.random().toString(36).substring(2, 9),
      postedAt: new Date().toISOString(),
      company: mockCompanies.find(c => c.id === job.companyId)?.name || 'Unknown'
    };
    set((state) => ({ jobs: [...state.jobs, newJob] }));
  },
  getJobById: (id) => get().jobs.find(job => job.id === id),
  getCompanyJobs: (companyId) => get().jobs.filter(job => job.companyId === companyId),
}));
