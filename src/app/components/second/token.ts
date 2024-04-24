import { InjectionToken } from "@angular/core";

type TokenType = {
  firstName: string;
  lastName: string;
}

export const TOKEN = new InjectionToken<TokenType>('some king of token with name and surname of the user');