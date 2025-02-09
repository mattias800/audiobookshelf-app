type ValidateServerUrlResult =
  | ValidateServerUrlSuccess
  | ValidateServerUrlError;

interface ValidateServerUrlSuccess {
  type: "success";
  serverUrl: string;
}

interface ValidateServerUrlError {
  type: "error";
  message: string;
}

export const validateServerUrl = (url: string): ValidateServerUrlResult => {
  // Validate the URL using URL constructor
  try {
    const u = new URL(url);
    return { serverUrl: u.toString(), type: "success" };
  } catch (e) {
    return { message: "Invalid server URL", type: "error" };
  }
};
