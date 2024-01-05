import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoUpload = await uploadPhoto();
    const userCreate = await createUser();
    return { photo: photoUpload, user: userCreate };
  } catch (error) {
    return { photo: null, user: null };
  }
}
