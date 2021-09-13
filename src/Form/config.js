const selectedOptions = [
    {
        label: "Oranges & Bananas",
        value: "fruits"
    },
    {
        label: "Corn, Oat, & Wheat",
        value: "grains"
    },
    {
        label: "Lentils, Peas, Beans, & Soy",
        value: "legumes"
    }
]
const inputValidationOptions = [
    {
        label: 'Valid characters: A-Z, a-z, 0-9, -',
        pattern: '^[A-Za-z0-9-]'
    },
    {
        label: 'Must start with A-Z',
        pattern: '^[A-Z]'
    },
    {
        label: 'Max length: 8',
        pattern: '^(?=.{0,8}$).*$'
    }
]
const checkboxGroupOptions = [
    {
        label: 'United States (US)',
        value: 'usa'
    },
    {
        label: 'United Kingdom (UK)',
        value: 'uk'
    },
    {
        label: 'Central African Republic (CAR)',
        value: 'car'
    },
    {
        label: 'United Arab Emirates (UAE)',
        value: 'prc'
    }
]
module.exports = {
    selectedOptions,
    inputValidationOptions,
    checkboxGroupOptions
}