// Professor feature types
export interface Professor {
  id: string;
  name: string;
  email: string;
  abbreviation: string;
  department: string;
  location: string;
  achievements: string[];
  qualifications: string[];
  courses: string[];
}

export interface ProfessorsFilter {
  department: string;
  status: string;
}
