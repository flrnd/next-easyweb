const stringToId = (myString: string): string => {
  return myString.toLocaleLowerCase().replace(/[^a-z0-9]/g, "-");
};

export default stringToId;
