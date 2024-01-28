declare interface CmdItem {
  id: string;
  title: string;
  subTitle: string;
  template: string;
  variables: { [key: string]: string };
}
