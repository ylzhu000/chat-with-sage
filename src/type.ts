export enum Role {
  Human = 'human',
  Assistant = 'assistant',
}

export type TMessage = {
  role: Role;
  content: string;
  streaming?: boolean;
};
