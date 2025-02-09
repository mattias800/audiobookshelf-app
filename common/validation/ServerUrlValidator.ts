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
  console.log("VALIDATE")
  try {
    const u = new URL(url);
    console.log("succucucu")
    return { serverUrl: u.toString(), type: "success" };
  } catch (e) {
    console.log("errorororirir")
    console.log(e)
    return { message: "Invalid server URL", type: "error" };
  }
};
