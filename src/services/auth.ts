interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'wefjwefu3092euwefnruqwh1983rgwefn093ur320r2r',
        user: {
          name: 'Alan',
          email: 'alan@gmail.com',
        },
      });
    }, 2000);
  });
}
