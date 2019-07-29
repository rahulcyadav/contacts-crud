import apiUtil from '../../utilities/api';
import { IContact } from '../contacts/slice';

export const deleteContactApi = (id: number) => {
  return apiUtil({
    url: `contacts/${id}`,
    method: 'delete',
  });
};
