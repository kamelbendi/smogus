import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { register } from '@/services/users';
import { RegisterVariables, UserResponse } from '@/types/schemas/user';

export default () => {
	return useMutation({
		mutationFn: ({ email, username, password }) => {
            
			return register(email, username, password);
		},
	});
};
