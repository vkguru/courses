
  let progressOne = localStorage.getItem('lesxx1');
  let stored = localStorage.getItem('storage');
  let progressThree = localStorage.getItem('thirdkcnjc');

  let progressFour = localStorage.getItem('prfour');


  export const currentProgress = Number(progressOne) + Number(stored) + Number(progressThree);
  export const currentProgressOne = Number(progressFour);
