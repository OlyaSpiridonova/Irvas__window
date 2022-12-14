// Функция, позволяющая записывать в input только только цифры
const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

   numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, "");
        });
    });
};

export default checkNumInputs;