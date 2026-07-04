export interface ClubActivity {
  title: string;
  description: string;
  imageUrl: string;
}

export interface ClubAchievement {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

export interface Club {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  email?: string;
  aboutText?: string;
  activitiesText?: string;
  galleryImages?: string[];
  activities?: ClubActivity[];
  achievements?: ClubAchievement[];
}

