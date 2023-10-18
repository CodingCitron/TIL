/* mills 시간 후에 동작하게 하는 함수 */
export default function sleep (mills) {
    return new Promise((resolve, reject) => setTimeout(resolve, mills));
}