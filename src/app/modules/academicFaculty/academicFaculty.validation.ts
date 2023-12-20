import { z } from 'zod';

const academicValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Academic Faculty Must be String type',
  }),
});

export const UserValidation = {
  academicValidationSchema,
};
