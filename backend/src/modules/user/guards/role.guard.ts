import { Role } from '../enums/role.enum';
import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import { RequestWithUser } from "../../auth/requestWithUser.interface";

export const RoleGuard = (role: Role): Type<CanActivate> => {
  class RoleGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext) {
      const request = context.switchToHttp().getRequest<RequestWithUser>();
      const user = request.user;

      return user?.role.includes(role);
    }
  }

  return mixin(RoleGuardMixin);
}
