declare interface IListCommandCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'ListCommandCommandSetStrings' {
  const strings: IListCommandCommandSetStrings;
  export = strings;
}
