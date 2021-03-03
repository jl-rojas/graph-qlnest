import { createParamDecorator } from '@nestjs/common';
import { Response } from 'express';
import { UserEntity } from '../../users/users.entity';

export const ResGql = createParamDecorator(
  (data, [root, args, ctx, info]): Response => ctx.res,
);

export const GqlUser = createParamDecorator(
  (data, [root, args, ctx, info]): UserEntity => ctx.req && ctx.req.user,
);