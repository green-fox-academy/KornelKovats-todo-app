  // Argument error handling

  export function checkArguments(myArgs:string[]) {
    if (
        myArgs.length === 3 &&
        myArgs[2] !== "-l" &&
        myArgs[2] !== "-a" &&
        myArgs[2] !== "-r" &&
        myArgs[2] !== "-c"
      ) {
        throw new Error("Unsupported argument");
      }
  }
 