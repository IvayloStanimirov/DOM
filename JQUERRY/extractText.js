function extractText() {
const content = $('#items *')
.toArray()
.map((elem) => elem.textContent)
.join(', ')

$('#result').text(content);

}