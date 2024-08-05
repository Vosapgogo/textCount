const input_textarea = document.querySelector("#input-textarea")
const word_count = document.querySelector("#word_count")
const charac_count = document.querySelector("#charac_count")

function count() {
    const value_text = input_textarea.value
    const text_length = value_text.length
    const words = value_text.match(/([a-z]|\d)([\s|.|,|:|?|!|;|"|']|([a-z]|\d)$)/gm)
    const words_count = words.length

    console.log(text_length, words_count)

    charac_count.innerHTML = `${text_length}`
    word_count.innerHTML = `${word_count}`
}

input_textarea.oninput = count

