
export const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
}

export const generateRandomEmail = (): string => {
    const randomString = Math.floor(Math.random() * 9000) + 1000; // Generate a random number between 1000 and 9999
    return `user_${randomString}@test.com`;
}

export const slugify = (text: string): string => {
    const convertText = text.toLowerCase().replace(/\s+/g, '-');
    return convertText;
}

