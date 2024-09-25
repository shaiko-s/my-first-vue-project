import swal from 'sweetalert'

export function useFlash() {
  function flash(message) {
    return swal('Alert!', message, 'error')
  }

  return { flash }
}
