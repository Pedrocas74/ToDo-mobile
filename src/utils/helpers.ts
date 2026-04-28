//helper utilities: filtering, validation, id generation

export const isNonEmpty = (text: string): boolean => { 
  if (text == null) return false;
  return text.trim().length > 0;
};

export const sanitize = (text: string): string => text.trim(); 



export const generateId = (): string => Date.now().toString();
