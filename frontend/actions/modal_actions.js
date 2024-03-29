export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = id => ({
  type: OPEN_MODAL,
  id
});

export const closeModal = e => ({
  type: CLOSE_MODAL,
  e
});
