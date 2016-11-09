interface RuntimeOptions {
  onUpdating?: () => void
  onUpdateReady?: () => void
  onUpdated?: () => void
  onUpdateFailed?: () => void
}

declare module 'offline-plugin/runtime' {
  export function install(options?: RuntimeOptions): void

  export function applyUpdate(): void
}