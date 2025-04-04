// src/components/CompanyList.tsx
import React from 'react';
import { Company } from '../types/types'; // ✅ Correct path to the type
 // adjust if needed

 type CompanyListProps = {
    companies: Company[];
  };
  
  const CompanyList: React.FC<CompanyListProps> = ({ companies }) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
        {companies.map((company) => (
          <div key={company.id} style={{ textAlign: 'center' }}>
            <img
              src={company.logo}
              alt={`${company.name} Logo`}
              style={{ width: '100px', height: '100px', objectFit: 'contain' }}
            />
            <h3>{company.name}</h3>
            <p>{company.location}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default CompanyList;
  
