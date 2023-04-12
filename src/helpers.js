function choice(items) {
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

function remove(items, item) {
    return items.filter(i => i !== item);
}

export {choice, remove}