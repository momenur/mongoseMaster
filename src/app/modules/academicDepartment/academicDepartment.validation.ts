import { z } from 'zod';

const createAcademicValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Faculty Must be String type',
    }),
  }),
});

const updateAcademicValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Faculty Must be String type',
    }),
  }),
});

export const AcademicFacultyValidation = {
  createAcademicValidationSchema,
  updateAcademicValidationSchema,
};
