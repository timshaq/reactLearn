export function unixToTimeAgo(unix: number) {
    const date = new Date(unix*1000);
    return date.toUTCString();
}