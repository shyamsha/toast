export const NOTIFICATION_TYPES = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  INFO: "INFO",
  WARNING: "WARNING",
};

export const ACTION_TYPES = {
  ADD_NOTIFICATION: "ADD_NOTIFICATION",
  REMOVE_NOTIFICATION: "REMOVE_NOTIFICATION",
};

export interface ADD_NOTIFICATION {
  message: string;
  type: string;
}

export const computeNotificationConfigBasedOnType = (type: string) => {
  switch (type) {
    case NOTIFICATION_TYPES.SUCCESS: {
      return {
        classes: "success",
      };
    }

    case NOTIFICATION_TYPES.ERROR: {
      return {
        classes: "error",
      };
    }

    case NOTIFICATION_TYPES.INFO: {
      return {
        classes: "info",
      };
    }

    case NOTIFICATION_TYPES.WARNING: {
      return {
        classes: "warning",
      };
    }

    default:
      return {
        classes: "",
      };
  }
};
