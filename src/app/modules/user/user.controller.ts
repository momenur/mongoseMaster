import { UserService } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;

    // data validation using zod

    //   const zodParsedData = StudentValidationSchema.parse(studentData);

    const result = await UserService.createStudentIntoDB(password, studentData);

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
