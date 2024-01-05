import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  const promise = Promise.allSettled([
    signUpUserPromise,
    uploadPhotoPromise,
  ]).then((data) => {
    const array = [];
    // loop through the settled promises response
    data.forEach((item) => {
      if (item.status === 'fulfilled') {
        array.push({ status: item.status, value: item.value });
      } else {
        array.push({ status: item.status, value: `${item.reason}` });
      }
    });
    // console.log(array);
    return array;
  });
  return promise;
}
