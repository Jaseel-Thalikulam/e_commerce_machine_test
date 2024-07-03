export function truncateText(text: string, type: "title"|"description", limit: number): string {
    if (type === 'title') {
        
        const words = text.split(' ');
        if (words.length <= 4) {
            return text;
        }
        return words.slice(0, 4).join(' ')
    } else if (type === 'description') {
     
        if (text.length <= limit) {
            return text;
        }

        
        return text.substring(0, limit) + '...';
    }

    return text;
}



export function capitalizeEveryWord(str: string) {
    if (!str) {
      return null;
    }
  
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  
  export function calculateTax(amount: number): number {
    const taxRate = 0.05; 
    return Math.round(amount * taxRate);
}

