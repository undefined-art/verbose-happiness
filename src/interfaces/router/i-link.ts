export interface ILink {
  name: string;
  path: string;
  isPrivate?: boolean;
  isAddition?: boolean;
  options?: ILink[];
}
