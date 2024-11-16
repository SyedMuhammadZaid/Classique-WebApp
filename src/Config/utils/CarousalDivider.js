function carousalDivider(array, chunkSize) {
    const result = [];
    if (array) {
        for (let i = 0; i < array.length; i += chunkSize) {
            const chunk = array.slice(i, i + chunkSize);
            result.push(chunk);
        }
    }
    return result;
}

export default carousalDivider