export const getTrucateStr = (str: string, size: number = 100) => {
    return str.length < size ? str : str.substring(0, size) + "...";
};