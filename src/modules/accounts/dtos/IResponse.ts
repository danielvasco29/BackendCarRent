interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export { IResponse };
