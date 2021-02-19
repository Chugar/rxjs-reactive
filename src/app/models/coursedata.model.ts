import { Book } from './book.model';
import { Course } from './course.model';


export interface CourseData {
  course: Course;
  books: Book[];
}
