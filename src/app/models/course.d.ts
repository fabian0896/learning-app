export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Country {
  name: string;
  nat: string;
  flags: Flags;
}

export interface Teacher {
  id: number;
  name: string;
  picture: Picture;
  email: string;
  country: Country;
  nat: string;
  age: number;
}

export interface Content {
  title: string;
  description: string;
  lessons: number[];
}

export interface Course {
  id: number;
  title: string;
  banner: string;
  description: string;
  level: string;
  teacher: Teacher;
  content: Content[];
  score: number;
  limit_date: string;
  created_at: string;
  students: number;
  category: string;
}

export interface CoursesResponse {
  page: number;
  results: Course[];
  totalPages: number;
  next: number;
}
