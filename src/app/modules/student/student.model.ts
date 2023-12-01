import { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const UserNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is Required'],
    trim: true,
    // validate: {
    //   validator: function (value: string) {
    //     const firstNameStr =
    //       value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    //     console.log(firstNameStr);
    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is not in capitalize Formate',
    // },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is Required'],
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: 'Last Name {VALUE} is not valid',
    // },
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: UserNameSchema,
    required: [true, 'Name Filed Is Required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message:
        "The Gender field can only be one of the following 'male', 'female' or 'other'.",
    },
    required: true,
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is Not valid Email',
    },
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A', 'B', 'AB', 'O'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

// Creating Model
export const StudentModel = model<Student>('Student', studentSchema);
// end the section
