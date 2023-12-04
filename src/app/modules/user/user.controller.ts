import { RequestHandler } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await UserService.createStudentIntoDB(password, studentData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is Created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudent,
};
