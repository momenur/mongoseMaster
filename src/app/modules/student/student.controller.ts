import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import StudentValidationSchema from './student.validation';
// import StudentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // data validation using zod

    const zodParsedData = StudentValidationSchema.parse(studentData);

    const result = await StudentServices.createStudentIntoDB(zodParsedData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Student is not Created successfully',
    //     error,
    //   });
    // }

    res.status(200).json({
      success: true,
      message: 'Student is Created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Student is not Created successfully',
      error: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
