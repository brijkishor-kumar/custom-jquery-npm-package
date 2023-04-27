function $(selector) {
    const self = {
        element: document.querySelector(selector),
        css: (name, value) => {
            const colon = ":"
            self.element.style = name+colon+value;
        },
        on: (event, callback) => {
            self.element.addEventListener(event, callback);
        }
    };
    return self;
};

module.exports = $;