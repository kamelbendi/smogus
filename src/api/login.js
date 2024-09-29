import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { login } from '@/services/users';

export default () => {
	return useMutation({
		mutationFn: ({ formData }) => {

			return login(formData);
		},
	});
};