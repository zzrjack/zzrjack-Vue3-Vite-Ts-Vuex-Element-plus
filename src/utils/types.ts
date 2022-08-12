export interface registerType {
  name?: string;
  email: string;
  password: string;
  password2?: string;
  identity?: string;
}
export interface registerRulesType {
  name?: (
    | {
        required: boolean;
        message: string;
        trigger: string;
        min?: undefined;
        max?: undefined;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: undefined;
      }
  )[];
  email: {
    type: string;
    required: boolean;
    message: string;
    trigger: string;
  }[];
  password: (
    | {
        required: boolean;
        message: string;
        trigger: string;
        min?: undefined;
        max?: undefined;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: undefined;
      }
  )[];
  password2?: (
    | {
        required: boolean;
        message: string;
        trigger: string;
        min?: undefined;
        max?: undefined;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: undefined;
      }
    | {
        validator: (rule: any, value: string, callback: any) => void;
        trigger: string;
      }
  )[];
}
export interface userType {
  avatar: string;
  exp: number;
  iat: number;
  id: string;
  identity: string;
  name: string;
}
