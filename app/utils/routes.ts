export interface Navigation {
  id: string;
  path: string;
  label: string | null;
  title: string | null;
  enable: boolean;
  environment: { prod: boolean; dev: boolean };
}
