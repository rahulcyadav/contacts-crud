import apiUtil from '../../utilities/api';

export const fetchContactsApi = () => {
  return apiUtil({
    url: `contacts`,
    method: 'get',
  });
};
