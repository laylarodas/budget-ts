export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

export function formatDate(dateStr: string) : string {
    const dateObj = new Date(dateStr);
    const options : Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        weekday: 'long',
        day: 'numeric' 
    }
    return new Intl.DateTimeFormat('en-US', options).format(dateObj);
}