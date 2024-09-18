/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
    if (typeof bytes !== 'number' || bytes < 0) {
        return false;
    }

    // размерности числа
    const unitsOfMeasurement = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];

    let result = bytes;

    // счетчик переводов числа
    let convertCnt = 0;

    // пока длина целой части числа больше 3 (значит не совсем удобно для чтения)
    while (String(Math.floor(result)).length > 3) {
        // если текущая размерность на границе доступных для перевода
        if (convertCnt === unitsOfMeasurement.length - 1) {
            break;
        }

        convertCnt += 1;
        result /= 1024;
    }

    // использую Number, чтобы убрать лишние нули в конце числа
    result = Number(result.toFixed(result === Math.floor(result) ? 0 : 2));

    return `${result} ${unitsOfMeasurement[convertCnt]}`;
}
