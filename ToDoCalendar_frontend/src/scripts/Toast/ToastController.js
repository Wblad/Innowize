import toastr from 'toastr';

toastr.options = {
  closeButton: true,
  progressBar: true,
  positionClass: 'toast-bottom-right',
  extendedTimeOut: '2000',
};

export default class ToastController {
  static delete_all_messages() {
    toastr.remove();
  }

  static error(message, title = '', overrides = {}) {
    toastr.error(message, title, {
      timeOut: 20000,
      ...overrides,
    });
  }

  static info(message, title = '', overrides = {}) {
    toastr.info(message, title, {
      timeOut: 1000,
      ...overrides,
    });
  }

  static warning(message, title = '', overrides = {}) {
    toastr.warning(message, title, {
      timeOut: 10000,
      ...overrides,
    });
  }

  static success(message, title = '', overrides = {}) {
    toastr.success(message, title, {
      timeOut: 3000,
      ...overrides,
    });
  }
}
