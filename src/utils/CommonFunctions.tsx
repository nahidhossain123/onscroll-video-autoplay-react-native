export const getNameInitials = (name: string) => {
    let words = name.split(' ');
    return words[0][0];
  };