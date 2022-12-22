import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from 'quiz-backend/src/router';

export const trpc = createTRPCReact<AppRouter>();
