import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Response } from 'express';
import { UserEntity } from '../../users/users.entity';

export const ResGql = createParamDecorator(
  (data, [root, args, ctx, info]): Response => ctx.res,
);

export const GqlUser = createParamDecorator(
  (data, [root, args, ctx, info]): UserEntity => ctx.req && ctx.req.user,
);

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const gqlCtx = GqlExecutionContext.create(ctx);
    const request = gqlCtx.getContext().req;
    return request.user.sub;
  },
);