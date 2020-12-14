const HOST = "https://api.openai.com/v1/engines/curie";
const TOKEN = "QWERTYUIOP";

export const translate = async (plaintext) => {
    const examples =
        "What follows are conversions from descriptions of equations to their equivalent in LaTeX.\n###\n\nIntegrate sin of x with limits from 0 to pi / 2 with respect to x\n\\int_{0}^{\\pi / 2} x dx\n\nIntegrate without limits the function x with respect to x\n\\int x dx\n\nEquate the exponential of inverse tangent of x to 20\ne^{arctan(x)} = 20\n\nFind the differential of sin of y with respect to y\n\\frac{d}{dy} \\sin(y)\n\nFind the partial derivative of 2xy with respect to y\n\\frac{\\partial}{\\partial y} (2xy)\n\nFind the partial derivative of log of xy with respect to x\n\\frac{\\partial}{\\partial x} \\log(xy)\n\nIntegrate twice without limits the function sin of x multiplied by log of y with respect to x and y\n\\int \\sin(x) \\log(y) \\, dx \\, dy\n\n";

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + TOKEN,
        },
        body: JSON.stringify({
            prompt: examples + plaintext + "\n",
            max_tokens: 60,
            temperature: 0.1,
            n: 5,
            stop: "\n",
        }),
    };

    try {
        return await fetch(`${HOST}/completions`, requestOptions);
    } catch (err) {
        return err.response;
    }
};