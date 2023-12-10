import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

// find Last student id
const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    { role: 'student' },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({ createdAt: -1 })
    .lean();
  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

// Year semesterCode 4 digit Number
export const generateStudentId = async (payLoad: TAcademicSemester) => {
  // At the First Time
  const currentId = (await findLastStudentId()) || (0).toString();
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;
  return incrementId;
};
