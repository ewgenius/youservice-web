import { install, applyUpdate } from 'offline-plugin/runtime'

export default class SW {
  constructor() {
    console.log('SW service initialized')
  }

  install() {
    install({
      onUpdating() {
        console.log('SW event: onUpdating')
      },

      onUpdateReady() {
        console.log('SW event: onUpdateReady')
        applyUpdate()
      },

      onUpdated() {
        console.log('SW event: onUpdated')
        window.location.reload()
      },

      onUpdateFailed() {
        console.log('SW event: onUpdateFailed')
      }
    })
  }
}