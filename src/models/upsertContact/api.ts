import apiUtil from '../../utilities/api';
import { IContact } from '../contacts/slice';

export const upsertContactApi = (data: IContact) => {
  return apiUtil({
    url: `contacts${data.id ? '/' + data.id : ''}`,
    method: data.id ? 'patch' : 'post',
    data,
  });
};
